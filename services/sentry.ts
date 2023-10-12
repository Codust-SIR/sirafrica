// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
const SANITY_SECRET_TOKEN =
  "skMJBYfgNUPGAu9SCcBpcakqwOKk8kizpoRthnl1cUFGoCV28uKpVp7W8GN8u5GbqS6A2DpWQxHxoErKLFcN25zxCW7iwfuxDc16V9JYzn7OtN6s827Y8E4mjL9f2xa6HWB0FIAvACZO4ZUar0I99kBmuuafJP2mDqXB4YZKI8olGHKw2cyh";
export const client = createClient({
  projectId: "fzwmuftm",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  token: SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getBlogs() {
  const blogs = await client.fetch(`
    *[_type == "blog"] {
      author-> {
        fullName,
        position,
        profile {
          asset-> {
            url
          }
        }
      },
      title,
      description,
      body
    }
  `);

  return blogs;
}
export interface Team {
  _type: "teams";
  name: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  members: Member[];
}

export interface Member {
  _type: "memberImage"; // Specify the type as "memberImage"
  caption: string;
  _key: string;
  memberImage: MemberImage;
}

export interface MemberImage {
  asset: {
    url: string;
    _ref: string;
  };
}

export async function getTeam(teamName: string): Promise<Team> {
  let team: Team = await client.fetch(
    `
    *[_type == "teams" && name == $teamName][0]
  `,
    { teamName }
  );

  const imageUrl = async (_ref: string): Promise<string> => {
    // Fetch the asset using the reference
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: _ref,
    });

    return asset.url;
  };

  const updatedMembers: Member[] = await Promise.all(
    team.members.map(async (member) => {
      const imageUrlValue = await imageUrl(member.memberImage.asset._ref);
      const updatedMember: Member = {
        _type: "memberImage",
        caption: member.caption,
        _key: member._key,
        memberImage: {
          asset: { url: imageUrlValue, _ref: member.memberImage.asset._ref },
        },
      };
      return updatedMember;
    })
  );

  team.members = updatedMembers;

  console.log("Updated Team:", team); // Log the updated team with image URLs

  return team;
}

export interface BoardMember {
  position: string;
  fullname: string;
  profile: {
    asset: {
      url: string;
      _ref: string;
    };
    _ref: string;
  };
  _key: string;
  _type: "profile";
  desc: {
    children: { text: string }[];
  }[];
}

export async function getBoardMember(
  boardName: string
): Promise<BoardMember[]> {
  let board: {
    members: BoardMember[];
  } = await client.fetch(
    `
    *[_type == "board_members" && board_name == $board_name][0]
  `,
    { board_name: boardName }
  );
  console.log("boardMembers A :>>", board.members);

  const imageUrl = async (_ref: string): Promise<string> => {
    // Fetch the asset using the reference
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: _ref,
    });

    return asset.url;
  };

  const updatedMembers: BoardMember[] = await Promise.all(
    board.members.map(async (member) => {
      const imageUrlValue = await imageUrl(member.profile.asset._ref);
      const updatedMember: BoardMember = {
        _type: "profile",
        _key: member._key,
        profile: {
          asset: { url: imageUrlValue, _ref: member.profile._ref },
          _ref: member.profile._ref,
        },
        position: member.position,
        desc: member.desc,
        fullname: member.fullname,
      };
      return updatedMember;
    })
  );

  board.members = updatedMembers;

  return board.members;
}

export interface Logo {
  name: string;
  description: { children: { text: string }[] }[];
  url: string;
  imageFile: {
    asset: {
      url: string;
      _ref: string;
    };
  };
}
export async function getPartners(boardName: string): Promise<Logo[]> {
  let partners: {
    logo: Logo[];
  } = await client.fetch(
    `
    *[_type == "partners" && name == $name][0]
  `,
    { name: boardName }
  );

  const imageUrl = async (_ref: string): Promise<string> => {
    // Fetch the asset using the reference
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: _ref,
    });

    return asset.url;
  };

  const updatedPartners: Logo[] = await Promise.all(
    partners.logo.map(async (lo) => {
      const imageUrlValue = await imageUrl(lo.imageFile.asset._ref);
      const updatedPartner: Logo = {
        name: lo.name,
        description: lo.description,
        url: lo.url,
        imageFile: {
          asset: {
            _ref: lo.imageFile.asset._ref,
            url: imageUrlValue,
          },
        },
      };
      return updatedPartner;
    })
  );

  partners.logo = updatedPartners;

  return partners.logo;
}
export async function getBlogsNewsAndReport(boardName: string): Promise<Logo[]> {
  let partners: {
    logo: Logo[];
  } = await client.fetch(
    `
    *[_type == "blog_news_story" && name == $name][0]
  `,
    { name: boardName }
  );

  const imageUrl = async (_ref: string): Promise<string> => {
    // Fetch the asset using the reference
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: _ref,
    });

    return asset.url;
  };

  // const updatedPartners: Logo[] = await Promise.all(
  //   partners.logo.map(async (lo) => {
  //     const imageUrlValue = await imageUrl(lo.imageFile.asset._ref);
  //     const updatedPartner: Logo = {
  //       name: lo.name,
  //       description: lo.description,
  //       url: lo.url,
  //       imageFile: {
  //         asset: {
  //           _ref: lo.imageFile.asset._ref,
  //           url: imageUrlValue,
  //         },
  //       },
  //     };
  //     return updatedPartner;
  //   })
  // );

  // partners.logo = updatedPartners;

  return partners.logo;
}

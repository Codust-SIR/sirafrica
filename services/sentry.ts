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
  desc: any[];
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
export interface BlogNewsStory {
  _createdAt: string;
  _rev: string;
  _type: "blog_news_story" | string;
  description: string;
  _id: string;
  dateCreated: string;
  author: {
    _type: string;
    _ref: string;
  };
  body: any;
  title: string;
  type: "Blog" | "News" | "Report" | "Story";
  cover: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
      url: string;
    };
  };
}

export async function getBlogsNewsAndReport(
  boardName: string
): Promise<BlogNewsStory[]> {
  let blogNewsStory: BlogNewsStory[] = await client.fetch(`
    *[_type == "blog_news_story"]
  `);

  const imageUrl = async (_ref: string): Promise<string> => {
    // Fetch the asset using the reference
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: _ref,
    });

    return asset.url;
  };

  const imageUrls = await Promise.all(
    blogNewsStory.map((item) => imageUrl(item.cover.asset._ref))
  );

  const updatedBlogNewsStory: BlogNewsStory[] = blogNewsStory.map(
    (item, index) => {
      const coverImage = {
        ...item.cover,
        asset: {
          _ref: item.cover.asset._ref,
          _type: item.cover.asset._type,
          url: imageUrls[index],
        },
      };
      return {
        _createdAt: item._createdAt,
        _rev: item._rev,
        _type: item._type,
        _id: item._id,
        description: item.description,
        dateCreated: item.dateCreated,
        title: item.title,
        type: item.type,
        cover: coverImage,
        body: item.body,
        author: item.author,
      };
    }
  );

  blogNewsStory = updatedBlogNewsStory;

  return blogNewsStory;
}

/**
 * 
 *         {
            "_updatedAt": "2023-10-10T13:37:18Z",
            "_createdAt": "2023-10-08T13:44:23Z",
            "_rev": "fUjEahCPz7h1P7gD2kt6ib",
            "_type": "blog_news_story",
            "description": "Despite significant progress, refugee education in Kenya still faces challenges, including lack of funding, language barrier, and social and emotional challenges. However, the Kenyan government, UNHCR, and other international organizations are working to improve the quality and accessibility of education for refugee children.",
            "_id": "d6a4fa69-2906-47cd-ba64-8c869c8bc7cc",
            "cover": {
                "_type": "image",
                "asset": {
                    "_ref": "image-8fea74407ad6c4bdd97bce6462c155dbf34d7053-1400x630-png",
                    "_type": "reference"
                }
            },
            "dateCreated": "2023-10-10T13:35:20.811Z",
            "author": {
                "_type": "reference",
                "_ref": "b52982f4-3556-4fdc-954d-928b91886a65"
            },
            "body": [
                {
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "Education is a fundamental human right, and it is especially important for refugees. Education can help refugees to rebuild their lives, develop skills, and contribute to their communities. However, refugees often face significant challenges in accessing education.",
                            "_key": "c9ab7bb8f32d0"
                        }
                    ],
                    "_type": "block",
                    "style": "normal",
                    "_key": "4d266e1a2ff4",
                    "markDefs": []
                },
                {
                    "style": "normal",
                    "_key": "f60f9b13f8cb",
                    "markDefs": [],
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "In Kenya, refugee children have access to primary and secondary education in the Dadaab and Kakuma refugee camps, and the Kalobeyei settlement. Primary education is provided free of charge, while a small contribution is levied at the secondary level. Refugee children can also attend public schools in urban areas, but they are required to have a valid refugee card.",
                            "_key": "9a993420907c0"
                        }
                    ],
                    "_type": "block"
                },
                {
                    "markDefs": [],
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "Despite these efforts, there are still many challenges to refugee education in Kenya. One of the biggest challenges is a lack of funding. Refugee education is largely funded by international donors, and this funding is often unpredictable. As a result, schools in refugee camps and settlements often lack resources such as textbooks, teachers, and classrooms.",
                            "_key": "7feca98965e10"
                        }
                    ],
                    "_type": "block",
                    "style": "normal",
                    "_key": "f1415e345665"
                },
                {
                    "style": "normal",
                    "_key": "c83025cbf6a2",
                    "markDefs": [],
                    "children": [
                        {
                            "marks": [],
                            "text": "Another challenge is the language barrier. Many refugee children do not speak English, which is the language of instruction in Kenyan schools. This can make it difficult for them to learn and keep up with their classmates.",
                            "_key": "d6f4b090a0df0",
                            "_type": "span"
                        }
                    ],
                    "_type": "block"
                },
                {
                    "style": "normal",
                    "_key": "534ed140af13",
                    "markDefs": [],
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "Refugee children also face a number of social and emotional challenges. They may have experienced trauma and loss, and they may be struggling to adjust to their new lives. This can make it difficult for them to focus on their education.",
                            "_key": "46c083e78d3c0"
                        }
                    ],
                    "_type": "block"
                },
                {
                    "_type": "block",
                    "style": "normal",
                    "_key": "7808f321ae71",
                    "markDefs": [],
                    "children": [
                        {
                            "text": "Despite the challenges, there has been significant progress in refugee education in Kenya in recent years. The number of refugee children enrolled in school has increased significantly, and the quality of education has improved. This is due to the efforts of the Kenyan government, UNHCR, and other international organizations.",
                            "_key": "a2e39b9b0c060",
                            "_type": "span",
                            "marks": []
                        }
                    ]
                },
                {
                    "_type": "block",
                    "style": "normal",
                    "_key": "9fc741c6e50b",
                    "markDefs": [],
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "Here are some examples of the progress that has been made:",
                            "_key": "1c4665e72cad0"
                        }
                    ]
                },
                {
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "In 2022, the Kenyan government launched a new curriculum for refugee schools. This curriculum is aligned with the Kenyan national curriculum, and it will help to prepare refugee children for success in the Kenyan education system.",
                            "_key": "4edc27be224c0"
                        }
                    ],
                    "level": 1,
                    "_type": "block",
                    "style": "normal",
                    "_key": "ba9e0ee85386",
                    "listItem": "bullet",
                    "markDefs": []
                },
                {
                    "_key": "a2e7a99ce00b",
                    "markDefs": [],
                    "children": [
                        {
                            "marks": [],
                            "text": "",
                            "_key": "9cb0341e93e90",
                            "_type": "span"
                        }
                    ],
                    "_type": "block",
                    "style": "normal"
                },
                {
                    "children": [
                        {
                            "marks": [],
                            "text": "UNHCR is working with partners to provide teacher training and support in refugee camps and settlements. This is helping to improve the quality of teaching and learning.",
                            "_key": "7e8e98a4a08d0",
                            "_type": "span"
                        }
                    ],
                    "level": 1,
                    "_type": "block",
                    "style": "normal",
                    "_key": "ce112fd65241",
                    "listItem": "bullet",
                    "markDefs": []
                },
                {
                    "markDefs": [],
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "",
                            "_key": "a1f9d0116c0e0"
                        }
                    ],
                    "_type": "block",
                    "style": "normal",
                    "_key": "28424a990425"
                },
                {
                    "style": "normal",
                    "_key": "615a73901e73",
                    "listItem": "bullet",
                    "markDefs": [],
                    "children": [
                        {
                            "text": "A number of international organizations are providing scholarships and other support to refugee students who want to attend secondary school and university.",
                            "_key": "fa0a6c3311c20",
                            "_type": "span",
                            "marks": []
                        }
                    ],
                    "level": 1,
                    "_type": "block"
                },
                {
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "Despite the progress that has been made, there is still more work to be done to ensure that all refugee children in Kenya have access to quality education. We need to continue to invest in refugee education and to support refugee students and their families.",
                            "_key": "ed6894a735180"
                        }
                    ],
                    "_type": "block",
                    "style": "normal",
                    "_key": "bc3996aad318",
                    "markDefs": []
                },
                {
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "Here are some things that you can do to help:",
                            "_key": "81e5e60ae4ab0"
                        }
                    ],
                    "_type": "block",
                    "style": "normal",
                    "_key": "b550b004a4c0",
                    "markDefs": []
                },
                {
                    "style": "normal",
                    "_key": "26c47e6c288f",
                    "listItem": "bullet",
                    "markDefs": [],
                    "children": [
                        {
                            "_key": "814dd963edad0",
                            "_type": "span",
                            "marks": [],
                            "text": "Donate to organizations that are supporting refugee education in Kenya."
                        }
                    ],
                    "level": 1,
                    "_type": "block"
                },
                {
                    "children": [
                        {
                            "text": "",
                            "_key": "f4e4505ceaa70",
                            "_type": "span",
                            "marks": []
                        }
                    ],
                    "_type": "block",
                    "style": "normal",
                    "_key": "ebe451a6b684",
                    "markDefs": []
                },
                {
                    "listItem": "bullet",
                    "markDefs": [],
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "Volunteer to teach or tutor refugee students.",
                            "_key": "41b197cc58370"
                        }
                    ],
                    "level": 1,
                    "_type": "block",
                    "style": "normal",
                    "_key": "717ba3912127"
                },
                {
                    "_type": "block",
                    "style": "normal",
                    "_key": "360ac8ac51ae",
                    "markDefs": [],
                    "children": [
                        {
                            "_type": "span",
                            "marks": [],
                            "text": "",
                            "_key": "f7d8440415690"
                        }
                    ]
                },
                {
                    "_type": "block",
                    "style": "normal",
                    "_key": "9e2ad3a23fba",
                    "listItem": "bullet",
                    "markDefs": [],
                    "children": [
                        {
                            "_key": "5dbf886d39360",
                            "_type": "span",
                            "marks": [],
                            "text": "Advocate for refugee education with your government representatives."
                        }
                    ],
                    "level": 1
                },
                {
                    "_key": "61b249654f62",
                    "markDefs": [],
                    "children": [
                        {
                            "text": "",
                            "_key": "fc59a5a293900",
                            "_type": "span",
                            "marks": []
                        }
                    ],
                    "_type": "block",
                    "style": "normal"
                },
                {
                    "_type": "block",
                    "style": "normal",
                    "_key": "cd8ab140f45a",
                    "listItem": "bullet",
                    "markDefs": [],
                    "children": [
                        {
                            "text": "Spread the word about the importance of refugee education.",
                            "_key": "ede969dea5960",
                            "_type": "span",
                            "marks": []
                        }
                    ],
                    "level": 1
                }
            ],
            "title": "Refugees' education in Kenya: Challenges and progress",
            "type": "Blog"
        }
 */

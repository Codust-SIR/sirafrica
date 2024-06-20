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
    position: string;
    fullName: string;
    profile: {
      asset: {
        url: string;
        _ref: string;
      };
      _ref: string;
    };
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

export const getBlogsNewsAndReportById = async (
  id: string
): Promise<BlogNewsStory> => {
  // And populate author
  let blogNewsStory: BlogNewsStory = await client.fetch(
    `
    *[_type == "blog_news_story" && _id == $id][0]
  `,
    { id }
  );

  const imageUrl = async (_ref: string): Promise<string> => {
    // Fetch the asset using the reference
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: _ref,
    });

    return asset.url;
  };

  const getAuthor = async (_ref: string) => {
    const author = await client.fetch(`*[_id == $ref][0]`, {
      ref: _ref,
    });
    author.profile.asset.url = await imageUrl(author.profile.asset._ref);
    return author;
  };

  blogNewsStory.cover.asset.url = await imageUrl(
    blogNewsStory.cover.asset._ref
  );
  blogNewsStory.author = await getAuthor(blogNewsStory.author._ref);

  return blogNewsStory;
};

export interface Job {
  job_title: string;
  category: string;
  job_type: string;
  job_location: string;
  _id: string;
  job_deadline: string;
  link_og: string;
  body: any;
}

export async function getJobs(): Promise<Job[]> {
  let jobs: Job[] = await client.fetch(`
    *[_type == "jobs"]
  `);

  return jobs;
}

// Get job by id

export async function getJobById(id: string): Promise<Job> {
  let job: Job = await client.fetch(
    `
    *[_type == "jobs" && _id == $id][0]
  `,
    { id }
  );

  return job;
}

export interface Product {
  _id: string;
  category: string;
  name: string;
  description: string;
  body: any;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  price: number;
  slug: {
    current: string;
  };
}

export async function getProducts(): Promise<Product[]> {
  let products: Product[] = await client.fetch(`
    *[_type == "products"]
  `);

  console.log({ products });

  const imageUrl = async (_ref: string): Promise<string> => {
    // Fetch the asset using the reference
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: _ref,
    });

    return asset.url;
  };

  const imageUrls = await Promise.all(
    products.map((item) => imageUrl(item.image.asset._ref))
  );

  const updatedProducts: Product[] = products.map((item, index) => {
    const coverImage = {
      ...item.image,
      asset: {
        _ref: item.image.asset._ref,
        url: imageUrls[index],
      },
    };
    return {
      _id: item._id,
      category: item.category,
      name: item.name,
      description: item.description,
      body: item.body,
      image: coverImage,
      price: item.price,
      slug: item.slug,
    };
  });

  products = updatedProducts;

  return products;
}

export async function getProductById(id: string): Promise<Product> {
  let product: Product = await client.fetch(
    `
    *[_type == "products" && _id == $id][0]
  `,
    { id }
  );

  const imageUrl = async (_ref: string): Promise<string> => {
    // Fetch the asset using the reference
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: _ref,
    });

    return asset.url;
  };

  product.image.asset.url = await imageUrl(product.image.asset._ref);

  return product;
}

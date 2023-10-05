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
  _type: 'teams';
  name: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  members: Member[];
}

interface Member {
  _type: 'memberImage';
  caption: string;
  _key: string;
  memberImage: MemberImage;
}

interface MemberImage {
  // Define the properties of the memberImage object as needed
  // For example, if you have properties like URL, dimensions, etc.
  // You can add them here.
  // Example:
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
  // Add other properties if necessary
}


export async function getTeam(teamName: string):Promise<Team> {
  const team:Team = await client.fetch(`
    *[_type == "teams" && name == $teamName][0]
  `, { teamName });

  return team;
}

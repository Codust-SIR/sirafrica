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


export async function getNews() {
  const news = await client.fetch(`
    *[_type == "news"] {
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

  return news;
}


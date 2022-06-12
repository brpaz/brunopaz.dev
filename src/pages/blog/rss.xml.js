// src/pages/rss.xml.js
import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("../blog/**/*.md");

const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Bruno Paz Engineering Blog",
    // `<description>` field in output xml
    description:
      "Bruno Paz personal blog. Posts about coding, engineering and computers in general",
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: `${import.meta.env.SITE}/blog`,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: posts
      .filter((post) => post.frontmatter.published)
      .map((post) => ({
        link: post.frontmatter.slug,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date,
      })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });

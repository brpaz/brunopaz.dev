// Read all blog posts and generate social images
import fs from "fs/promises";
import fm from "front-matter";
import chalk from "chalk";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { dirname } from "path";
import getShareImage from "@jlengstorf/get-share-image";
import glob from "glob-promise";

import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const postsDir = path.join(__dirname, "..", "src", "pages", "blog");

try {
  console.log(chalk.yellow("Getting posts to process"));

  const posts = await glob(path.join(postsDir, "*.md"));

  await processPosts(posts);
} catch (e) {
  console.log(chalk.red(`Failed to process: ${e.message}`));
  process.exit(1);
}

async function processPosts(posts) {
  posts.forEach(async (post) => {
    try {
      const postFilename = path.basename(post);
      await processPost(postFilename);
    } catch (e) {
      console.log(chalk.red(`Error when processing ${post}: ${e.message}`));
    }
  });
}

async function processPost(filename) {
  let fileContents;
  try {
    fileContents = await fs.readFile(path.join(postsDir, filename));
  } catch (e) {
    throw new Error(`Failed to read file ${filename}: ${e.message}`);
  }

  var postFM = fm(fileContents.toString());

  const postTitle = postFM.attributes.title;

  console.log(chalk.yellow(`Generating preview for post: ${postTitle}`));

  const imageUrl = getShareImage({
    title: postTitle,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    imagePublicID: process.env.CLOUDINARY_SOCIAL_PREVIEW_TEMPLATE,
    titleFont: "futura",
    taglineFont: "futura",
    textColor: "60a5fa",
  });

  const response = await fetch(imageUrl);

  if (response.status !== 200) {
    throw new Error(
      `Cannot fetch image from Cloudinary. Status Code: ${response.statusText}`
    );
  }

  const destFilePath = path.join(
    __dirname,
    "..",
    "public",
    "img",
    "blog",
    `preview-${postFM.attributes.slug}.png`
  );

  const arrayBuffer = await response.arrayBuffer();
  await fs.writeFile(destFilePath, Buffer.from(arrayBuffer));

  console.log(chalk.green(`Saved preview ${destFilePath}`));
}

/**
 * This script uploads all the local images of the website to
 * Cloudinary. The following envrionment variables must be set:
 * CLOUDINARY_FOLDER - The base folder where the images will be uploaded.
 * CLOUDINARY_URL - The URL of your Cloudinary account.
 */
import path from "path";
import { fileURLToPath } from "url";
import glob from "glob";
import chalk from "chalk";
import { v2 as cloudinary } from "cloudinary";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const publicDir = path.join(__dirname, "..", "public");

const imagesRootDir = path.join(publicDir, "img");

const cloudinaryBaseDir = process.env.CLOUDINARY_FOLDER;

if (!cloudinaryBaseDir) {
  console.error(
    chalk.red("Environment variable CLOUDINARY_FOLDER is required.")
  );
  process.exit(1);
}

if (!process.env.CLOUDINARY_URL) {
  console.error(chalk.red("Environment variable CLOUDINARY_URL is required."));
  process.exit(1);
}

async function run() {
  const files = await glob(`${imagesRootDir}/**/*.{jpg,png,svg}`);
  console.log(chalk.yellow(`Found ${files.length} files to upload.`));
  
  for (let file of files) {
    const subPath = file.replace(publicDir, "").slice(1);

    const folder = path.join(cloudinaryBaseDir, path.dirname(subPath));
    const fileName = path.basename(subPath);

    console.log(chalk.yellow(`Uploading file: ${subPath}`));
    try {
      await cloudinary.uploader.upload(file, {
        folder: folder,
        access_mode: "public",
        exif: false,
        overwrite: false,
        use_filename: true,
        unique_filename: false,
        filename_override: fileName,
      });
    } catch (error) {
      console.log(chalk.red(`Failed to Upload ${subPath}: ${error.message}`));
    }
  }
}

await run();

import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminOptipng from "imagemin-optipng";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs/promises";
import glob from "glob-promise";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesRootDir = path.join(__dirname, "..", "public", "img");

async function getImageDirs() {
  const imageDirs = [];

  const files = await glob(`${imagesRootDir}/**`);

  for (let file of files) {
    const fstat = await fs.stat(file);

    if (fstat.isDirectory()) {
      imageDirs.push(file);
    }
  }

  return imageDirs;
}

const imageDirs = await getImageDirs();

for (let path of imageDirs) {
  await imagemin([`${path}/*.{jpg,png}`], {
    destination: path,
    plugins: [imageminOptipng(), imageminJpegtran()],
  });
}

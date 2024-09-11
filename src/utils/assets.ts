import type { ImageMetadata } from 'astro';

/**
 * Helper function that imports an asset from the assets folder.
 * @param assetPath The relative path to the asset in the assets folder.
 */
export async function loadAsset(assetPath: string): Promise<ImageMetadata> {
  return (
    await import(/* @vite-ignore */ `../assets/images/projects/${assetPath}`)
  ).default;
}

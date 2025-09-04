import fs from "fs";
import path from "path";

export type Artwork = {
  src: string;        // /images/artwork.png
  metadata: any | null;
};

// read once at module load
function loadArtworks(): Artwork[] {
  const dir = path.join(process.cwd(), "public/images");

  return fs.readdirSync(dir)
    // only keep images
    .filter(file => /\.(png|jpe?g|webp|gif|svg)$/i.test(file))
    .map(file => {
      const imagePath = `/images/${file}`;
      const jsonPath = path.join(dir, `${file}.json`);

      let metadata: any = null;
      if (fs.existsSync(jsonPath)) {
        try {
          metadata = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
        } catch (err) {
          console.error(`❌ Failed to parse metadata for ${file}`, err);
        }
      }

      return { src: imagePath, metadata };
    });
}

// cached result
const ALL_ARTWORKS: Artwork[] = loadArtworks();

export function getArtworks(): Artwork[] {
  return ALL_ARTWORKS;
}

export function getArtworksByCategory(category: string): Artwork[] {
  return ALL_ARTWORKS.filter(
    a =>
      a.metadata?.categories &&
      Array.isArray(a.metadata.categories) &&
      a.metadata.categories.includes(category)
  );
}

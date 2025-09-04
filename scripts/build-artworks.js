import fs from "fs";
import path from "path";


function buildArtworks() {
  const dir = path.join(process.cwd(), "public/images");

  return fs.readdirSync(dir)
    .filter(file => /\.(png|jpe?g|webp|gif|svg)$/i.test(file))
    .map(file => {
      const imagePath = `/images/${file}`;
      const jsonPath = path.join(dir, `${file}.json`);

      let metadata = null;
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

// Write manifest.json
const outputPath = path.join(process.cwd(), "public/artworks.json");
fs.writeFileSync(outputPath, JSON.stringify(buildArtworks(), null, 2));
console.log("✅ Generated artworks.json");

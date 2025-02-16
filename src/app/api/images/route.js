import fs from "fs";
import path from "path";

export async function GET(req) {
  const imagesDirectory = path.join(process.cwd(), "public", "images");

  try {
    const imageFiles = fs.readdirSync(imagesDirectory).filter((file) => file.endsWith(".png") || file.endsWith(".jpg"));
    return new Response(JSON.stringify(imageFiles), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error reading images directory" }), { status: 500 });
  }
}

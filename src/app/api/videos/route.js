import fs from "fs";
import path from "path";

export async function GET(req) {
    const videosDirectory = path.join(process.cwd(), "public", "videos");

    try {
        const videoFiles = fs.readdirSync(videosDirectory).filter((file) => file.endsWith(".mp4"));
        return new Response(JSON.stringify(videoFiles), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Error reading images directory" }), { status: 500 });
    }
}

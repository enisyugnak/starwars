const path = require("path");
const sharp = require("sharp");

export async function GET(req, { params }) {
  const { image } = await params;
  const imagePath = path.join(process.cwd(), "public", image);
  try {
    // Try reading and processing the image with sharp
    const buffer = await sharp(imagePath)
      .resize(30) // or any processing you want
      .blur()
      .toBuffer();

    // Convert the image to base64 and return
    const base64 = buffer.toString("base64");
    const blurDataURL = `data:image/webp;base64,${base64}`;

    return new Response(JSON.stringify({ blurDataURL }), { status: 200 });
  } catch (error) {
    console.error("Error processing image:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

import type { NextConfig } from "next";
import * as fs from 'fs';
import * as path from 'path';

// Self-healing asset copy
try {
  const srcPath = '/home/aditya/.gemini/antigravity/brain/58ad5f04-000b-4326-8657-db3378643ae1/government_building_1787801236195.png';
  const destPath = path.join(process.cwd(), 'public', 'government-building.png');
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log("Successfully copied hero image to public/government-building.png");
  }
} catch (e) {
  console.error("Asset copy failed:", e);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

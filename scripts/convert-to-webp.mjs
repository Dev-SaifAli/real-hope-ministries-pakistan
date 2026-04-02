// scripts/convert-to-webp.mjs
// ─────────────────────────────────────────────────────────────
// Run this once with:  node scripts/convert-to-webp.mjs
// It will convert all .png / .jpg files in /public/projects
// to .webp format and save them in the same folder
// ─────────────────────────────────────────────────────────────

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// __dirname is not available in ES modules, so we recreate it
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ── Folder where your images are ──
const inputDir = path.join(__dirname, '..', 'public', 'projects')

// ── Get all .png and .jpg files in that folder ──
const imageFiles = fs.readdirSync(inputDir).filter((file) =>
  ['.png', '.jpg', '.jpeg'].includes(path.extname(file).toLowerCase())
)

if (imageFiles.length === 0) {
  console.log('❌ No PNG/JPG images found in /public/projects')
  process.exit(0)
}

console.log(`🔄 Found ${imageFiles.length} image(s) to convert...\n`)

// ── Convert each image ──
for (const file of imageFiles) {
  const inputPath = path.join(inputDir, file)

  // Replace the extension with .webp
  // e.g. clean-water.png → clean-water.webp
  const outputFileName = path.basename(file, path.extname(file)) + '.webp'
  const outputPath = path.join(inputDir, outputFileName)

  try {
    await sharp(inputPath)
      .webp({ quality: 85 })   // 85 = great quality, smaller file size
      .toFile(outputPath)

    // Show original vs new file size
    const originalSize = (fs.statSync(inputPath).size / 1024).toFixed(1)
    const newSize = (fs.statSync(outputPath).size / 1024).toFixed(1)

    console.log(`✅ ${file}`)
    console.log(`   ${originalSize} KB  →  ${newSize} KB (.webp)\n`)
  } catch (err) {
    console.error(`❌ Failed to convert ${file}:`, err)
  }
}

console.log('🎉 All images converted to WebP!')
console.log('📁 Saved in: public/projects/')
console.log('\n💡 Next step: update image paths in MinistriesSection.tsx')
console.log('   Change .jpg/.png extensions to .webp in the projects array')

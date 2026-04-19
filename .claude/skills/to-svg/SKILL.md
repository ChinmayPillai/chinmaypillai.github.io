---
name: to-svg
description: Convert a raster image (PNG/JPG/WebP) to a `.svg` file by base64-embedding the resized raster inside an SVG `<image>` wrapper, then delete the original. Use when the user wants a tech-stack logo or other public/ asset to have a `.svg` extension for consistency, but they don't have a true vector source. The output renders identically in the browser; it is not a real vector trace.
---

# to-svg

Wraps a raster image in an SVG that base64-embeds it as `<image href="data:image/png;base64,…"/>`. The output has a `.svg` extension and renders pixel-identically to the source raster, but is not a true vector — it cannot be re-coloured, scaled crisper than its source resolution, or edited as paths.

## Why not just `magick foo.png foo.svg`

ImageMagick's SVG output delegate on this machine is **potrace**, which performs a B&W silhouette trace. For colour brand logos (LangGraph, CloudWatch, Terraform, …) potrace flattens the entire image to a single black blob — useless. The base64-embed approach in this skill avoids that by hand-templating the SVG XML around the raster.

For a *real* vector logo, prefer hand-sourcing from:

- [devicon.dev](https://devicon.dev) — programming languages, frameworks, tools
- [simple-icons.org](https://simple-icons.org) — brand logos (monochrome)
- [vectorlogo.zone](https://www.vectorlogo.zone) — full-colour brand logos

Only fall back to this skill when no proper SVG exists upstream.

## Output spec

| Property | Value |
|----------|-------|
| Path | sibling of input with `.svg` extension (e.g. `foo.png` → `foo.svg`) |
| Max dimension | 256 × 256 (4× the 60 px display size in `TechStack.tsx`, plenty of retina headroom) |
| Format | well-formed SVG with embedded PNG payload |
| Transparency | preserved (no `-alpha remove`); the icon container's `iconSx.backgroundColor` shows through |
| Original raster | deleted after successful conversion |

## Procedure

1. **Resolve paths.** The user gives an input path (jpg/png/webp/jpeg/gif/bmp). The destination defaults to the sibling `.svg` (`public/foo/bar.png` → `public/foo/bar.svg`). If the user supplies an explicit destination, honour it.

2. **Sanity-check the source.** Run `magick identify "$INPUT"` and report dimensions + size. Refuse animated sources (GIF, APNG) — pick a static frame manually first.

3. **Pre-resize and embed.** Use this template (substitute `$IN` and `$OUT`):

   ```bash
   to_embed_svg() {
     local IN="$1"; local OUT="$2"
     local TMP; TMP=$(mktemp --suffix=.png)
     magick "$IN" -resize '256x256>' -strip "$TMP"
     local W H B64
     W=$(magick identify -format '%w' "$TMP")
     H=$(magick identify -format '%h' "$TMP")
     B64=$(base64 -w0 "$TMP")
     printf '<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d"><image href="data:image/png;base64,%s" width="%d" height="%d"/></svg>\n' \
       "$W" "$H" "$W" "$H" "$B64" "$W" "$H" > "$OUT"
     rm "$TMP"
   }
   to_embed_svg "$IN" "$OUT"
   ```

   The intermediate PNG (`$TMP`) is mandatory — you can't pipe `magick` directly into `base64` because magick writes binary; the temp file makes the byte stream addressable and lets you read its dimensions.

4. **Verify.** Run `magick identify "$OUT"` and `ls -la "$OUT"`. Expect dimensions ≤ 256 × 256 and a file size in the 2–60 KB range. If the SVG is over 100 KB, the source had a lot of detail or transparency complexity — consider sourcing a real vector instead (see links above).

5. **Spot-check** the SVG by reading it with the Read tool — confirm the first line is `<svg xmlns=…><image href="data:image/png;base64,…` (not `<?xml version="1.0"…><!DOCTYPE…><path d="M0 1280…">`, which is the potrace failure mode).

6. **Delete the original raster** with `rm "$IN"`. This is the user's stated intent — do not skip. If the user wants the original kept (e.g. as a master), they'll say so explicitly when invoking the skill.

7. **Do not stage or commit.** Tell the user the conversion is on disk; they'll commit it alongside the code change that references the new path.

## Batch usage

For multiple files (the common case when several rasters land in `public/techStack/` at once), wrap the helper in a loop with a parallel array of input → output paths:

```bash
declare -A FILES=(
  [public/techStack/aiMl/langgraph.png]=public/techStack/aiMl/langgraph.svg
  [public/techStack/devOps/terraform.jpg]=public/techStack/devOps/terraform.svg
  # ...
)
for IN in "${!FILES[@]}"; do
  to_embed_svg "$IN" "${FILES[$IN]}"
  rm "$IN"
done
```

After conversion, update `src/components/Skills/TechStack.tsx` (or whichever consumer) with the new `.svg` paths and the appropriate `alt` text + category placement.

## Caveats to surface to the user

- **Not a real vector.** State this every time so the user can decide whether to re-source from devicon/simple-icons/vectorlogo.zone before committing.
- **JPG sources lose alpha.** The baked-in background (usually white) will appear inside the `iconSx` container — looks like a slight two-tone square against the surrounding `#F3F4F6` if those aren't the same shade. If it visually clashes, the source needs to be a transparent PNG, or hand-source a vector.
- **Don't run on existing SVGs.** Refuse if the input already has a `.svg` extension — re-wrapping a vector inside another base64 SVG would inflate it and discard the path data.
- **Don't run on animated sources** (GIF, APNG, animated WebP). The first frame would be embedded silently; if that's what the user wants, they should extract the frame themselves first.

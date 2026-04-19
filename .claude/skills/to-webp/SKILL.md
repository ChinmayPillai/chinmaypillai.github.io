---
name: to-webp
description: Convert a JPG or PNG image into a WebP suitable for use in public/ assets (project cards, intern cards, page thumbnails, tech-stack icons, avatar). Invoke when the user adds a new image source and wants the .webp the components reference. Accepts an input path and writes a sibling .webp; tunes dimensions and quality to match the existing asset conventions.
---

# to-webp

Converts a JPG/PNG into a WebP for use under `public/`. Most images in this repo are referenced as `/project/X.webp`, `/intern/X.webp`, `/pages/X.webp`, `/techStack/X.webp`, or `/DP.webp` — see `src/data/projects.ts`, `src/data/interns.ts`, `src/components/Skills/TechStack.tsx`, and the `<SurfaceCard media>` calls. The generated WebP must drop into one of those slots.

## Asset conventions (sample these before resizing)

Run `magick identify <existing-asset>` to verify which preset to apply.

| Slot                                | Aspect | Max dimension | Quality | Typical size |
|-------------------------------------|--------|---------------|---------|--------------|
| `/project/*.webp` (card thumb)      | 16:9   | 1280×720      | 80      | 20–110 KB    |
| `/intern/*.webp` (card thumb)       | 16:9   | 1200×675      | 78      | 15–40 KB     |
| `/pages/*.webp` (Home tile, hero)   | 16:9   | 1280×720      | 80      | 20–80 KB     |
| `/techStack/*.webp` (logo)          | square | 128×128       | 85      | 2–10 KB      |
| `/DP.webp` (avatar, square crop)    | 1:1    | 754×754       | 78      | 30–50 KB     |

If the user doesn't specify a slot, infer from the destination path. If still ambiguous, ask once.

## Procedure

1. **Resolve paths.** The user will give an input path (jpg/png) and usually a destination. If they only give an input, default the destination to the sibling `.webp` (`foo.jpg` → `foo.webp`). If they only give a destination, ask for the source.

2. **Sanity-check the source.** Run `magick identify "$INPUT"` and report dimensions + size. Refuse if the source is already smaller than the target preset (no upscaling).

3. **Pick a preset** from the table above based on the destination directory. If destination is outside `public/{project,intern,pages,techStack}`, default to the project preset (1280×720, q80).

4. **Convert.** Use `>` after the geometry so smaller sources are not upscaled, `-strip` to drop EXIF, and `-quality` per preset:

   ```bash
   magick "$INPUT" -resize '1280x720>' -quality 80 -strip "$OUTPUT"
   ```

   For square targets (avatar, tech logos), use a `WxH^` + `-gravity center -extent WxH` pipeline only if the source isn't already square — otherwise plain `-resize 'WxW>'` is fine.

5. **Verify** with `magick identify "$OUTPUT"` and `ls -la "$OUTPUT"`. If the output is more than ~2× the typical size for its slot, drop quality by 5 and retry. If it's far below the typical floor and looks blocky on visual inspection, bump quality by 5.

6. **Show the result** by reading the output file with the Read tool so the user can sanity-check the crop and compression.

7. **Do not stage or commit.** Tell the user the file is on disk; they'll commit it alongside whatever code edit references it.

## Notes

- Keep the source file in the repo too if it's not gigantic (>2 MB) — it's the high-quality master if we ever need to re-export. The `.gitattributes` already marks `.jpg` and `.png` as binary.
- If converting an `/intern/*` or `/project/*` source whose aspect isn't 16:9, ask before cropping. Pillarboxing (transparent letterboxes) works for logos but looks bad on photographic card thumbs.
- If you need a non-magick tool (e.g. `cwebp` for tighter compression), check if it's installed first; this machine does not have `cwebp` as of last check, so prefer `magick`.
- For animated sources (GIF, APNG), this skill does not apply — convert to a static frame manually first.

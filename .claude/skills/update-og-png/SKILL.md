---
name: update-og-png
description: Regenerate public/og.png (the Open Graph social-share image for chinmaypillai.com) with new heading/subtitle/url text. Invoke when the user wants to change anything that appears on the OG card — role title (e.g. "SDE" → "Developer"), name, school, URL, or full redesign.
---

# update-og-png

Regenerates `public/og.png` — the Open Graph social-share image referenced from `index.html` and `src/components/Utilities/PageMeta.tsx`.

## Output spec

- **Path**: `public/og.png`
- **Dimensions**: 1202 × 632 (Open Graph 1.91:1 ratio, slightly oversized so it survives Twitter/LinkedIn re-encoding)
- **Format**: PNG, 16-bit/color RGBA, stripped of metadata

## Visual spec (matches the current site theme)

| Layer        | Default text                  | Colour       | Font weight        | Point size |
|--------------|--------------------------------|--------------|--------------------|------------|
| Background   | (solid fill)                   | `#0B0F19`    | —                  | —          |
| Heading      | `Chinmay Pillai`               | `#F1F3F7`    | Bold               | 120        |
| Subtitle     | `SDE · Blitz · IIT Kanpur`     | `#2DD4BF`    | Medium             | 48         |
| URL          | `chinmaypillai.com`            | `#9CA3AF`    | Regular            | 32         |

The colours come from `src/components/Utilities/colors.tsx` — `bg.base`, `text.heading`, `accent`, `text.secondary`. If those tokens change, update this skill too.

## Vertical layout (gravity North, offsets in px)

- Heading at `+0+200`
- Subtitle at `+0+345`
- URL at `+0+440`

## Font

Use `Adwaita-Sans-Bold` / `Adwaita-Sans-Medium` / `Adwaita-Sans` (system font on this machine — closest clean geometric sans to Inter that ImageMagick can render directly without woff2 conversion). Verify it exists with `magick -list font | grep Adwaita-Sans` before running.

## Procedure

1. Read what change the user is asking for. If they only specify the subtitle (e.g. "say SDE instead of Developer"), keep heading and URL unchanged. If they ask for a full redesign, ask once for clarification before regenerating.

2. Run ImageMagick to write the file. Template (substitute `$HEADING`, `$SUBTITLE`, `$URL`):

   ```bash
   magick -size 1202x632 xc:'#0B0F19' \
     -font 'Adwaita-Sans-Bold'   -pointsize 120 -fill '#F1F3F7' \
     -gravity North -annotate +0+200 "$HEADING" \
     -font 'Adwaita-Sans-Medium' -pointsize 48  -fill '#2DD4BF' \
     -gravity North -annotate +0+345 "$SUBTITLE" \
     -font 'Adwaita-Sans'        -pointsize 32  -fill '#9CA3AF' \
     -gravity North -annotate +0+440 "$URL" \
     -strip public/og.png
   ```

3. Verify dimensions and size:

   ```bash
   magick identify public/og.png
   ls -la public/og.png
   ```

4. Read the file with the Read tool to render the result inline so the user can sanity-check the layout.

5. Do not stage or commit. Tell the user the change is on disk and let them include it in a commit when they're ready.

## Edge cases

- If the heading is much longer than "Chinmay Pillai" (~14 chars), drop the pointsize to 96 to avoid bumping the canvas edge.
- If the subtitle uses non-Latin characters, swap `Adwaita-Sans` for `Noto-Sans` for that line.
- The `·` separator is U+00B7 — paste the literal character, do not escape.
- If `Adwaita-Sans` isn't installed (different machine), fall back to `DejaVu-Sans-Bold` / `DejaVu-Sans` and warn the user that letterforms will look slightly different from the live site's Inter typography.

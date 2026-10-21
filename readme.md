# mvno-beer.github.io

MVNO BEER landing page (GitHub Pages). Design brief: `landing-design/`.

## Structure

- `index.html` — landing (PC + mobile, responsive)
- `css/landing.css` — layout, scene states, animation timing (`--t-*`, `--beer-level`)
- `js/landing.js` — scene timeline, bubble generator
- `assets/` — reusable vector parts
  - `bottle.svg` (no cap), `cap.svg`, `opener.svg`, `foam-wave.svg` (tileable, repeat-x)
  - `logo.svg` (vector logo), `logo-512.png`, `apple-touch-icon.png`, `favicon-64.png`

## Scenes

1. Bottle and opener
2. Cap pops, foam bursts, opener flicks back
3. Bottle and opener fly up, beer rises full width
4. Beer settles at 80% height with foam head and rising bubbles; copy appears

`?scene=1..4` freezes a scene for review. `prefers-reduced-motion` jumps to scene 4.

## Local preview

```sh
python3 -m http.server 8000
```

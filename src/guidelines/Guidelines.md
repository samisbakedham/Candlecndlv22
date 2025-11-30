# System Guidelines

## General Guidelines
* **Mobile-First Responsive:** Always design with responsive behavior in mind. Use fluid grids and Flexbox.
* **Component Driven:** Build reusable components for buttons, cards, and typography blocks.
* **Texture Over Glitz:** Prioritize matte finishes, grain, and bold contrast over shiny, glowing effects.
* **Legibility:** Ensure high contrast between the warm backgrounds and the dark text.

--------------

# Design System Guidelines

## 1. Visual Aesthetic: "Analog Future"
The design should feel tactile, established, and warm—like high-tech documentation from the late 1970s or early 1980s.
* **Theme:** Warm Light Mode.
* **Vibe:** Vintage precision, bold geometry, and "sunset" warmth.
* **Texture:** Use subtle film grain overlays (`opacity: 5%`) and halftone patterns to give the interface a printed feel. Avoid gloss/glass effects.

## 2. Color Palette
* **Backgrounds:** Vintage Cream / Off-White (`#FDFBF7`) or Warm Beige (`#F2F0E6`). Avoid sterile bright white.
* **The "Sunset Strip" Gradient (Accents):**
    * Mustard Yellow (`#FFC857`)
    * Burnt Orange (`#E97F25`)
    * Retro Red (`#C83E36`)
    * *Usage:* Use these as distinctive horizontal stripes, underline accents, or background graphics to create momentum and speed.
* **Primary Action Color:** Burnt Orange (`#E97F25`).
* **Text & Contrast:** Deep Espresso Brown (`#2B2220`) or Faded Charcoal (`#333333`). *Do not use pure black.*

## 3. Typography
* **Display Font (H1, H2):** Heavy, Blocky Sans-Serif (e.g., *Eurostile Bold*, *Franklin Gothic Heavy*, or *Druk Wide*). It should feel industrial and sturdy.
    * *Style Note:* Use tight letter-spacing (kerning) for headlines.
* **Body Font:** Clean, utilitarian Sans-Serif (e.g., *Helvetica Now*, *Inter*) or a modern Monospace (e.g., *Space Mono*) to emphasize the "technical manual" aesthetic.
* **Styling:** Use **ALL CAPS** for sub-headers and labels.

## 4. Components

### Buttons
* **Primary Button:**
    * Shape: Slight rounded corners (4px - 6px) or fully rectangular.
    * Fill: Solid Burnt Orange or Red.
    * Shadow: **Hard Shadow** (No blur). `box-shadow: 4px 4px 0px #2B2220`. This gives it a "sticker" or tactile button feel.
    * Text: White or Cream, bold.
* **Secondary Button:**
    * Fill: Transparent.
    * Border: 2px Solid Charcoal (`#333333`).
    * Shadow: None or slight hard shadow on hover.

### Cards & Containers
* **Background:** Solid White (`#FFFFFF`) or pale Yellow-Beige (`#FFFDF5`) to contrast against the main background.
* **Border:** Thick, solid borders. 2px to 3px solid Dark Brown/Charcoal.
* **Corner Radius:** Minimal (0px to 8px).
* **Decoration:** detailed "technical" lines or corner brackets to frame the content.

### Visual Elements
* **Stripes:** Use the tri-color gradient (Yellow/Orange/Red) as angled or horizontal speed lines running behind content or across the top/bottom of the viewport.
* **Iconography:** Simple, bold, flat icons. No 3D or gradients within icons.

## 5. Layout & Spacing
* **Grid:** Rigid, newspaper-style column grid.
* **Separators:** Use thick horizontal rules (lines) to divide sections clearly.
* **Alignment:** Mix of center-aligned hero sections with left-aligned technical details.
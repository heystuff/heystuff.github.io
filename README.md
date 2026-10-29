# What Would You Say? | Kevin's Complete Website

## Start here

1. Unzip the package into one folder. Do **not** move HTML files into separate folders.
2. Open `index.html` in Chrome/Edge, or use VS Code Live Server.
3. Navigate through **Home**, **Research**, **Interactive**, and **Take action**.
4. The scenario game works entirely in the browser. It does not save or send responses.

## Files

- `index.html` | homepage
- `research.html` | educational research overview with numbered citations and linked NIMH/CDC sources
- `interactive.html` | scenario activity
- `action.html` | advocacy and service-learning page
- `style.css` | **all shared styles and color palette**
- `scenarios.js` | the three scenarios and interaction logic
- `favicon.svg` | shared speech-bubble favicon for every page

## Edit colors

Open `style.css`. All color hex values and `rgba()` definitions are in the `:root` block at the top. Theme variables use `--blue-*` names. No inline CSS or page-specific color literals are needed.

## Add a scenario

Open `scenarios.js` and locate `const scenarios = [`. Copy a full `{ intro, friendMessage, choices: [...] }` entry, place it before the ending `];`, and **put a comma after the previous scenario object**. The controls and counter update automatically. Each choice should have `text`, `heading`, `explanation` and a `tone` of `positive` or `reflect`.

## Before Kevin submits

- Read and rewrite the research in his own words; check every claim against the linked sources in the Research page. Add concepts from class readings/videos.
- Adjust scenarios and explanations to reflect his own understanding, not just the sample wording.
- Make sure someone outside his classroom can access the site and activity.
- Ask permission to distribute through school channels, then document the actual audience and feedback without gathering sensitive health information.
- Write his reflection and post the project in Canvas with suitable viewing permissions by November 2.

## Deploy / Google Sites

This folder is a **multi-page static site**. Test it as a whole before publishing. A static host such as GitHub Pages can publish all pages and assets together; link it from Google Sites. Simply pasting `index.html` into Google Sites will not automatically upload `style.css`, `scenarios.js`, or the other pages.

The Research page includes numbered citations and a Sources section linking to NIMH's Anxiety Disorders page and the CDC's Mental Health Stigma and How to Listen and Support Someone in Need pages. The source list includes page dates and an access date; the scenario and response examples are identified as original project examples. Include these sources in Kevin's research notes / Canvas bibliography as required by the assignment.

## Cosmetic cleanup

Unusual decorative characters in the header, buttons, and chat illustration were replaced with small CSS/SVG icons. The design, color palette, content, page structure, and JavaScript scenario workflow are otherwise unchanged.

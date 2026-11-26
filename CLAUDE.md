# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Claude Thực Chiến": a Vietnamese, static, no-build training website for a ~4-hour live class teaching Claude Chat and Claude Code to team leads at a non-life insurance distribution company. The trainer ("Trainer Trịnh Đức") presents it live; there is no backend. All user-facing text is Vietnamese.

## Running and testing

- Open `index.html` directly (file://). Plain `<script>` tags only: no ES modules, no fetch for content, no bundler, no package.json. Keep it that way so double-click works.
- There is no test suite. Verify by serving the folder (`python -m http.server 8765`, config in `.claude/launch.json`) or with headless Edge screenshots, and by running scripts in the browser. Useful URL flags: `?trinh-chieu` opens presentation mode, `?toi` forces dark mode.
- Browsers cache the JS/CSS aggressively; hard-reload (Ctrl+F5) or add a query string when checking edits.

## Architecture

- `index.html` loads, in order: `assets/js/course-data.js` → `render.js` → every `bai-hoc/*.js` → `app.js` (must stay last). Adding a lesson means adding its entry to `Course.lessons` in `course-data.js` AND a `<script>` tag in `index.html`.
- `Course` (global, defined in `course-data.js`) holds brand (trainer name, logo paths), parts, the lesson list (`id`, `num`, `part`, `title`, `summary`), the shared command registry `Course.commands`, and `Course.content`. Each lesson file calls `Course.register({ id, blocks: [...] })`.
- `render.js` turns a block (`layout`, `eyebrow`, `title`, `text`, `after`, `note`, `sources`, …) into HTML via the layout table `Course.layouts` (`statement`, `list`, `compare`, `cards`, `steps`, `prompt`, `prompts`, `commands`, `table`, `output`, `outputs`, `tips`, `split`, `logos`, `download`, `checklist`, `visual`). New layouts can be added to `Course.layouts` (K4 does this for `allcommands`/`allprompts`). Inline syntax in strings: `==highlight==`, `**bold**`, `` `code` ``, `[text](url)`, `[[L07]]` / `[[L07|text]]` (lesson link; renders as "Bài 07", so never write "Bài [[L07]]").
- `render.js` also provides the SVG helper `Course.V` and `Course.addVisual(id, fn)`. Each lesson's animated diagram is an SVG whose groups carry `data-s="N"` (shown from step N on); the `captions` array of the `visual` block must have exactly as many entries as the highest step.
- `app.js` is a hash router (`#/L07`, `#/K4`), home/lesson renderers, TOC, theme toggle, progress (localStorage, always try/catch), and **presentation mode**: every block becomes a slide, `fitSlide()` shrinks text to fit the viewport (reference slides like K4 scroll instead), arrow keys step through visual steps before slides. Slides that are leaving get `.leaving`; always select the live slide with `.slide:not(.leaving)`.
- `K4` (command/prompt reference) is generated from `Course.commands` and from every `prompt`/`prompts`/`tips.ask` block in all lessons, so lesson edits show up there automatically.
- Styling is a single `assets/css/course.css` with CSS variables, light/dark via `prefers-color-scheme` plus `data-theme`. Navy blocks (`.viz`, `.ccard`, `.cover`, `.output`) stay dark in both themes. Logos: `assets/img/logo-cong-ty.png` (black text, for light backgrounds) and `logo-cong-ty-trang.png` (white text, for dark); markup swaps them by theme.

## Content rules that are easy to break

- Lesson structure and ideas follow an earlier reference course, but the text is original and the reference is deliberately NOT named anywhere on the site (no timestamps/"mốc giờ", no per-lesson minutes, no agenda page: these were removed on request). Do not reintroduce them.
- Product facts (prices, model names, commands, UI labels, privacy settings) were checked against Anthropic's official docs on 2026-11-25. When changing them, re-verify from official sources (claude.com/pricing, anthropic.com/news, support.claude.com, code.claude.com/docs, platform.claude.com/docs) and keep each lesson's `sources` list accurate. If a fact can't be verified, leave it out. Example already corrected: file creation is on by default for individual plans (no toggle instructions).
- Practice data in `thuc-hanh/hoc-claude-code/` is fake and insurance-themed; the made-up company is "Bảo Nhanh". Lesson numbers in Bài 01, 08 and 16 come from the Excel files and must match `thuc-hanh/DAP-AN-CHO-TRAINER.md` (trainer-only, not in the learner zip). If the Excel files are regenerated, update both the answer key and those lessons. The learner folder intentionally has no CLAUDE.md (learners create theirs in Bài 10).
- After editing, re-zip `thuc-hanh/hoc-claude-code.zip` and `thuc-hanh/phong-van-website.zip` (the latter is just `.claude/skills/phong-van-website/`).

## UI checks that have caught real bugs

- SVG visuals: labels overflow their boxes or overlap icons when text is lengthened. After editing any visual's text, render every `Course.visuals` entry and test text bounding boxes against boxes, circles, icons and the viewBox.
- Presentation mode: test every slide of every lesson at 1920×1080 and 1366×768 for overflow, and test rapid forward/back navigation (stale slides once piled up).
- Mobile: check no horizontal overflow at 375px width.

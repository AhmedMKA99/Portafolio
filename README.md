# Portfolio, Muhammad Ahmed Khalid

A personal portfolio website styled like a Security Operations Centre (SOC) dashboard. Built from scratch in plain HTML, CSS, and JavaScript, with no frameworks, no build step, and no tracking.

**Live site:** [ahmedmka99.github.io/Portafolio](https://ahmedmka99.github.io/Portafolio/)

---

## About

This is my personal portfolio. I am a First Class Honours cybersecurity graduate from Edinburgh Napier University, currently applying for junior SOC analyst and detection engineering roles across Scotland.

Rather than a conventional scrolling landing page, this site is designed to look and feel like a real Security Operations Centre dashboard. My projects are presented as "case files", my skills are presented as "detection rules", and the layout borrows the visual language of tools like Wazuh and Splunk. A first-time visitor gets a welcome banner and a 30 second guided tour so the metaphor is clear from the start.

---

## What is on the site

| Section | Purpose |
|---|---|
| **Overview** | Who I am, key facts, and a live signal feed |
| **Case Files** | My projects, each with technologies, findings, and a link to the source code |
| **Detection Rules** | My technical skills, grouped by discipline with confidence ratings |
| **Activity Log** | Education and work history timeline |
| **Secure Uplink** | Contact links (GitHub, LinkedIn) |

---

## Design decisions

- **SPA-style with plain vanilla JS.** Section swaps are instant and deep-linkable via URL hash.
- **Real dark and light themes.** Not just an inversion, both are designed intentionally. Toggle from the sidebar.
- **Accessible to a non-technical reader.** Every KPI, tag, and jargon term has a plain-English tooltip. A welcome banner and optional guided tour explain the SOC metaphor to first-time visitors.
- **No frameworks, no build step, no tracking.** Zero dependencies, zero telemetry. Loads in under half a second.
- **Genuine "alive" feel.** Live scrolling alert ticker, staggered signal stream, working clock, spinning avatar ring. Achieved with pure CSS animations, not JavaScript polling.

---

## File structure

```
Portafolio/
├── index.html          Semantic HTML with all sections
├── style.css           All styling, both themes, animations
├── script.js           SPA nav, tour, ticker, signal feed, theme toggle
└── README.md           This file
```

Three files, one folder. That is intentional.

---

## Running locally

Because there is no build step, you can open it directly:

```bash
git clone https://github.com/AhmedMKA99/Portafolio.git
cd Portafolio
```

Then either open `index.html` in your browser, or start a small local server for cleaner behaviour with the hash router:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Tech stack

- HTML5, semantic markup
- CSS3, custom properties (CSS variables) for theming, grid and flex layout
- Vanilla JavaScript (ES6+), no dependencies

Fonts loaded from Google Fonts: **Inter** for UI, **JetBrains Mono** for the monospaced console feel.

---

## Deployment

Deployed via GitHub Pages from the `main` branch. Any push to `main` updates the live site within a minute.

---

## Attribution

Design and code by Muhammad Ahmed Khalid.

The SOC dashboard concept, layout, colour palette, and content are original work. Fonts are from Google Fonts (open source).

---

## Contact

- **GitHub:** [github.com/AhmedMKA99](https://github.com/AhmedMKA99)
- **LinkedIn:** [linkedin.com/in/ahmed-khalid-404721395](https://www.linkedin.com/in/ahmed-khalid-404721395/)

# ✦ AuroraLearn — Developer Dashboard

<div align="center">

![AuroraLearn](https://img.shields.io/badge/AuroraLearn-Developer%20Dashboard-2563eb?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyTDIgN2wxMCA1IDEwLTV6bTAgN0wyIDlsIDEwIDUgMTAtNXpNMiAxNmwxMCA1IDEwLTV6Ii8+PC9zdmc+)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Grid%20%7C%20Flexbox-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-10b981?style=for-the-badge)

<br/>

**A fully responsive, vanilla-JS Developer Learning Dashboard**  
*Built with pure HTML5 · CSS3 · JavaScript — No Frameworks. No Libraries.*

<br/>

> *"Your code determines who has access to information and how the world experiences it."*  
> — DecodeLabs, Project 1

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Preview](#-live-preview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [File Breakdown](#-file-breakdown)
  - [index.html](#indexhtml--structure)
  - [style.css](#stylecss--design-system)
  - [app.js](#appjs--application-logic)
- [Design System](#-design-system)
- [JavaScript Architecture](#-javascript-architecture)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Course Data Schema](#-course-data-schema)
- [Accessibility](#-accessibility)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Submission Checklist](#-submission-checklist)

---

## 🌐 Overview

**AuroraLearn** is a responsive **Developer Learning Dashboard** built entirely from scratch using plain HTML5, CSS3, and Vanilla JavaScript (ES6+). It simulates a real-world e-learning platform interface where learners can track their enrolled courses, monitor progress, filter by category and difficulty, search across their library, and dive into detailed course modals.

This project was built as **Project 1** of the DecodeLabs Full Stack Development Internship — Batch 2026. The goal was to master the fundamentals of frontend development: responsive layout, semantic markup, CSS layout systems, and JavaScript-driven interactivity — all without relying on any framework or UI library.

---

## 👁️ Live Preview

```
Open index.html in any modern browser — no build step or server required.
```

| Screen Size | Layout |
|---|---|
| Mobile (< 600px) | Single column, sidebar hidden, compact nav |
| Tablet (600–860px) | Two-column course grid, sidebar hidden |
| Desktop (> 860px) | Full sidebar + three-column course grid |

---

## ✨ Features

### Dashboard & Navigation
- **Sticky Navbar** — stays fixed at the top while scrolling; includes logo with a CSS spin animation, live search bar, nav links, notification bell, and user avatar
- **Search with Live Dropdown** — as you type, matching courses appear in a floating dropdown with highlighted query terms; click any result to open its detail modal directly
- **Notification Bell** — displays an unread badge count with a toast notification on click
- **Active Nav Link Highlighting** — clicking any nav link toggles the active state and shows a toast confirmation

### Sidebar Filters
- **Main Filters** — All Courses, In Progress, Completed, and Daily Goal; clicking a filter immediately re-renders the course grid
- **Category Filter** — collapsible list of Frontend, Backend, Data Science, and DevOps; supports toggle (click active to deselect)
- **Difficulty Pills** — Beginner, Intermediate, Advanced toggle pills; also supports deselect on re-click
- **Collapsible Sections** — both Categories and Difficulty sections collapse/expand with smooth CSS `max-height` animation and arrow rotation
- **Upgrade Card** — a premium upgrade prompt at the bottom of the sidebar

### Hero Banner
- **Dynamic Welcome Section** — personalized greeting with daily achievement badge
- **Stats Grid** — four metric cards: Hours Learned, Certificates, Current Streak, and Skill Score; each with a contextual icon and change indicator
- **Continue Learning Button** — opens the primary in-progress course modal directly
- **Browse New Courses Button** — ghost-style secondary CTA

### Course Cards
- **6 Enrolled Courses** — each rendered dynamically from a JavaScript data array; covers Frontend, Backend, Data Science, Design, Security, and DevOps
- **Gradient Thumbnails** — unique per-course gradient backgrounds with emoji icons, no external images required
- **Progress Bars** — animated fill bar; blue-to-purple gradient for in-progress, green gradient for completed
- **Completed Badge** — absolute-positioned pill overlay on finished course thumbnails
- **Resume / View Certificate Buttons** — contextual CTA per card (resume for in-progress, certificate download for completed)
- **Keyboard Accessible** — cards accept `Enter` and `Space` key presses to open the modal

### Sorting & Filtering (Combined)
- **Sort Dropdown** — sort courses by Recent (default), Progress (descending), or Name (A–Z)
- All active filters, category, difficulty, sort, and search are combined in a single reactive state object and applied together on every render

### Course Detail Modal
- **Animated Modal** — slides up with a scale animation; backdrop blur on overlay
- Shows full course metadata: category, title, progress bar, lessons count, remaining lessons, total duration, instructor name, and difficulty level
- **Contextual Action Button** — "Continue Learning" for in-progress or "View Certificate" for completed
- **Multiple Close Methods** — close button (✕), clicking the backdrop, or pressing `Escape`
- **Body Scroll Lock** — prevents background scroll while modal is open

### Toast Notifications
- **Global Toast System** — slides up from the bottom center of the screen; auto-dismisses after 3 seconds
- Used across resume, certificate download, nav link clicks, notification bell, modal actions, and upgrade button

### Footer
- Copyright text with a styled sub-label
- Links to Privacy Policy, Terms of Service, and Support Hub

---

## 🛠️ Tech Stack

| Layer | Technology | Role |
|---|---|---|
| **Structure** | HTML5 (Semantic) | Page landmarks, accessible markup |
| **Styling** | CSS3 (Grid + Flexbox) | Layout system, responsive design, animations |
| **Typography** | Google Fonts — Inter + Space Grotesk | Body and display font families |
| **Logic** | Vanilla JavaScript (ES6+, Strict Mode) | State management, DOM manipulation, event handling |
| **Build Tool** | None | Open directly in browser |

**No frameworks. No npm. No build pipeline.**

---

## 📁 Project Structure

```
auroralearn-dashboard/
│
├── index.html          ← Semantic HTML5 structure & layout
├── style.css           ← Complete CSS design system & responsive styles
├── app.js              ← All JavaScript logic (data, state, render, events)
│
└── README.md           ← This file
```

---

## 📄 File Breakdown

### `index.html` — Structure

The HTML file is organized using **semantic HTML5 landmark elements** throughout:

```
<header class="navbar">          ← Sticky top navigation bar
  ├── .nav-logo                  ← Brand mark (icon + name)
  ├── .nav-search                ← Search input + live dropdown
  ├── <nav class="nav-links">    ← Main navigation links
  └── .nav-user                  ← Notification bell + user info + avatar

<div class="layout">             ← CSS Grid: [220px sidebar] [1fr main]
  │
  ├── <aside class="sidebar">    ← Left panel
  │     ├── .filter-list         ← Main status filters (All / In Progress / Completed / Daily)
  │     ├── #categoriesMenu      ← Collapsible categories list
  │     ├── #diffMenu            ← Collapsible difficulty pills
  │     └── .upgrade-card        ← Premium upgrade prompt
  │
  └── <main class="main-content">   ← Right content area
        ├── .hero-banner             ← Welcome section + stats grid
        └── .courses-section         ← Course cards injected by JS

<footer class="footer">          ← Site footer with links

<div class="modal-overlay">      ← Fixed-position course detail modal
<div class="toast">              ← Fixed toast notification
<script src="app.js">            ← JavaScript loaded at end of body
```

**Key HTML decisions:**
- `<header>`, `<aside>`, `<main>`, `<footer>`, `<article>`, `<section>`, and `<nav>` are all used correctly for their semantic meaning
- Course cards are rendered as `<article>` elements with `role="button"` and `tabindex="0"` for keyboard accessibility
- The search input has a proper `aria-label` on the notification button
- The modal uses `id` references for JavaScript targeting without polluting the markup

---

### `style.css` — Design System

All visual design is driven by **CSS Custom Properties** defined in `:root`:

```css
/* Color Tokens */
--clr-bg:         #f0f4fa;    /* Page background */
--clr-surface:    #ffffff;    /* Card / navbar / sidebar surfaces */
--clr-primary:    #2563eb;    /* Brand blue — buttons, links, active states */
--clr-primary-h:  #1d4ed8;    /* Primary hover state */
--clr-accent:     #f59e0b;    /* Amber accent */
--clr-success:    #10b981;    /* Completed / positive states */
--clr-danger:     #ef4444;    /* Notification badge */
--clr-text:       #0f1724;    /* Primary text */
--clr-muted:      #64748b;    /* Secondary / label text */
--clr-light:      #94a3b8;    /* Tertiary / placeholder text */

/* Radius Scale */
--radius-sm: 6px;   /* Buttons, filter items */
--radius-md: 12px;  /* Cards, dropdowns */
--radius-lg: 20px;  /* Modal */

/* Shadow Scale */
--shadow-sm:  0 1px 4px rgba(37,99,235,.08);
--shadow-md:  0 4px 20px rgba(37,99,235,.12);
--shadow-lg:  0 8px 40px rgba(37,99,235,.18);

/* Typography */
--font-display: 'Space Grotesk', sans-serif;   /* Headings, card titles */
--font-body:    'Inter', sans-serif;            /* All body text */

/* Transition */
--transition: .22s cubic-bezier(.4,0,.2,1);    /* Consistent easing */
```

**CSS Layout Architecture:**

| Layout Concern | CSS Technique Used |
|---|---|
| Overall page (sidebar + content) | `CSS Grid` — `grid-template-columns: 220px 1fr` |
| Navbar items | `Flexbox` — `align-items: center; gap: 20px` |
| Stats grid | `CSS Grid` — `repeat(2, 130px)` → expands responsively |
| Course card grid | `CSS Grid` — `repeat(3, 1fr)` → 2 cols → 1 col |
| Card internals | `Flexbox` — `flex-direction: column` |
| Modal stats row | `Flexbox` — `gap: 16px` |

**Notable CSS techniques:**
- `position: sticky` on the navbar so it remains visible on scroll
- `backdrop-filter: blur(4px)` on the modal overlay for a frosted glass effect
- `@keyframes spin` on the logo icon for a continuous 8-second rotation
- `@keyframes modalIn` for the slide-up + scale entrance on modal open
- `clamp()` can be added to font sizes for fluid typography (scaffolded in the responsive section)
- `@media (prefers-reduced-motion: reduce)` disables all animations for accessibility
- Progress bar fill uses a `transition: width .6s ease` for a smooth fill animation on render

---

### `app.js` — Application Logic

The JavaScript is written in **Strict Mode ES6+** with zero dependencies. It follows a clear unidirectional data flow pattern:

```
User Interaction → Update State → Re-render UI
```

#### Course Data (`COURSES` array)

All six courses are stored as a plain JavaScript array of objects:

```js
{
  id:           1,
  title:        'Advanced React Design',
  category:     'frontend',
  categoryLabel:'FRONTEND',
  progress:     48,             // 0–100
  emoji:        '⚛️',
  thumbGrad:    'linear-gradient(135deg,#1e1b4b,#312e81)',
  difficulty:   'advanced',     // beginner | intermediate | advanced
  lessons:      42,
  duration:     '18h 30m',
  instructor:   'Sarah Chen',
  completed:    false,
}
```

Six courses are defined covering: Frontend, Backend, Data Science, Design, Security, and DevOps.

#### State Object

A single `state` object drives all rendering decisions:

```js
let state = {
  filter:     'inprogress',   // all | inprogress | completed | daily
  category:   null,           // frontend | backend | data-science | devops | …
  difficulty: null,           // beginner | intermediate | advanced
  sort:       'recent',       // recent | progress | name
  search:     '',
};
```

Whenever any interaction changes state, `renderCourses()` is called to re-render the grid.

#### Core Functions

| Function | Purpose |
|---|---|
| `getFiltered()` | Applies all active filters (status, category, difficulty, search) and sort to `COURSES`, returns filtered array |
| `renderCard(course)` | Returns the HTML string for a single course card, with conditional completed badge and action button |
| `renderCourses()` | Calls `getFiltered()`, maps to `renderCard()`, injects into DOM, attaches click listeners |
| `openModal(id)` | Finds course by id, builds modal HTML with progress, stats, instructor, and action button, opens overlay |
| `closeModal()` | Removes `open` class from overlay, restores body scroll |
| `showToast(msg)` | Sets toast text, adds `show` class, auto-removes after 3 seconds via `setTimeout` |
| `updateSearchDropdown()` | Filters courses by query, highlights matched characters, renders dropdown results |

#### Event Listeners

| Event Source | Action |
|---|---|
| `.filter-item` click | Updates `state.filter`, clears category/difficulty, re-renders |
| `.cat-item` click | Toggles `state.category`, resets main filter to "all", re-renders |
| `.pill` click | Toggles `state.difficulty`, re-renders |
| `.section-toggle` click | Toggles `.closed` on target collapsible and `.collapsed` on toggle arrow |
| `#sortSelect` change | Updates `state.sort`, re-renders |
| `#searchInput` input | Updates `state.search`, updates dropdown, re-renders cards |
| `#searchInput` focus | Shows dropdown if query exists |
| `document` click | Closes search dropdown when clicking outside `.nav-search` |
| `.course-card` click | Opens modal (if not clicking inner button) |
| `.course-card` keydown | Opens modal on `Enter` or `Space` |
| `.btn-resume` click | Shows toast with course title |
| `.btn-cert` click | Shows toast confirming certificate download |
| `#modalClose` click | Closes modal |
| `modalOverlay` click | Closes modal if clicking the backdrop directly |
| `document` keydown | Closes modal on `Escape` key |
| `#continueBtn` click | Opens modal for Course ID 1 (React Masterclass) |
| `#notifBtn` click | Shows notification count toast |
| `.upgrade-btn` click | Shows upgrade coming-soon toast |
| `.nav-link` click | Toggles active link, shows navigation toast |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--clr-primary` | `#2563eb` | Buttons, active states, links, logo |
| `--clr-primary-h` | `#1d4ed8` | Primary hover |
| `--clr-success` | `#10b981` | Completed progress bars |
| `--clr-accent` | `#f59e0b` | Accent highlights |
| `--clr-danger` | `#ef4444` | Notification badge |
| `--clr-bg` | `#f0f4fa` | Page background |
| `--clr-surface` | `#ffffff` | Cards, navbar, sidebar |
| `--clr-border` | `#e4eaf4` | All borders and dividers |
| `--clr-text` | `#0f1724` | Primary text |
| `--clr-muted` | `#64748b` | Labels, secondary text |

### Category Color Coding

| Category | Color |
|---|---|
| Frontend | `#7c3aed` (violet) |
| Backend | `#0369a1` (dark blue) |
| Data Science | `#0891b2` (cyan) |
| Design | `#db2777` (pink) |
| Security | `#dc2626` (red) |
| DevOps | `#d97706` (amber) |

### Typography

| Role | Font | Weight |
|---|---|---|
| Headings / Card titles | Space Grotesk | 500, 700 |
| Body / UI labels | Inter | 400, 500, 600, 700, 800 |

---

## 🧠 JavaScript Architecture

```
app.js
│
├── COURSES[]           ← Static data source (6 course objects)
├── CAT_CLASS{}         ← Category → CSS class mapping
│
├── state{}             ← Single source of truth for UI state
│
├── DOM References      ← Cached element references (getElementById)
│
├── Render Functions
│   ├── getFiltered()   ← Pure function: filters + sorts COURSES
│   ├── renderCard()    ← Pure function: course → HTML string
│   └── renderCourses() ← Orchestrator: clears grid, renders all cards
│
├── Modal Functions
│   ├── openModal(id)   ← Builds & shows course detail modal
│   └── closeModal()    ← Hides modal, restores scroll
│
├── Toast
│   └── showToast(msg)  ← Global notification system
│
├── Search
│   └── updateSearchDropdown() ← Live search with highlight
│
└── Event Listeners     ← All interaction handlers at bottom
    └── renderCourses() ← Called as initial render on page load
```

The render cycle is simple and predictable:  
**Any user action → mutate `state` → call `renderCourses()` → DOM updates.**

---

## 📱 Responsive Breakpoints

| Breakpoint | Trigger | Changes |
|---|---|---|
| `≤ 1100px` | Tablet landscape | Course grid → 2 columns; Stats grid → 2×2 |
| `≤ 860px` | Tablet portrait | Layout → single column; Sidebar hidden; Stats grid → 4 columns |
| `≤ 600px` | Mobile | Navbar compact; Nav links hidden; Course grid → 1 column; Stats → 2×2; Hero title smaller |
| `prefers-reduced-motion` | Accessibility | All animations and transitions disabled |

The layout is built **mobile-first conceptually** — the grid collapses gracefully at each breakpoint using `@media (max-width: N)` overrides on the base desktop styles.

---

## 📦 Course Data Schema

```js
/**
 * @typedef {Object} Course
 * @property {number}  id            - Unique identifier
 * @property {string}  title         - Display name of the course
 * @property {string}  category      - Machine key: 'frontend' | 'backend' | 'data-science' | 'design' | 'security' | 'devops'
 * @property {string}  categoryLabel - Display label: 'FRONTEND' | 'BACKEND' | etc.
 * @property {number}  progress      - Completion percentage (0–100)
 * @property {string}  emoji         - Thumbnail emoji icon
 * @property {string}  thumbGrad     - CSS gradient string for card thumbnail background
 * @property {string}  difficulty    - 'beginner' | 'intermediate' | 'advanced'
 * @property {number}  lessons       - Total lesson count
 * @property {string}  duration      - Human-readable total duration
 * @property {string}  instructor    - Instructor full name
 * @property {boolean} completed     - Explicit completion flag (progress === 100 also treated as complete)
 */
```

---

## ♿ Accessibility

| Feature | Implementation |
|---|---|
| Semantic HTML landmarks | `<header>`, `<nav>`, `<aside>`, `<main>`, `<footer>`, `<article>` |
| Keyboard navigation | Course cards have `tabindex="0"`, open modal on `Enter`/`Space` |
| Notification button label | `aria-label="Notifications"` |
| Card ARIA role | `role="button"` with `aria-label` set to course title |
| Focus outlines | Browser defaults preserved (not removed) |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables all animations |
| Color contrast | Primary blue `#2563eb` on white surface exceeds WCAG AA ratio |
| Modal scroll lock | `body overflow: hidden` prevents disorienting background scroll |
| Escape key | Closes modal for keyboard users |

---

## ⚡ Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor — VS Code recommended
- VS Code **Live Server** extension (optional but recommended)

### Setup

```bash
# 1. Clone or download the repository
git clone https://github.com/YOUR_USERNAME/auroralearn-dashboard.git

# 2. Open the project folder
cd auroralearn-dashboard

# 3. Open in VS Code
code .
```

### Run the Project

**Option A — Live Server (Recommended)**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Dashboard opens at `http://127.0.0.1:5500`

**Option B — Direct Browser Open**
1. Locate `index.html` in your file explorer
2. Double-click to open directly in your browser

> **Note:** The `<script src="app.js">` tag in `index.html` references `app.js` — make sure your script file is saved as `app.js` (not `script.js`) in the same directory, or update the `src` attribute to match your filename.

---

## 🔄 How It Works

### Filter + Search Flow

```
User clicks sidebar filter
        │
        ▼
state.filter = 'inprogress'
state.category = null        ← Resets cross-filters
state.difficulty = null
        │
        ▼
renderCourses()
        │
        ▼
getFiltered()                ← Applies ALL active state values
        │
        ├─ Filter by status (inprogress / completed / daily / all)
        ├─ Filter by category (if set)
        ├─ Filter by difficulty (if set)
        ├─ Filter by search query (if set)
        └─ Sort by selected sort option
        │
        ▼
list.map(renderCard)         ← Generates HTML strings
        │
        ▼
coursesGrid.innerHTML = ...  ← Single DOM write, no reflow thrashing
        │
        ▼
Attach event listeners       ← Resume, cert, and card click handlers
```

### Modal Flow

```
User clicks course card (not inner button)
        │
        ▼
openModal(id)
        │
        ├─ Find course in COURSES by id
        ├─ Calculate lessonsLeft = lessons × (1 - progress/100)
        ├─ Inject HTML into #modalContent
        ├─ modalOverlay.classList.add('open')
        └─ document.body.style.overflow = 'hidden'
```

---

## ✅ Submission Checklist

```
HTML & Semantics
 [✓] Semantic HTML5 landmarks used: header, nav, aside, main, footer, article, section
 [✓] Valid HTML structure
 [✓] Notification button has aria-label
 [✓] Course cards have role="button" and aria-label
 [✓] Script loaded at bottom of body

CSS & Responsive Design
 [✓] CSS Custom Properties (design tokens) defined in :root
 [✓] CSS Grid used for page layout (sidebar + main)
 [✓] CSS Grid used for course card grid (3 → 2 → 1 column)
 [✓] Flexbox used for navbar, card internals, modal stats
 [✓] Responsive at ≤1100px, ≤860px, ≤600px
 [✓] @media (prefers-reduced-motion) implemented
 [✓] CSS animations: spin, modalIn, progress bar fill, toast slide
 [✓] No CSS frameworks (Bootstrap / Tailwind etc.)

JavaScript
 [✓] Strict mode enabled
 [✓] Single state object drives all rendering
 [✓] Pure render functions (no direct DOM mutation outside renderCourses)
 [✓] Live search with highlighted results
 [✓] Combined filter + sort + search + category + difficulty pipeline
 [✓] Modal with scroll lock and multiple close methods
 [✓] Toast notification system with auto-dismiss
 [✓] Collapsible sidebar sections
 [✓] Keyboard navigation (Enter / Space on cards, Escape for modal)
 [✓] No JS frameworks (React / Vue etc.)

Accessibility
 [✓] Semantic landmark elements
 [✓] Keyboard accessible course cards
 [✓] Escape key closes modal
 [✓] Reduced motion media query
 [✓] Body scroll locked during modal

Performance
 [✓] No external dependencies (aside from Google Fonts)
 [✓] Single DOM write per render cycle (innerHTML batch)
 [✓] DOM references cached at top level
 [✓] CSS transitions only on transform and opacity (GPU-composited)

Repository
 [✓] README.md present and fully documented
 [✓] Clean file structure (index.html / style.css / app.js)
```

---

## 👤 Author

**Abdul Wahab**  
Full Stack Development Intern — DecodeLabs Batch 2026

---

<div align="center">

**DecodeLabs | Project 1 — Go Build.**

![Made with HTML CSS JS](https://img.shields.io/badge/Made%20with-HTML%20%7C%20CSS%20%7C%20JS-2563eb?style=flat-square)
![No Frameworks](https://img.shields.io/badge/No%20Frameworks-Pure%20Vanilla-10b981?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-f59e0b?style=flat-square)

*© 2026 AuroraLearn. Empowering developers worldwide.*

</div>

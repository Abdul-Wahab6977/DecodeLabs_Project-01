# ✦ AuroraLearn – Developer Dashboard

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Stack-Vanilla%20JS%20%7C%20HTML5%20%7C%20CSS3-orange?style=for-the-badge" alt="Stack">
  <img src="https://img.shields.io/badge/Design-Aurora%20Blue-informational?style=for-the-badge" alt="Design">
</p>

---

### 📝 Project Overview
**AuroraLearn** ek premium, highly-responsive aur clean Single Page Application (SPA) developer dashboard hai. Isko software engineers, architects aur tech learners ke liye design kiya gaya hai taake woh apne courses, active modules, learning paths aur skill points ko ek hi jagah track kar sakein. 

Yeh project pure **Vanilla Web Technologies (HTML5, CSS3, ES6+ JavaScript)** par bana hai, jismein bina kisi external heavy framework ke ek native, smooth aur lightning-fast UI experience milta hai.

---

## 🚀 Key Features & Highlights

* **Dynamic Course Card Engine:** JavaScript Array Object Matrix ke zariye saare courses code se dynamically screen par render hote hain.
* **Multi-Tier Advanced Filtering:** * *Status Filters:* All Courses, In Progress, Completed, aur Daily Goal tracking.
    * *Domain Categories:* Frontend, Backend, Data Science, aur DevOps filtering support.
    * *Difficulty Pills:* Quick toggles jo Beginner, Intermediate, aur Advanced courses ko instantly isolate karte hain.
* **Real-Time Dropdown Search:** Input box mein type karte hi titles, instructors aur tags instantaneous filter hokar niche ek clean dropdown overlay list show karte hain.
* **Interactive Context Modals:** Kisi bhi card par click karne se ek beautiful layout modal khulta hai jismein micro-statistics (lessons, total hours, left-over duration) blur-background backdrop ke sath seamless accessible hoti hai.
* **Custom Toast Notifications:** Actions execute hote hi screen ke custom margins par dynamic micro-dialogue notifications render hoti hain jo automatic timer intervals ke baad fade-out ho jati hain.

---

## 🛠️ Tech Stack & Implementation Details

### 🏢 1. Semantic Architecture (`index.html`)
Document structure ko SEO-friendly aur highly readable rakhne ke liye Semantic HTML5 elements use kiye gaye hain:
* `<header class="navbar">`: Global controls, Pro Learner status tags, global lookup input, aur notification flags ko manage karta hai.
* `<aside class="sidebar">`: Saare dynamic structural sorting matrices aur sidebar premium promotional cards ko stack karta hai.
* `<main class="main-content">`: Main tracking section jo user status profile banner (`.hero-banner`) aur grid configuration controls (`#coursesGrid`) mein split hai.

### 🎨 2. Visual Design Language (`style.css`)
* **CSS Custom Properties (`:root`):** Global colors, exact border-radius steps (`6px`, `12px`, `20px`), transitions, aur typography systems (`Inter` & `Space Grotesk`) variable-driven hain.
* **Advanced Layout Modules:** Responsive structures ke liye standard CSS Grid Rules aur aligning behaviors ke liye Flexbox settings utilize ki gayi hain.
* **State-Driven Keyframes:** Logo icons par continuous rotation effects (`@keyframes spin`), crisp glassmorphism designs (`backdrop-filter: blur`), aur hover states par dynamic hardware-accelerated positioning scale applied hai.

### ⚙️ 3. State Management Engine (`script.js`)
Application ka functional state ek explicit centralized object pattern se continuously manage hota hai:

```javascript
let state = {
  filter: 'all',        // inprogress, completed, daily
  category: null,       // frontend, backend, datascience, devops
  difficulty: null,     // beginner, intermediate, advanced
  sort: 'recent',       // progress, name
  search: ''            // live input tracking
};

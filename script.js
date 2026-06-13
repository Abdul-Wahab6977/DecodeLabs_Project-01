/* ============================================================
   AuroraLearn – app.js   |   Vanilla JavaScript (ES6+)
   ============================================================ */

'use strict';

/* ============================================================
   DATA — All 6 enrolled courses
   ============================================================ */
const COURSES = [
  {
    id: 1,
    title: 'Advanced React Design',
    category: 'frontend',
    categoryLabel: 'FRONTEND',
    progress: 48,
    emoji: '⚛️',
    thumbGrad: 'linear-gradient(135deg,#1e1b4b,#312e81)',
    difficulty: 'advanced',
    lessons: 42,
    duration: '18h 30m',
    instructor: 'Sarah Chen',
    completed: false,
  },
  {
    id: 2,
    title: 'Distributed Systems with Go',
    category: 'backend',
    categoryLabel: 'BACKEND',
    progress: 22,
    emoji: '🌐',
    thumbGrad: 'linear-gradient(135deg,#0c1a2e,#1e3a5f)',
    difficulty: 'advanced',
    lessons: 56,
    duration: '24h 15m',
    instructor: 'James Park',
    completed: false,
  },
  {
    id: 3,
    title: 'Data Visualization Masterclass',
    category: 'data-science',
    categoryLabel: 'DATA SCIENCE',
    progress: 100,
    emoji: '📊',
    thumbGrad: 'linear-gradient(135deg,#78350f,#b45309)',
    difficulty: 'intermediate',
    lessons: 38,
    duration: '14h 00m',
    instructor: 'Maya Patel',
    completed: true,
  },
  {
    id: 4,
    title: 'UX Psychology Foundations',
    category: 'design',
    categoryLabel: 'DESIGN',
    progress: 76,
    emoji: '🧠',
    thumbGrad: 'linear-gradient(135deg,#1f2937,#374151)',
    difficulty: 'beginner',
    lessons: 28,
    duration: '10h 45m',
    instructor: 'Lena Müller',
    completed: false,
  },
  {
    id: 5,
    title: 'Cybersecurity Fundamentals',
    category: 'security',
    categoryLabel: 'SECURITY',
    progress: 5,
    emoji: '🛡️',
    thumbGrad: 'linear-gradient(135deg,#0f0f1a,#1a0533)',
    difficulty: 'intermediate',
    lessons: 60,
    duration: '26h 00m',
    instructor: 'Marco Rossi',
    completed: false,
  },
  {
    id: 6,
    title: 'Cloud Infrastructure (AWS)',
    category: 'devops',
    categoryLabel: 'DEVOPS',
    progress: 42,
    emoji: '☁️',
    thumbGrad: 'linear-gradient(135deg,#1e3a5f,#0ea5e9)',
    difficulty: 'intermediate',
    lessons: 50,
    duration: '20h 30m',
    instructor: 'Priya Sharma',
    completed: false,
  },
];

/* Category → CSS class mapping */
const CAT_CLASS = {
  frontend:     'cat-frontend',
  backend:      'cat-backend',
  'data-science':'cat-data-science',
  design:       'cat-design',
  security:     'cat-security',
  devops:       'cat-devops',
};

/* ============================================================
   STATE
   ============================================================ */
let state = {
  filter: 'inprogress',   // all | inprogress | completed | daily
  category: null,         // frontend | backend | …
  difficulty: null,       // beginner | intermediate | advanced
  sort: 'recent',         // recent | progress | name
  search: '',
};

/* ============================================================
   DOM REFERENCES
   ============================================================ */
const coursesGrid   = document.getElementById('coursesGrid');
const sortSelect    = document.getElementById('sortSelect');
const searchInput   = document.getElementById('searchInput');
const searchDrop    = document.getElementById('searchDropdown');
const modalOverlay  = document.getElementById('modalOverlay');
const modalClose    = document.getElementById('modalClose');
const modalContent  = document.getElementById('modalContent');
const toast         = document.getElementById('toast');
const continueBtn   = document.getElementById('continueBtn');
const notifBtn      = document.getElementById('notifBtn');

/* ============================================================
   RENDER COURSES
   ============================================================ */
function getFiltered() {
  let list = [...COURSES];

  // Main filter
  if (state.filter === 'inprogress') {
    list = list.filter(c => !c.completed && c.progress > 0 && c.progress < 100);
  } else if (state.filter === 'completed') {
    list = list.filter(c => c.completed || c.progress === 100);
  } else if (state.filter === 'daily') {
    list = list.filter(c => c.progress < 30 && c.progress > 0);
  }

  // Category filter
  if (state.category) {
    list = list.filter(c => c.category === state.category);
  }

  // Difficulty filter
  if (state.difficulty) {
    list = list.filter(c => c.difficulty === state.difficulty);
  }

  // Search
  if (state.search.trim()) {
    const q = state.search.toLowerCase();
    list = list.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.instructor.toLowerCase().includes(q)
    );
  }

  // Sort
  if (state.sort === 'progress') {
    list.sort((a, b) => b.progress - a.progress);
  } else if (state.sort === 'name') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }
  // 'recent' keeps insertion order (original array order)

  return list;
}

function renderCard(course) {
  const isDone = course.completed || course.progress === 100;
  const fillClass = isDone ? 'progress-bar-fill done' : 'progress-bar-fill';

  const footerHTML = isDone
    ? `<button class="btn-cert" data-id="${course.id}">🏅 View Certificate</button>`
    : `<button class="btn-resume" data-id="${course.id}">▶ Resume</button>`;

  return `
    <article class="course-card" data-id="${course.id}" tabindex="0" role="button" aria-label="${course.title}">
      ${isDone ? '<span class="completed-badge">✓ Completed</span>' : ''}
      <div class="card-thumb-placeholder" style="background:${course.thumbGrad}">
        ${course.emoji}
      </div>
      <div class="card-body">
        <p class="card-category ${CAT_CLASS[course.category]}">${course.categoryLabel}</p>
        <h3 class="card-title">${course.title}</h3>
        <div class="progress-row">
          <span>Progress</span>
          <span>${course.progress}%</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="${fillClass}" style="width:${course.progress}%"></div>
        </div>
      </div>
      <div class="card-footer">${footerHTML}</div>
    </article>
  `;
}

function renderCourses() {
  const list = getFiltered();
  if (list.length === 0) {
    coursesGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>No courses match your filters.<br>Try adjusting the filters or search.</p>
      </div>`;
    return;
  }
  coursesGrid.innerHTML = list.map(renderCard).join('');

  // Attach card click listeners
  coursesGrid.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open modal when clicking resume/cert button
      if (e.target.closest('button')) return;
      openModal(+card.dataset.id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(+card.dataset.id);
    });
  });

  // Resume / cert buttons
  coursesGrid.querySelectorAll('.btn-resume').forEach(btn => {
    btn.addEventListener('click', () => {
      const course = COURSES.find(c => c.id === +btn.dataset.id);
      showToast(`▶ Resuming "${course.title}"…`);
    });
  });
  coursesGrid.querySelectorAll('.btn-cert').forEach(btn => {
    btn.addEventListener('click', () => {
      const course = COURSES.find(c => c.id === +btn.dataset.id);
      showToast(`🏅 Certificate downloaded for "${course.title}"`);
    });
  });
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const c = COURSES.find(c => c.id === id);
  if (!c) return;
  const isDone = c.completed || c.progress === 100;
  const lessonsLeft = Math.round(c.lessons * (1 - c.progress / 100));

  modalContent.innerHTML = `
    <p class="modal-cat ${CAT_CLASS[c.category]}">${c.categoryLabel}</p>
    <h2 class="modal-title">${c.title}</h2>
    <p class="modal-progress-label">Progress — ${c.progress}%</p>
    <div class="modal-bar-wrap">
      <div class="modal-bar-fill" style="width:${c.progress}%"></div>
    </div>
    <div class="modal-stats">
      <div class="modal-stat">
        <div class="modal-stat-val">${c.lessons}</div>
        <div class="modal-stat-lbl">LESSONS</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-val">${isDone ? 0 : lessonsLeft}</div>
        <div class="modal-stat-lbl">REMAINING</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-val">${c.duration}</div>
        <div class="modal-stat-lbl">DURATION</div>
      </div>
    </div>
    <p style="font-size:.83rem;color:var(--clr-muted);margin-bottom:16px;">
      👤 Instructor: <strong>${c.instructor}</strong> &nbsp;|&nbsp;
      🎯 Difficulty: <strong style="text-transform:capitalize">${c.difficulty}</strong>
    </p>
    <button class="modal-btn" id="modalActionBtn">
      ${isDone ? '🏅 View Certificate' : '▶ Continue Learning'}
    </button>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalActionBtn').addEventListener('click', () => {
    closeModal();
    showToast(isDone ? `🏅 Certificate for "${c.title}"` : `▶ Resuming "${c.title}"…`);
  });
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer = null;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ============================================================
   SIDEBAR FILTERS
   ============================================================ */
// Main filter items
document.querySelectorAll('.filter-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.filter-item').forEach(el => el.classList.remove('active'));
    item.classList.add('active');
    state.filter = item.dataset.filter;
    state.category = null;
    state.difficulty = null;
    // Reset category & difficulty highlights
    document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.pill').forEach(el => el.classList.remove('active'));
    renderCourses();
  });
});

// Category items
document.querySelectorAll('.cat-item').forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
    if (isActive) {
      state.category = null;
    } else {
      item.classList.add('active');
      state.category = item.dataset.cat;
      state.filter = 'all';
      document.querySelectorAll('.filter-item').forEach(el => el.classList.remove('active'));
      document.querySelector('[data-filter="all"]').classList.add('active');
    }
    renderCourses();
  });
});

// Difficulty pills
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    const isActive = pill.classList.contains('active');
    document.querySelectorAll('.pill').forEach(el => el.classList.remove('active'));
    if (isActive) {
      state.difficulty = null;
    } else {
      pill.classList.add('active');
      state.difficulty = pill.dataset.diff;
    }
    renderCourses();
  });
});

// Collapsible toggles
document.querySelectorAll('.section-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const target = document.getElementById(toggle.dataset.target);
    const isOpen = !target.classList.contains('closed');
    target.classList.toggle('closed', isOpen);
    toggle.classList.toggle('collapsed', isOpen);
  });
});

/* ============================================================
   SORT
   ============================================================ */
sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  renderCourses();
});

/* ============================================================
   SEARCH
   ============================================================ */
searchInput.addEventListener('input', () => {
  state.search = searchInput.value;
  updateSearchDropdown();
  renderCourses();
});

searchInput.addEventListener('focus', updateSearchDropdown);

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-search')) {
    searchDrop.classList.remove('open');
  }
});

function updateSearchDropdown() {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchDrop.classList.remove('open'); return; }

  const matches = COURSES.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q)
  ).slice(0, 5);

  if (matches.length === 0) {
    searchDrop.innerHTML = `<div class="search-result-item" style="color:var(--clr-muted)">No results found</div>`;
  } else {
    searchDrop.innerHTML = matches.map(c => {
      const highlighted = c.title.replace(
        new RegExp(`(${q})`, 'gi'),
        '<strong>$1</strong>'
      );
      return `<div class="search-result-item" data-id="${c.id}">${highlighted} <span style="font-size:.7rem;color:var(--clr-light);margin-left:6px;">${c.categoryLabel}</span></div>`;
    }).join('');
  }
  searchDrop.classList.add('open');

  searchDrop.querySelectorAll('.search-result-item[data-id]').forEach(item => {
    item.addEventListener('click', () => {
      openModal(+item.dataset.id);
      searchDrop.classList.remove('open');
      searchInput.value = '';
      state.search = '';
      renderCourses();
    });
  });
}

/* ============================================================
   NAVBAR INTERACTIONS
   ============================================================ */
// Nav links active toggle
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    showToast(`Navigating to ${link.textContent}…`);
  });
});

// Notification bell
notifBtn.addEventListener('click', () => {
  showToast('🔔 3 new notifications — check Settings');
});

// Continue learning
continueBtn.addEventListener('click', () => {
  openModal(1); // Opens React Masterclass card
});

// Upgrade button
document.querySelector('.upgrade-btn').addEventListener('click', () => {
  showToast('🚀 Upgrade page coming soon!');
});

/* ============================================================
   INITIAL RENDER
   ============================================================ */
renderCourses();
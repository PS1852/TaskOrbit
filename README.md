<div align="center">

<br />

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
<img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />

<br /><br />

<h1>🪐 TaskOrbit</h1>

<p><strong>Manage your tasks in one simple orbit.</strong></p>

<p>
  TaskOrbit is a production-quality SaaS task management platform.<br />
  Built with React 19, TypeScript, and Tailwind CSS for modern teams who move fast.
</p>

<br />

[**Live Demo**](https://PS1852.github.io/TaskOrbit) · [**Report a Bug**](https://github.com/PS1852/TaskOrbit/issues) · [**Request a Feature**](https://github.com/PS1852/TaskOrbit/issues)

<br />

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Auth Simulation** | Persistent Signup / Login with localStorage-backed sessions |
| 🔒 **Protected Routes** | Dashboard, Analytics & Settings are gated behind authentication |
| 📋 **Kanban Task Board** | Full CRUD — Create, Read, Update, Delete with inline editing |
| 💾 **Persistence** | All tasks and session data survive page refresh |
| 📊 **Analytics** | CSS-only bar charts + SVG donut ring for completion tracking |
| 🌓 **Dark / Light Mode** | System-aware, toggle-controlled, persisted across sessions |
| 💰 **Pricing Toggle** | Animated monthly ↔ yearly billing switch with live price updates |
| 📱 **Responsive** | Mobile-first design with hamburger navigation drawer |
| ♿ **Accessible** | ARIA roles, labels, keyboard navigation throughout |
| 🚀 **Deploy-ready** | Vercel & Netlify configurations included out-of-the-box |

---

## 🖼️ Screenshots

> Add screenshots after deploying. Suggested images:

| Page | Preview |
|---|---|
| Landing Page | `docs/screenshots/landing.png` |
| Dashboard | `docs/screenshots/dashboard.png` |
| Analytics | `docs/screenshots/analytics.png` |
| Pricing | `docs/screenshots/pricing.png` |
| Login | `docs/screenshots/login.png` |

---

## 🛠️ Tech Stack

```
React 19          — UI framework
TypeScript 5.8    — Type safety throughout
Tailwind CSS 4    — Utility-first styling (via @tailwindcss/vite)
React Router 7    — Client-side routing & protected routes
Vite 7            — Lightning-fast dev server & build tool
Lucide React      — Icon library
localStorage      — Client-side data persistence
```

---

## 📁 Folder Structure

```
TaskOrbit/
├── public/
│   └── _redirects            # Netlify SPA fallback
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive navigation with mobile drawer
│   │   ├── TaskCard.tsx       # Reusable task card with inline edit & CRUD
│   │   ├── PricingToggle.tsx  # Monthly/yearly billing switch
│   │   └── ThemeToggle.tsx    # Dark/light mode persisted toggle
│   │
│   ├── hooks/
│   │   ├── useAuth.tsx        # Auth context & simulated login/signup
│   │   └── useTasks.ts        # Task CRUD hook with localStorage sync
│   │
│   ├── routes/
│   │   ├── Landing.tsx        # Marketing landing page with footer
│   │   ├── Pricing.tsx        # Pricing page with FAQ
│   │   ├── Login.tsx          # Login page (simulated)
│   │   ├── Signup.tsx         # Signup page (simulated)
│   │   ├── Dashboard.tsx      # Protected Kanban board
│   │   ├── Analytics.tsx      # Protected analytics with CSS charts
│   │   ├── Settings.tsx       # Protected account settings
│   │   └── NotFound.tsx       # 404 fallback
│   │
│   ├── App.tsx                # Root component, router & ProtectedRoute
│   ├── main.tsx               # Entry point
│   └── index.css              # Tailwind import + design tokens + animations
│
├── index.html                 # App shell with SEO meta tags & Inter font
├── vite.config.ts             # Vite + Tailwind plugin config
├── tsconfig.json              # TypeScript config
├── vercel.json                # Vercel SPA rewrite rule
├── package.json               # Project metadata & scripts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 20
- [npm](https://npmjs.com) ≥ 10

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/taskorbit.git
cd taskorbit

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be live at **[http://localhost:5173](http://localhost:5173)**.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Type-check + build production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint (zero warnings allowed) |
| `npm run type-check` | Run TypeScript compiler check without emitting |

---

## 🏗️ Production Build

```bash
npm run build
```

Output is placed in the `dist/` folder. To preview locally:

```bash
npm run preview
```

---

## ☁️ Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Initialize Git and push to GitHub first (see below), then:
vercel --prod
```

Or connect via the **[Vercel Dashboard](https://vercel.com/new)** — import your GitHub repo and Vercel auto-detects Vite. The included `vercel.json` handles SPA routing.

**Build settings** (auto-detected):
- Framework: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

---

### Netlify

1. Go to **[app.netlify.com](https://app.netlify.com)** → **Add new site** → **Import from Git**
2. Connect your GitHub repository
3. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

The `public/_redirects` file handles SPA fallback routing automatically.

---

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```

> ⚠️ Note: Set `base: '/taskorbit/'` in `vite.config.ts` if deploying to a sub-path like `username.github.io/taskorbit`.

---

## 🔧 Pushing to GitHub

```bash
# 1. Initialise Git
git init

# 2. Stage all files
git add .

# 3. Initial commit
git commit -m "feat: initial TaskOrbit production build"

# 4. Create a repository on GitHub, then:
git remote add origin https://github.com/your-username/taskorbit.git
git branch -M main
git push -u origin main
```

---

## 🔐 Authentication

TaskOrbit uses **simulated authentication** for demo purposes. All session data is stored in `localStorage`. There is no backend; any valid email and password will work.

To integrate a real auth provider (e.g. Supabase, Firebase, Auth0), replace the `login` and `signup` functions in `src/hooks/useAuth.tsx`.

---

## 📞 Contact

| Channel | Details |
|---|---|
| ✉️ Email | [contact@taskorbit.in](mailto:contact@taskorbit.in) |
| 📞 Phone | +91 80 5555 0123 |
| 💼 LinkedIn | [linkedin.com/company/taskorbit](https://linkedin.com/company/taskorbit) |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by the TaskOrbit Team</p>
  <p>
    <a href="https://taskorbit.in">Website</a> ·
    <a href="https://linkedin.com/company/taskorbit">LinkedIn</a> ·
    <a href="mailto:contact@taskorbit.in">Email</a>
  </p>
</div>

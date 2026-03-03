<div align="center">

# 🐺 Fenrir Security — `aps`

### ⚡ Next-Gen Cybersecurity SaaS Dashboard ⚡

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />

<br />

> _"In Norse mythology, Fenrir is the monstrous wolf 🐺 — here it hunts bugs instead."_

<br />

🔐 A pixel-perfect, feature-rich cybersecurity scanning dashboard with live penetration testing console, vulnerability tracking, dark/light mode, and silky-smooth animations.

</div>

---

## ✨ Features

| 🎯 Feature                 | 📝 Description                                                          |
| -------------------------- | ----------------------------------------------------------------------- |
| 🌗 **Dark / Light Mode**   | Gorgeous animated gradient toggle with buttery transitions              |
| 📱 **Fully Responsive**    | Looks incredible on desktop, tablet & mobile                            |
| 🔍 **Live Scan Console**   | Real-time penetration test activity log with syntax highlighting        |
| 🛡️ **Vulnerability Cards** | Critical / High / Medium / Low severity with hover animations           |
| 📊 **Scan Pipeline**       | Visual stepper — Spidering → Mapping → Testing → Validating → Reporting |
| 📋 **Scan Data Table**     | Sortable, searchable, filterable with pagination                        |
| 🚀 **Coming Soon Pages**   | Beautiful placeholder pages with animated icons                         |
| 🔒 **Sign Up Page**        | Stunning auth page with aurora gradient background                      |
| 💫 **Micro-Interactions**  | Tooltips, pulse rings, lift effects, scale feedback everywhere          |
| 🎨 **Clean Architecture**  | Modular components, clean code, proper separation                       |

---

## 🛠️ Tech Stack

```
⚡ Framework    →  Next.js 16 (App Router)
⚛️  UI Library   →  React 19
🎨 Styling      →  Tailwind CSS v4
📦 Icons        →  Lucide React + React Icons
🔤 Typography   →  Inter (Google Fonts)
📐 Language     →  TypeScript 5
```

---

## 📁 Project Structure

```
🐺 fenrir_security_project/
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 next.config.ts
├── 📄 postcss.config.mjs
├── 📄 eslint.config.mjs
├── 📄 tailwind (v4 via @tailwindcss/postcss)
│
├── 🎨 app/
│   ├── 🌐 layout.tsx              # Root layout + dark mode script
│   ├── 🏠 page.tsx                # Landing → redirects to sign-up
│   ├── 🎭 globals.css             # Tailwind v4 + custom variants
│   ├── 🖼️  icon.png               # Favicon
│   │
│   ├── 🔐 (AUTH)/
│   │   └── sign-up/
│   │       └── page.tsx           # Sign-up route
│   │
│   └── 🏗️  (MAIN)/
│       ├── layout.tsx             # Dashboard shell (Sidebar + ThemeProvider)
│       ├── 📊 dashboard/
│       │   └── page.tsx           # Main dashboard with table & cards
│       ├── 🔍 scans/
│       │   └── page.tsx           # Live scan console + pipeline
│       ├── 📁 projects/
│       │   └── page.tsx           # 🚧 Coming Soon
│       ├── 📅 schedule/
│       │   └── page.tsx           # 🚧 Coming Soon
│       ├── 🔔 notifications/
│       │   └── page.tsx           # 🚧 Coming Soon
│       ├── ⚙️  settings/
│       │   └── page.tsx           # 🚧 Coming Soon
│       └── 💬 support/
│           └── page.tsx           # 🚧 Coming Soon
│
├── 🧩 components/
│   ├── 🔐 SignUpPage.tsx          # Auth page with aurora gradient
│   ├── 🚀 ComingSoon.tsx          # Animated coming soon placeholder
│   │
│   ├── 📊 dashboard/
│   │   ├── Sidebar.tsx            # Nav + theme toggle + user card
│   │   ├── TopBar.tsx             # Breadcrumbs + action buttons
│   │   ├── InfoBar.tsx            # Project metadata strip
│   │   ├── SeverityCards.tsx      # Critical/High/Medium/Low cards
│   │   ├── ScanTable.tsx          # Data table with filters
│   │   └── ThemeProvider.tsx      # useSyncExternalStore dark mode
│   │
│   └── 🔍 scans/
│       ├── ScanProgress.tsx       # Circular progress + pipeline stepper
│       ├── ScanInfoBar.tsx        # Scan metadata (type, target, etc.)
│       ├── LiveConsole.tsx        # Terminal-style activity log
│       ├── FindingLog.tsx         # Vulnerability finding cards
│       └── ScanStatusBar.tsx      # Bottom status bar with counters
│
└── 📂 public/                    # Static assets
```

---

## 🚀 Getting Started

```bash
# 📥 Clone the repo
git clone https://github.com/StarDust130/fenrir_security_project.git

# 📂 Navigate to project
cd fenrir_security_project

# 📦 Install dependencies
npm install

# 🔥 Fire it up!
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📸 Pages Overview

| Page             | Route            | Status         |
| ---------------- | ---------------- | -------------- |
| 🔐 Sign Up       | `/sign-up`       | ✅ Live        |
| 📊 Dashboard     | `/dashboard`     | ✅ Live        |
| 🔍 Scans         | `/scans`         | ✅ Live        |
| 📁 Projects      | `/projects`      | 🚧 Coming Soon |
| 📅 Schedule      | `/schedule`      | 🚧 Coming Soon |
| 🔔 Notifications | `/notifications` | 🚧 Coming Soon |
| ⚙️ Settings      | `/settings`      | 🚧 Coming Soon |
| 💬 Support       | `/support`       | 🚧 Coming Soon |

---

## 🎨 Color Palette

| Color        | Hex       | Usage                                     |
| ------------ | --------- | ----------------------------------------- |
| 🟢 Teal      | `#0CC8A8` | Primary — buttons, active states, accents |
| 🔴 Red       | `#EF4444` | Critical severity, stop scan              |
| 🟠 Orange    | `#F97316` | High severity                             |
| 🟡 Amber     | `#F59E0B` | Medium severity, warnings                 |
| 🟢 Emerald   | `#10B981` | Low severity, success                     |
| ⚫ Dark BG   | `#0A0F14` | Dark mode background                      |
| ⬛ Dark Card | `#0F1419` | Dark mode card/sidebar                    |

---

## 🧩 Component Highlights

### 🌗 Theme Toggle

> Animated gradient card — deep blue/indigo for dark, warm golden for light. Icons do a 360° bounce rotation with overshoot easing. Frosted glass icon container with shimmer on hover.

### 🔍 Live Scan Console

> Terminal-style console with syntax-highlighted log entries — links in teal, code in amber boxes, errors in red, warnings in italic amber. Collapsible with "Running..." spinner badge.

### 📊 Scan Pipeline

> Horizontal stepper with connector lines through icon centers. Active step pulses with ping animation. Circular SVG progress ring with percentage.

### 🛡️ Severity Cards

> Four metric cards with ring animations on hover, lift effects, and contextual icons (ShieldX, AlertTriangle, ShieldAlert, SearchCheck).

---

## 📜 Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | 🔥 Start dev server        |
| `npm run build` | 📦 Production build        |
| `npm run start` | 🚀 Start production server |
| `npm run lint`  | 🔍 Run ESLint              |

---

## 🧬 Dependencies

| Package        | Version | Purpose                |
| -------------- | ------- | ---------------------- |
| `next`         | 16.1.6  | ⚡ React framework     |
| `react`        | 19.2.3  | ⚛️ UI library          |
| `tailwindcss`  | v4      | 🎨 Utility-first CSS   |
| `lucide-react` | 0.576.0 | 🎯 Beautiful icons     |
| `react-icons`  | 5.5.0   | 🎭 Extended icon packs |
| `typescript`   | 5       | 📐 Type safety         |

---

<div align="center">

### 🐺 Built with 💖 and ☕ by [StarDust130](https://github.com/StarDust130)

⭐ Star this repo if you like it! ⭐

<br />

```
  🌑🌒🌓🌔🌕🌖🌗🌘🌑
    Fenrir never sleeps.
  🐺🐺🐺🐺🐺🐺🐺🐺🐺
```

</div>

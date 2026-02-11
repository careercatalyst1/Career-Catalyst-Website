# Career Catalyst Club — Immersive 3D Website

An immersive, multi-page website for the **Career Catalyst Placement Assistance Club** at Sri Siddhartha Institute of Technology, Department of CSE-Cyber Security.

## ✨ Features

- **3D Animated Background** — Floating career symbols (briefcase, graduation cap, chart, etc.) using React Three Fiber
- **Multi-Page Navigation** — Home, About, Services, Programs, Journey, Gallery, Achievements, Team, Affiliations, Contact
- **Responsive Design** — Tailwind CSS with dark theme throughout
- **Smooth Animations** — Framer Motion page transitions and hover effects
- **Contact Form** — Application submission form

## 🛠️ Tech Stack

- **React 18** + TypeScript
- **Vite** — build tool
- **Tailwind CSS v4** — styling
- **React Three Fiber** + **Drei** — 3D scene
- **Framer Motion** — animations
- **React Router v6** — routing

## 🚀 Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx        # Main layout with 3D background
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── Scene3D.tsx       # 3D floating symbols
│   └── ErrorBoundary.tsx # Error boundary for 3D scene
├── pages/
│   ├── Home.tsx          # Landing page
│   ├── About.tsx         # Vision, Mission, Promise
│   ├── Services.tsx      # Placement services
│   ├── Programs.tsx      # Workshops & bootcamps
│   ├── Journey.tsx       # Placement path timeline
│   ├── Gallery.tsx       # Project gallery
│   ├── Achievements.tsx  # Stats & achievements
│   ├── Team.tsx          # Team members
│   ├── Affiliations.tsx  # Partner companies
│   └── Contact.tsx       # Contact form
├── utils/
│   └── cn.ts             # Tailwind class merger
├── App.tsx               # Router setup
├── main.tsx              # Entry point
└── index.css             # Tailwind import
```

## 📄 License

© 2024 Career Catalyst Club. All rights reserved.

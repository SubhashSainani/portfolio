# Subhash - Modern Personal Portfolio

A sleek, highly interactive, and fully responsive personal portfolio built to showcase my professional experience, skills, and projects as a Software Engineer. Designed with modern UI/UX principles, smooth animations, and a premium glassmorphic aesthetic.

## 🚀 Live Demo
**[View Live Portfolio](https://SubhashSainani.github.io/portfolio/)** *(Ensure you update this link if your GitHub Pages URL is different)*

---

## ✨ Key Features
- **Modern UI/UX**: Clean, professional design with a focus on usability and aesthetics.
- **Responsive Layout**: Fully optimized for seamless viewing across all devices (mobile, tablet, desktop).
- **Interactive Animations**: Powered by Framer Motion for buttery-smooth page transitions and scroll effects.
- **Glassmorphism Design**: Features beautiful frosted glass effects and subtle blur backdrops.
- **Dark/Light Mode**: Integrated theme toggling for personalized viewing experiences.
- **Static Site Generated**: Completely decoupled frontend allowing for instant load times and free zero-downtime hosting on GitHub Pages.
- **Direct Mail Contact**: Contact form that conveniently hooks natively into the user's default email client.

## 🛠️ Built With
This portfolio is built using a modern, high-performance web stack:
- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [Wouter](https://github.com/molefrog/wouter) (Configured for SPA Hash Routing)

---

## 💻 Getting Started (Local Development)

If you'd like to run this project locally on your machine, follow these steps:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/SubhashSainani/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:3000`*

---

## 📁 Project Structure

```text
portfolio/
├── .github/workflows/          # GitHub Actions CI/CD pipeline
├── client/                     # Frontend React Code
│   ├── index.html              # Main HTML entry point
│   ├── src/                    # Source files
│   │   ├── components/         # Reusable UI components & Sections
│   │   ├── data/               # Static data for Profile, Experience, Skills etc.
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utilities and query client setup
│   │   ├── pages/              # Top-level page components
│   │   ├── main.tsx            # React application entry
│   │   └── index.css           # Global Tailwind CSS and variables
├── shared/                     # Shared Types and Schemas
├── vite.config.ts              # Vite bundler configuration
└── package.json                # Project dependencies and scripts
```

---

## 🌐 Deployment (GitHub Pages)

This project is configured right out of the box to deploy seamlessly to **GitHub Pages** using **GitHub Actions**.

Whenever you push your code to the `main` branch, the `.github/workflows/deploy.yml` action will automatically trigger, build the static Vite payload, and publish it to your GitHub Pages URL within minutes!

### Customizing Content
To update your resume data, projects, or skills in the future, simply edit the exported static objects found inside:
`client/src/data/portfolio.ts`

---

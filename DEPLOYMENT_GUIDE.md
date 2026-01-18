# Portfolio Deployment Guide

You have a complete, premium portfolio website built with React and Vite. You can host this for free on Vercel, Netlify, or GitHub Pages.

## 1. Setup Contact Form (Crucial Step!)
1. Go to [https://formspree.io/](https://formspree.io/).
2. Sign up or Log in.
3. Create a **New Form**.
4. Copy the "Endpoint" URL (it looks like `https://formspree.io/f/xv...`).
5. Open your project file: `src/components/Contact.jsx`.
6. Replace `YOUR_FORM_ID_HERE` with your actual URL.

## 2. Deploy to Vercel (Recommended - Easiest)
1. Drag and drop the `dist` folder to Vercel? **No, connecting your Git is better.**
2. Initialize this folder as a git repository (if using VS Code, use the Source Control tab or run `git init`, `git add .`, `git commit -m "Initial commit"`).
3. Push to GitHub.
4. Go to [Vercel.com](https://vercel.com).
5. "Add New" -> "Project" -> Import your GitHub repository.
6. Vercel automatically detects it's a "Vite" project.
7. Click **Deploy**.

## 3. Deploy to Netlify (Manual Upload)
If you don't want to use Git:
1. Run `npm run build` in your terminal (I have already done this).
2. You will see a `dist` folder created in your project.
3. Go to [Netlify Drop](https://app.netlify.com/drop).
4. Drag and drop the `dist` folder onto the page.
5. Your site is live!

## 4. Run Locally
To make changes or preview locally:
```bash
npm run dev
```
Open the localhost link shown (usually `http://localhost:5173`).

# Deployment Guide: Vercel

To deploy this application to Vercel and make it live, follow these simple steps:

## 1. Prepare your Code
I have already added a `vercel.json` file to your project. This is **critical** for React applications because it tells Vercel to route all requests (like `/explore` or `/login`) to your `index.html`, preventing 404 errors on refresh.

## 2. Push to GitHub (Recommended)
This is the easiest way to deploy and get automatic updates.
1. Create a new repository on GitHub.
2. Initialize and push your code:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

## 3. Connect to Vercel
1. Go to [Vercel](https://vercel.com) and log in.
2. Click **"Add New"** > **"Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite**.
5. Click **"Deploy"**.

## 4. Environment Note
Vercel uses Node.js 20 or 22 by default. Even though we downgraded-local packages to work with your Node 18, the app will work perfectly on Vercel's more modern environment.

### Optional: Vercel CLI
If you don't want to use GitHub, you can install the Vercel CLI and run `vercel` in your terminal:
```bash
npm install -g vercel
vercel
```

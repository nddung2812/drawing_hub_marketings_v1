# 🚀 Deployment Guide

## Pre-Deployment Checklist

Before deploying, ensure you've completed:

- [ ] Customized all content (headlines, descriptions, etc.)
- [ ] Replaced placeholder images
- [ ] Updated brand name from "DrawingHub"
- [ ] Configured SEO metadata
- [ ] Tested on multiple devices
- [ ] Verified dark mode works
- [ ] Checked all links work
- [ ] Run production build locally
- [ ] Fixed any linter errors
- [ ] Added analytics (optional)

## Build for Production

### Test Production Build Locally

```bash
# Build the project
npm run build

# Start production server
npm start

# Visit http://localhost:3000 to test
```

### Check for Errors

```bash
# Run linter
npm run lint

# Check TypeScript
npx tsc --noEmit
```

---

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

Vercel is the creator of Next.js and offers the best integration.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

#### Advantages:
- ✅ Zero configuration
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs
- ✅ Edge network (fast globally)
- ✅ Free SSL certificates
- ✅ Analytics included
- ✅ Generous free tier

---

### Option 2: Netlify

Great alternative with similar features to Vercel.

#### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure Domain**
   - Go to Site settings → Domain management
   - Add custom domain
   - Update DNS records

#### Advantages:
- ✅ Easy setup
- ✅ Automatic deployments
- ✅ Form handling
- ✅ Free SSL
- ✅ Good free tier

---

### Option 3: AWS Amplify

For AWS ecosystem integration.

#### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to AWS Amplify**
   - Open AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect to GitHub
   - Select repository and branch
   - Amplify auto-detects Next.js
   - Review and deploy

3. **Configure Domain**
   - Go to Domain management
   - Add custom domain
   - Amplify handles SSL automatically

#### Advantages:
- ✅ AWS integration
- ✅ Scalable infrastructure
- ✅ CI/CD pipeline
- ✅ Free tier available

---

### Option 4: Docker + Any Cloud Provider

For maximum control and flexibility.

#### Create Dockerfile

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Update next.config.ts

```typescript
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

#### Build and Run

```bash
# Build Docker image
docker build -t drawinghub-landing .

# Run container
docker run -p 3000:3000 drawinghub-landing
```

#### Deploy to:
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**
- **DigitalOcean App Platform**
- **Railway**
- **Render**

---

### Option 5: Static Export

For static hosting (Cloudflare Pages, GitHub Pages, etc.)

#### Update next.config.ts

```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

#### Build Static Site

```bash
npm run build
```

The static files will be in the `out` directory.

#### Deploy to:
- **Cloudflare Pages**
- **GitHub Pages**
- **Firebase Hosting**
- **Surge**
- **Netlify** (as static site)

---

## Environment Variables

If you add environment variables (API keys, etc.):

### Create .env.local

```bash
# .env.local (not committed to git)
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Add to Deployment Platform

**Vercel:**
- Project Settings → Environment Variables
- Add each variable

**Netlify:**
- Site settings → Build & deploy → Environment
- Add each variable

**Docker:**
```bash
docker run -e NEXT_PUBLIC_API_URL=https://api.example.com -p 3000:3000 drawinghub-landing
```

---

## Post-Deployment

### 1. Verify Deployment

- [ ] Visit your live URL
- [ ] Test all sections
- [ ] Check mobile responsiveness
- [ ] Verify dark mode works
- [ ] Test all links
- [ ] Check page load speed

### 2. Set Up Analytics

#### Google Analytics

```bash
npm install @next/third-parties
```

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

#### Vercel Analytics

```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 3. Set Up Monitoring

- **Vercel**: Built-in monitoring
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Hotjar**: User behavior

### 4. SEO Optimization

#### Add sitemap.xml

```tsx
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

#### Add robots.txt

```tsx
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

### 5. Performance Optimization

- Enable compression
- Set up CDN
- Optimize images
- Enable caching
- Monitor Core Web Vitals

---

## Continuous Deployment

### GitHub Actions (Example)

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm test
```

---

## Rollback Strategy

### Vercel
- Go to Deployments
- Find previous successful deployment
- Click "Promote to Production"

### Netlify
- Go to Deploys
- Find previous deploy
- Click "Publish deploy"

### Docker
```bash
# Tag versions
docker tag drawinghub-landing:latest drawinghub-landing:v1.0.0

# Rollback
docker run drawinghub-landing:v1.0.0
```

---

## Domain Configuration

### DNS Records

For custom domain (example.com):

```
Type    Name    Value
A       @       76.76.21.21 (Vercel IP)
CNAME   www     cname.vercel-dns.com
```

### SSL Certificate

All recommended platforms provide free SSL:
- Vercel: Automatic
- Netlify: Automatic
- AWS Amplify: Automatic
- Cloudflare: Automatic

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side
- Restart dev server after adding variables
- Check deployment platform has variables set

### Images Not Loading

- Use Next.js Image component
- Configure image domains in next.config.ts
- Check image paths are correct

### Slow Performance

- Enable compression
- Optimize images
- Use CDN
- Check bundle size: `npm run build`

---

## Cost Estimates

### Free Tier Limits

**Vercel Free:**
- 100 GB bandwidth/month
- Unlimited websites
- Automatic SSL
- Perfect for landing pages

**Netlify Free:**
- 100 GB bandwidth/month
- 300 build minutes/month
- Automatic SSL

**AWS Amplify Free (12 months):**
- 1000 build minutes/month
- 15 GB served/month

### Paid Plans (if needed)

**Vercel Pro:** $20/month
**Netlify Pro:** $19/month
**AWS Amplify:** Pay as you go

---

## Support & Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [AWS Amplify Docs](https://docs.amplify.aws)

---

## Quick Deploy Commands

```bash
# Vercel
npm i -g vercel
vercel

# Netlify
npm i -g netlify-cli
netlify deploy --prod

# AWS Amplify
npm i -g @aws-amplify/cli
amplify publish
```

---

**Your landing page is ready to go live! 🚀**

Choose your preferred platform and deploy in minutes.


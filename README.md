# DrawingHub Marketing Landing Page

A modern, responsive SaaS landing page built with Next.js 16, React 19, TailwindCSS 4, and ShadCN UI components.

## 🚀 Tech Stack

- **Next.js 16** - Latest version with App Router
- **React 19** - Latest React with improved performance
- **TailwindCSS 4** - Modern utility-first CSS framework
- **ShadCN UI** - Beautiful, accessible component library
- **TypeScript** - Type-safe development

## ✨ Features

- 🎨 Modern, clean design with gradient accents
- 📱 Fully responsive across all devices
- 🌓 Dark mode support built-in
- ⚡ Lightning-fast performance
- ♿ Accessible components
- 🎯 SEO optimized

## 📦 Project Structure

```
drawing_hub_marketings/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with TailwindCSS
├── components/
│   ├── header.tsx          # Navigation header with mobile menu
│   ├── hero.tsx            # Hero section with CTA
│   ├── features.tsx        # Features showcase grid
│   ├── pricing.tsx         # Pricing plans cards
│   ├── testimonials.tsx    # Customer testimonials
│   ├── footer.tsx          # Footer with links
│   └── ui/                 # ShadCN UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
└── lib/
    └── utils.ts            # Utility functions

```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The color scheme is defined in `app/globals.css` using CSS variables. You can customize:

- Primary colors
- Background colors
- Text colors
- Border colors
- And more...

### Components

All components are modular and can be easily customized:

- **Header**: Edit navigation links in `components/header.tsx`
- **Hero**: Update headline and CTA in `components/hero.tsx`
- **Features**: Modify feature list in `components/features.tsx`
- **Pricing**: Update pricing plans in `components/pricing.tsx`
- **Testimonials**: Add/edit testimonials in `components/testimonials.tsx`

### Adding More ShadCN Components

```bash
npx shadcn@latest add [component-name]
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

Build the project:

```bash
npm run build
```

The output will be in the `.next` folder, ready for deployment.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js 16, React 19, TailwindCSS 4, and ShadCN UI

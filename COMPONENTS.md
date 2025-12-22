# 🧩 Components Documentation

## Overview

This document provides detailed information about all components used in the DrawingHub landing page.

## Component Hierarchy

```
app/page.tsx (Main Landing Page)
├── Header (Navigation)
├── Hero (Main Banner)
├── Features (Feature Grid)
├── Pricing (Pricing Cards)
├── Testimonials (Customer Reviews)
├── CTA (Call-to-Action)
└── Footer (Site Footer)
```

---

## 1. Header Component

**File**: `components/header.tsx`

### Features

- Sticky navigation bar
- Backdrop blur effect
- Responsive mobile menu
- Hamburger menu toggle
- Logo with icon
- Navigation links
- CTA buttons

### Props

None (standalone component)

### Usage

```tsx
import { Header } from "@/components/header";

<Header />;
```

### Customization Points

- Logo and brand name
- Navigation links array
- CTA button text
- Mobile breakpoint (md:)

---

## 2. Hero Component

**File**: `components/hero.tsx`

### Features

- Large headline with gradient text
- Announcement badge
- Subheading text
- Dual CTA buttons
- Social proof indicators
- Product mockup placeholder
- Gradient background effect

### Props

None (standalone component)

### Usage

```tsx
import { Hero } from "@/components/hero";

<Hero />;
```

### Customization Points

- Main headline text
- Badge announcement
- CTA button labels
- Social proof numbers
- Product screenshot

### Dependencies

- `Button` from ShadCN UI
- `Badge` from ShadCN UI

---

## 3. Features Component

**File**: `components/features.tsx`

### Features

- Grid layout (1/2/3 columns)
- Icon + title + description cards
- Hover effects
- Responsive design

### Props

None (standalone component)

### Data Structure

```tsx
{
  icon: ReactNode,
  title: string,
  description: string
}
```

### Usage

```tsx
import { Features } from "@/components/features";

<Features />;
```

### Customization Points

- Features array (add/remove/edit)
- Icons (SVG or icon library)
- Grid columns (1/2/3)
- Card styling

### Dependencies

- `Card` from ShadCN UI
- `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`

---

## 4. Pricing Component

**File**: `components/pricing.tsx`

### Features

- 3 pricing tier cards
- "Most Popular" badge
- Feature lists with checkmarks
- CTA buttons
- Responsive grid
- Highlighted popular plan

### Props

None (standalone component)

### Data Structure

```tsx
{
  name: string,
  price: string,
  description: string,
  features: string[],
  cta: string,
  popular: boolean
}
```

### Usage

```tsx
import { Pricing } from "@/components/pricing";

<Pricing />;
```

### Customization Points

- Pricing plans array
- Feature lists
- Price amounts
- CTA button text
- Popular plan highlighting

### Dependencies

- `Button` from ShadCN UI
- `Card` components from ShadCN UI
- `Badge` from ShadCN UI

---

## 5. Testimonials Component

**File**: `components/testimonials.tsx`

### Features

- Grid of testimonial cards
- Star ratings
- Customer details
- Avatar placeholders
- Responsive layout

### Props

None (standalone component)

### Data Structure

```tsx
{
  name: string,
  role: string,
  company: string,
  image: string, // Initials for now
  content: string,
  rating: number
}
```

### Usage

```tsx
import { Testimonials } from "@/components/testimonials";

<Testimonials />;
```

### Customization Points

- Testimonials array
- Avatar images
- Star rating display
- Grid columns

### Dependencies

- `Card` from ShadCN UI
- `CardContent`

---

## 6. CTA Component

**File**: `components/cta.tsx`

### Features

- Gradient background
- Pattern overlay
- Compelling headline
- Dual CTA buttons
- Trust indicators
- Rounded corners

### Props

None (standalone component)

### Usage

```tsx
import { CTA } from "@/components/cta";

<CTA />;
```

### Customization Points

- Headline text
- Description text
- CTA button labels
- Gradient colors
- Background pattern

### Dependencies

- `Button` from ShadCN UI

---

## 7. Footer Component

**File**: `components/footer.tsx`

### Features

- Brand section with logo
- Link columns (4 columns)
- Social media icons
- Bottom bar with legal links
- Responsive layout

### Props

None (standalone component)

### Usage

```tsx
import { Footer } from "@/components/footer";

<Footer />;
```

### Customization Points

- Link sections and items
- Social media links
- Copyright text
- Legal links

---

## ShadCN UI Components

### Button

**File**: `components/ui/button.tsx`

#### Variants

- `default` - Primary button
- `outline` - Outlined button
- `ghost` - Transparent button
- `secondary` - Secondary style

#### Sizes

- `sm` - Small
- `default` - Medium
- `lg` - Large

#### Usage

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Click Me
</Button>;
```

---

### Card

**File**: `components/ui/card.tsx`

#### Sub-components

- `Card` - Container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Description text
- `CardContent` - Main content
- `CardFooter` - Footer section

#### Usage

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>;
```

---

### Badge

**File**: `components/ui/badge.tsx`

#### Variants

- `default` - Primary badge
- `secondary` - Secondary style
- `outline` - Outlined badge
- `destructive` - Error/warning style

#### Usage

```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="secondary">New</Badge>;
```

---

## Utility Functions

### cn (Class Names)

**File**: `lib/utils.ts`

Utility function for merging Tailwind classes.

#### Usage

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />;
```

---

## Styling Guidelines

### Color Variables

Defined in `app/globals.css`:

- `--background` - Page background
- `--foreground` - Text color
- `--primary` - Primary brand color
- `--secondary` - Secondary color
- `--muted` - Muted/subtle color
- `--accent` - Accent color
- `--border` - Border color
- `--card` - Card background

### Spacing Scale

- `4` - 1rem (16px)
- `6` - 1.5rem (24px)
- `8` - 2rem (32px)
- `12` - 3rem (48px)
- `16` - 4rem (64px)
- `20` - 5rem (80px)

### Responsive Breakpoints

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

### Typography

- Headings: `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`
- Body: `text-base`, `text-lg`, `text-xl`
- Small: `text-sm`, `text-xs`
- Font weights: `font-normal`, `font-semibold`, `font-bold`

---

## Best Practices

### Component Creation

1. Use TypeScript for type safety
2. Export as named export
3. Add proper props interface
4. Include JSDoc comments
5. Follow existing patterns

### Styling

1. Use Tailwind utility classes
2. Mobile-first responsive design
3. Consistent spacing
4. Support dark mode
5. Use CSS variables

### Accessibility

1. Semantic HTML elements
2. ARIA labels where needed
3. Keyboard navigation
4. Screen reader support
5. Sufficient contrast ratios

### Performance

1. Lazy load images
2. Minimize bundle size
3. Use Next.js Image component
4. Optimize fonts
5. Code splitting

---

## Adding New Components

### Step 1: Create Component File

```tsx
// components/new-component.tsx
export function NewComponent() {
  return <section className="py-20 px-4">{/* Component content */}</section>;
}
```

### Step 2: Import in Page

```tsx
// app/page.tsx
import { NewComponent } from "@/components/new-component";

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <NewComponent />
    </main>
  );
}
```

### Step 3: Style and Test

- Add Tailwind classes
- Test responsive design
- Verify dark mode
- Check accessibility

---

## Component Testing Checklist

- [ ] Renders correctly
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] Responsive on desktop
- [ ] Dark mode support
- [ ] Accessible (keyboard, screen reader)
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Follows design system
- [ ] Performance optimized

---

_For more information, see the main README.md file._

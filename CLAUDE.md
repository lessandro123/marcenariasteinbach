# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15 application for Marcenaria Steinbach, a luxury furniture company with 71 years of history. The project uses the App Router architecture with TypeScript, Tailwind CSS v4, and Framer Motion.

## Development Commands

### Essential Commands
```bash
# Development
npm run dev          # Start development server with Turbopack optimization

# Build & Production
npm run build        # Build production version with Turbopack
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint checks
```

### Testing Commands
No test framework is currently configured. When implementing tests, update this section with the appropriate commands.

## Architecture & Structure

### Project Structure
```
marcenaria-steinbach/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles with brand tokens
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── layout/          # Header, Footer, Navigation
│   │   ├── sections/        # Page sections (Hero, About, etc.)
│   │   └── common/          # Shared components
│   └── lib/                 # Utilities, types, constants
└── public/                  # Static assets and images
```

### Tech Stack
- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with custom brand tokens
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Build**: Turbopack optimization

### Brand Design System

#### Color Palette (defined in globals.css)
- **Red Primary**: `#dc2626` (var: `--red-primary`)
- **Red Hover**: `#b91c1c` (var: `--red-hover`)
- **Gold**: `#d4af37` (var: `--gold-primary`)
- **Wood Tones**: `#8b4513` to `#a0522d`

#### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

#### Custom CSS Classes
- `.reveal-on-scroll` - Scroll-triggered animations
- `.card-hover` - Card elevation effect on hover
- `.bg-gold-gradient` - Gold gradient background
- `.bg-wood-gradient` - Wood gradient background

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

## Development Guidelines

### Component Development
1. Place reusable UI components in `src/components/ui/`
2. Page-specific sections go in `src/components/sections/`
3. Layout components (Header, Footer) in `src/components/layout/`
4. Use TypeScript interfaces for all component props
5. Follow the existing Tailwind CSS v4 patterns with CSS variables

### Styling Approach
- Use Tailwind CSS v4 with the custom theme tokens defined in globals.css
- Custom animations and gradients are already defined as CSS variables
- Maintain consistency with the brand colors and typography

### Form Handling
- Use React Hook Form for all forms
- Implement Zod schemas for validation
- Place validation schemas in `src/lib/validations.ts`

### Performance Optimization
- Use Next.js Image component for all images
- Implement lazy loading for below-fold content
- Keep bundle size minimal with dynamic imports where appropriate

### SEO Considerations
- Update metadata in layout.tsx for each page
- Use semantic HTML elements
- Implement proper heading hierarchy
- Add alt text to all images

## Current Implementation Status

### Completed
- ✅ Project setup with Next.js 15 and TypeScript
- ✅ Tailwind CSS v4 configuration with brand tokens
- ✅ Custom CSS with brand colors, fonts, and animations
- ✅ Basic project structure

### To Be Implemented
- Component library (all component directories are empty)
- Page routes beyond homepage
- Business logic and utilities
- Contact forms and interactive features
- SEO optimization and metadata
- Image assets and galleries

## Important Notes
- The project uses Turbopack for faster builds (see `--turbopack` flag in package.json scripts)
- React 19 and Next.js 15 are cutting-edge versions - be aware of potential breaking changes
- Tailwind CSS v4 uses a new configuration approach with `@theme` directive
- The PRD document (`PRD-Marcenaria-Steinbach.md`) contains detailed requirements for the full implementation
- sempre fale comigo em portugues
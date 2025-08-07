# MotoLease - Motorcycle Lease-to-Own Platform

A Next.js application for a motorcycle lease-to-own platform targeting low-income youth in Kigali, Rwanda.

## Features

- Mobile-first responsive design
- Modern UI with Tailwind CSS and shadcn/ui components
- Motorcycle showcase with real images
- Waitlist signup functionality
- SEO optimized

## Getting Started

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

\`\`\`
moto-lease-platform/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
\`\`\`

## Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/moto-lease-platform.git
   git push -u origin main
   \`\`\`

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Or use Vercel CLI

\`\`\`bash
npx vercel
\`\`\`

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## License

MIT License

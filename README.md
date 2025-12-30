This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## SEO Metadata

This project includes comprehensive SEO metadata configuration to improve search engine visibility and social media sharing:

- **Page titles and descriptions**: Optimized with Greek language content
- **Open Graph tags**: For proper display when sharing on social media
- **Twitter Cards**: Optimized Twitter sharing experience
- **Structured data (JSON-LD)**: For better search engine understanding
- **Favicon and icon formats**: Multiple sizes for all devices
- **Web app manifest**: For progressive web app capabilities

### Using SEO Metadata in Pages

To extend the base metadata in individual pages, you can use the `createMetadata` helper function:

```typescript
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services | Smarting.gr",
  description: "Our professional web development services...",
  openGraph: {
    title: "Our Services - Smarting.gr",
    description: "Professional web development services...",
  },
});
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

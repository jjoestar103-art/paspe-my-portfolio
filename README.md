# My Portfolio (Next.js + TypeScript + Tailwind)

## Project Overview
This portfolio website is built with Next.js, TypeScript, and Tailwind CSS. It uses a component-based structure so each part of the site is reusable, organized, and easy to maintain.

## Features
- Responsive hero section
- About section with skills and education
- Projects section using reusable cards
- Contact form with simulated submit state
- Sticky header with mobile navigation
- Footer with social links and site navigation

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React

## Folder Structure
```text
src/
  app/
    page.tsx
    layout.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      Navigation.tsx
    ui/
      Button.tsx
      Card.tsx
    sections/
      Hero.tsx
      About.tsx
      Projects.tsx
      Contact.tsx
  lib/
    types.ts
```

## Setup Instructions
1. Install Node.js 18 or higher.
2. Create the Next.js project:

```bash
npx create-next-app@latest my-portfolio --typescript --tailwind --app
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open the app in your browser:

```text
http://localhost:3000
```

## Development Notes
- Use the `Button` component for all main call-to-action buttons.
- Use the `Card` component for project cards.
- Update the project data inside `src/components/sections/Projects.tsx`.
- Update contact details inside `src/components/sections/Contact.tsx` and `src/components/layout/Footer.tsx`.
- Update personal information inside `src/components/sections/About.tsx` and `src/components/sections/Hero.tsx`.

## Build and Test
Before submission, run:

```bash
npm run build
```

If the build is successful, the app is ready for deployment.

## Deployment to Vercel
1. Push the code to GitHub.
2. Log in to Vercel.
3. Import the GitHub repository.
4. Let Vercel detect Next.js automatically.
5. Deploy the project.

## Links
- 🔗 [GitHub Repository](https://github.com/jjoestar103-art/paspe-my-portfolio)
- 🌐 [Live Website](https://paspe-my-portfolio.vercel.app)

## 📸 Screenshot
![Homepage Screenshot](public/images/screenshot.png)

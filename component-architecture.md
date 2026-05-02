# Component Architecture Documentation

## Project Structure
This portfolio uses a modular component architecture divided into layout, UI, and section components.

## 1. Layout Components

### `Header.tsx`
- Displays the site brand name.
- Includes navigation links.
- Uses a mobile hamburger menu for smaller screens.
- Becomes sticky/fixed behavior on scroll.

### `Footer.tsx`
- Shows copyright information.
- Contains social media links.
- Includes navigation shortcuts and contact details.

### `Navigation.tsx`
- Reusable navigation component used by both header and mobile menu.
- Keeps link data in one place.
- Supports desktop and mobile layouts.

## 2. UI Components

### `Button.tsx`
- Reusable button component with variants: `primary`, `secondary`, and `outline`.
- Used across the hero section, contact form, and project cards.
- Helps keep visual design consistent.

### `Card.tsx`
- Displays project information in a consistent card layout.
- Accepts a `Project` object through props.
- Renders image, title, description, technologies, and links.

## 3. Page Sections

### `Hero.tsx`
- Serves as the landing section.
- Introduces the developer and provides call-to-action buttons.

### `About.tsx`
- Presents a short personal introduction.
- Lists skills, education, and background details.

### `Projects.tsx`
- Contains sample project data.
- Maps the project array into `Card` components.
- Keeps data and presentation organized.

### `Contact.tsx`
- Includes a controlled contact form.
- Simulates form submission with loading and success states.
- Shows contact details alongside the form.

## 4. Type Definitions

### `types.ts`
- Stores shared TypeScript interfaces.
- Ensures typed props for projects, navigation links, social links, buttons, and cards.
- Improves consistency and reduces errors.

## Design Decisions
- Component-based structure improves reusability and maintainability.
- TypeScript interfaces make the data flow safer and clearer.
- Tailwind CSS allows fast styling and responsive design.
- Layout and section separation keeps the code easier to scale.
- Shared components reduce duplicated code and keep the UI consistent.

## Conclusion
This architecture is simple, scalable, and suitable for a personal portfolio. It is easy to update, expand, and deploy, while keeping the code clean and organized.

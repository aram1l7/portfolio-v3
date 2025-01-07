# Aram - Next.js Personal Portfolio Documentation

## Overview
**Aram - Next.js Personal Portfolio** is a Next.js-based portfolio template designed to showcase your work elegantly and effectively. It features animations with Framer Motion, a sleek design powered by Tailwind CSS, and smooth carousels via Swiper.js. This documentation will guide you through installation, usage, and customization.

## Features
- **Next.js 13**: Fast and modern React framework.
- **Framer Motion**: Smooth animations and interactions.
- **Tailwind CSS**: Utility-first styling for rapid development.
- **Swiper.js**: Responsive and customizable sliders.
- **Responsive Design**: Fully optimized for all screen sizes.
- **Modular Code**: Easy to customize and extend.

## Installation
### Requirements
Ensure you have the following installed:
- **Node.js**: Version 16 or higher.
- **npm** or **yarn**: Package manager.

### Env variables
- You should add your github token which pulls contribution information from your github profile
-  ```
   GITHUB_TOKEN=yourtoken
   ```

### Steps
1. Extract the downloaded zip file.
2. Open a terminal and navigate to the extracted folder.
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

## File Structure
```
root/
├── public/          # Static assets
├── src/             # Main source code
│   ├── components/  # Reusable components
│   ├── pages/       # Application pages
│   ├── styles/      # Global and Tailwind styles
│   └── utils/       # Helper functions
├── package.json     # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── next.config.js   # Next.js configuration
```

## Customization
### Styling
This project uses **Tailwind CSS** for styling. To modify or extend styles:
1. Open `tailwind.config.js`.
2. Add or update theme configurations such as colors, spacing, etc.
3. Customize classes directly in component files.

### Animations
Animations are implemented using **Framer Motion**. To customize animations:
- Locate motion-related code in component files (e.g., `motion.div`, `variants`).
- Modify properties like `initial`, `animate`, `exit`, and `transition`.

### Swiper.js Configuration
Carousels are powered by Swiper.js. To customize:
1. Open the component using Swiper (e.g., `src/components/Slider.js`).
2. Adjust settings like `slidesPerView`, `autoplay`, or `loop`.

### Adding New Pages
1. Create a new file in the `src/pages` directory (e.g., `about.js`).
2. Export a React component from the file:
   ```jsx
   export default function About() {
       return <div>About Page</div>;
   }
   ```
3. Access the page at `http://localhost:3000/about`.

## Deployment
1. Build the project for production:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Start the production server:
   ```bash
   npm run start
   # or
   yarn start
   ```
3. Deploy the `.next` folder to your preferred hosting provider (e.g., Vercel, Netlify).

## Dependencies
This template includes the following dependencies:
- `axios`: HTTP client.
- `framer-motion`: Animations.
- `next`: Framework.
- `react` and `react-dom`: React library.
- `react-type-animation`: Typing animations.
- `swiper`: Sliders.
- `sass`: CSS preprocessor.
- `tailwindcss`: Styling.

## Support
For issues or further assistance, contact the author or refer to the [official documentation](https://nextjs.org/docs).

---
Thank you for choosing Portfolio v3! We hope it serves you well.

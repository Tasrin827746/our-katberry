import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)", 
        secondary: "var(--secondary)", 
        purple: "var(--purple)", 
        lightPurple: "var(--lightPurple)", 
        darkViolet: "var(--darkViolet)", 
        darkestViolet: "var(--darkestViolet)", 
        lightMaroon: "var(--lightMaroon)", 
        maroon: "var(--maroon)", 
        highlight: "var(--highlight)", 
        soft: "var(--soft)", 

      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      components: {
        ".card": {
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        },
      },
    },
  },
  plugins: [
    forms,
    plugin(({ addComponents }) => {
      addComponents({
        ".btn": {
          "@apply px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2":
            {},
        },
        ".btn-primary": {
          "@apply bg-primary text-primary-foreground hover:bg-primary/90": {},
        },
        ".btn-secondary": {
          "@apply bg-secondary text-secondary-foreground hover:bg-secondary/80":
            {},
        },
        ".btn-destructive": {
          "@apply bg-destructive text-destructive-foreground hover:bg-destructive/90":
            {},
        },
        ".card": {
          "@apply p-6 rounded-lg shadow-md bg-white text-black": {},
        },
      });
    }),
  ],
} satisfies Config;

// add card component

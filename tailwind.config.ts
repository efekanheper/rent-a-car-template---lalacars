import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customGreen: "hsla(86, 13%, 89%, 0.75)",
        myprimary: "#ff3600",
        textbg: "#70d65c",
        btncolor: "#151811",
        footer: "#aeb0ab",
        whitetext: "#e3e7df",
        green: "#94e085",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "footer-bg": "url('/footer-bg.png')",
        "service-bg": "url('/service-bg.png')",
        "section-bg": "url('/hero.jpg')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "3.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
} satisfies Config;

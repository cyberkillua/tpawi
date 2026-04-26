import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Times New Roman", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-mute": "var(--ink-mute)",
        line: "var(--line)",
        pink: {
          50: "var(--pink-50)",
          100: "var(--pink-100)",
          200: "var(--pink-200)",
          300: "var(--pink-300)",
          400: "var(--pink-400)",
          500: "var(--pink-500)",
          600: "var(--pink-600)",
          700: "var(--pink-700)",
          900: "var(--pink-900)",
        },
        background: "var(--paper)",
        foreground: "var(--ink)",
        card: { DEFAULT: "var(--paper)", foreground: "var(--ink)" },
        popover: { DEFAULT: "var(--paper)", foreground: "var(--ink)" },
        primary: { DEFAULT: "var(--pink-500)", foreground: "#ffffff" },
        secondary: { DEFAULT: "var(--paper-2)", foreground: "var(--ink)" },
        muted: { DEFAULT: "var(--paper-2)", foreground: "var(--ink-mute)" },
        accent: { DEFAULT: "var(--pink-100)", foreground: "var(--pink-700)" },
        destructive: { DEFAULT: "#dc2626", foreground: "#ffffff" },
        border: "var(--line)",
        input: "var(--line)",
        ring: "var(--pink-500)",
      },
      borderRadius: {
        lg: "6px",
        md: "4px",
        sm: "3px",
      },
      maxWidth: {
        wrap: "1280px",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "pulse-dot": "pulse-dot 2s infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { boxShadow: "0 0 0 0 color-mix(in oklab, var(--pink-500) 50%, transparent)" },
          "50%": { boxShadow: "0 0 0 8px transparent" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

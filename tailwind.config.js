/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        'school-red': '#C1121F',
        'school-navy': '#0A2463',
        'school-navy-dark': '#071A4A',
        'school-red-light': '#F5E8E9',
        'school-navy-light': '#E8EDF8',
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': 'calc(var(--radius) + 16px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      keyframes: {
        clipIn: {
          '0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
          '100%': { opacity: '1', clipPath: 'inset(0 0 0% 0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmerText: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(193,18,31,0.4)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 12px rgba(193,18,31,0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(193,18,31,0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'clip-in': 'clipIn 1s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'floatY 4s ease-in-out infinite',
        'float-slow': 'floatY 7s ease-in-out infinite',
        'shimmer-text': 'shimmerText 4s linear infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
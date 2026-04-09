/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#ffffff',
          2: '#f9f8f5',
          off: '#f0ede8',
        },
        brand: {
          DEFAULT: '#e67e00',
          hover: '#c96d00',
          hi: '#fff4e0',
        },
        // ドメインカラー
        dom1: { DEFAULT: '#dc2626', hi: '#fef2f2', border: 'rgba(220,38,38,0.2)' },
        dom2: { DEFAULT: '#2563eb', hi: '#eff6ff', border: 'rgba(37,99,235,0.2)' },
        dom3: { DEFAULT: '#7c3aed', hi: '#f5f3ff', border: 'rgba(124,58,237,0.2)' },
        dom4: { DEFAULT: '#059669', hi: '#ecfdf5', border: 'rgba(5,150,105,0.2)' },
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
};
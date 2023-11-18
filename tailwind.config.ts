import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--background)',
        'secondary': 'var(--secondary)',
        'primary': 'var(--primary)',
        'font-primary': 'var(--font-primary)',
        'font-secondary': 'var(--font-secondary)',
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "myColTemp": "auto, auto",
        "myColTemp2": "auto, auto",
      },
      gridTemplateColumns: {
        "barTemp": "80%, 20%",
      }
    },
  },
  plugins: [],
}
export default config

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
        "myColTemp": "25%, 75%",
        "myColTemp2": "20%, 80%",
      },
      gridTemplateColumns: {
        "barTemp": "80%, 20%",
      }
    },
  },
  plugins: [],
}
export default config

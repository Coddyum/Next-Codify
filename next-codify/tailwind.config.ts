import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jet': ['JetBrainsMono', 'monospace'],
      },
      "colors": {
          'or': {
            '50': '#fcf5f0',
            '100': '#f9e7db',
            '200': '#f1cdb7',
            '300': '#ecb99d',
            '400': '#de8059',
            '500': '#d66039',
            '600': '#c84b2e',
            '700': '#a63928',
            '800': '#852f27',
            '900': '#6c2922',
            '950': '#3a1210',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;

// tailwind.config.ts
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
        // 기본 sans-serif 폰트를 Noto Sans KR과 Geist Sans로 설정
        sans: ["var(--font-noto-sans-kr)", "var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      // ... 기타 설정
    },
  },
  plugins: [],
};
export default config;

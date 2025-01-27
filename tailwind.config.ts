import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         keyframes: {
            gradientShift: {
               "0%": { backgroundPosition: "0% 50%" },
               "50%": { backgroundPosition: "100% 50%" },
               "100%": { backgroundPosition: "0% 50%" },
            },
         },

         animation: {
            gradientShift: "gradientShift 3s ease infinite",
         },

         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
         },

         fontSize: {
            h1: ["64px", "116%"],
            h2: ["40px", "116%"],
            h3: ["32px", "118%"],
            h4: ["24px", "118%"],
            b2: ["20px", "150%"],
            b1: ["16px", "124%"],
            btn: ["22px", "126%"],
            btn2: ["16px", "126%"],
            overline1: ["11px", "138%"],
            overline2: ["13px", "138%"],
            overline3: ["8px", "126%"],
         },

         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",

            "grey--50": "#F4F4F5",
            "grey--100": "#DFE1E7",
            "grey--200": "#CCCED3",
            "grey--300": "#A4A8B0",
            "grey--400": "#81848A",
            "grey--500": "#53575F",
            "grey--600": "#343A47",
            "grey--700": "#1C2230",
            "grey--800": "#040A1A",

            "primary--50": "#F2FEFF",
            "primary--100": "#E4F7F8",
            "primary--200": "#C6FCFF",
            "primary--300": "#91F9FF",
            "primary--400": "#03F0FE",
            "primary--500": "#01DFEC",
            "primary--600": "#01BAC5",
            "primary--700": "#01838B",

            "secondary--50": "#E6EDFF",
            "secondary--100": "#7097FF",
            "secondary--200": "#225FFF",
            "secondary--300": "#0045F9",
            "secondary--400": "#003AD2",
            "secondary--500": "#002FAB",
            "secondary--600": "#001F70",
            "secondary--700": "#001449",
            "secondary--800": "#000922",

            "error--50": "#FFEBEC",
            "error--100": "#EBA3A6",
            "error--200": "#E2747A",
            "error--300": "#D8464D",
            "error--400": "#CE1821",
            "error--500": "#A5131A",
            "error--600": "#7C0E14",
            "error--700": "#290507",

            "warning--50": "#FFF7E9",
            "warning--100": "#FEDFA7",
            "warning--200": "#FDC04E",
            "warning--300": "#FDB022",
            "warning--400": "#CA8D1B",
            "warning--500": "#986A14",
            "warning--600": "#65460E",

            "success--50": "#EBFFF4",
            "success--100": "#BEEBD2",
            "success--200": "#63B286",
            "success--300": "#3E9B67",
            "success--400": "#156A3A",
            "success--500": "#0A351D",
            "success--600": "#051A0F",
         },

         backgroundImage: {
            "gradient--1":
               "linear-gradient(90deg, rgba(3, 230, 244, 0.2) 0%, rgba(0, 59, 173, 0.3) 100%)",
            "gradient--2":
               " linear-gradient(92.78deg, rgba(3, 253, 254, 0.25) -8.74%, rgba(0, 41, 165, 0.29) 105.39%)",
            "gradient--3":
               "linear-gradient(to right, #67e8f9, #3b82f6, #2563eb)",
            "gradient--4": "linear-gradient(90deg, #4ADE80, #16A34A, #4ADE80)",
         },
         boxShadow: {
            shadow1:
               "1px 1px 3px 0px #C0C9CE1A, 4px 4px 6px 0px #C0C9CE17, 9px 10px 8px 0px #C0C9CE0D, 16px 18px 10px 0px #C0C9CE03, 25px 27px 10px 0px #C0C9CE00",
         },
      },
   },
   plugins: [
      function ({ addComponents }: PluginAPI) {
         addComponents({
            ".scrollbar-hide": {
               "scrollbar-width": "none" /* Для Firefox */,
            },
            ".scrollbar-hide::-webkit-scrollbar": {
               display: "none" /* Для Webkit-браузерів */,
            },
         });
      },
   ],
} satisfies Config;

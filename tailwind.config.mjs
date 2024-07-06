/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            sans: ["Nunito Sans"],
            body: ["Atkinson Hyperlegible"],
            mono: ["Space Mono"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

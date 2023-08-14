/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                space: ["SpaceGrotesk", "sans-serif"],
            },
        },
        colors: {
            green: "#B9FF66",
            white: "#FFFFFF",
            black: "#191A23",
            softgray:"#F3F3F3",
        },
    },

    plugins: [],
};

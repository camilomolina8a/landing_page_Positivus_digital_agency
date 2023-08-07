/*eslint-env node*/ // Esto es para que EsLint no mande error de que module no está definido

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};

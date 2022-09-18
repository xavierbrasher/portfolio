/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#317abf",
                    secondary: "#e014e0",
                    accent: "#f9bd8e",
                    neutral: "#19191F",
                    "base-100": "#242348",
                    info: "#8EA5EC",
                    success: "#23D7B9",
                    warning: "#A87010",
                    error: "#F07588",
                },
            },
        ],
    },
};

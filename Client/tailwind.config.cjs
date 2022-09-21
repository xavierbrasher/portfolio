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
                    // primary: "#c55ce0",
                    // secondary: "#fffaa3",
                    // accent: "#d845c7",
                    // neutral: "#1D2135",
                    // "base-100": "#2F385B",
                    // info: "#419ED8",
                    // success: "#80E5C8",
                    // warning: "#F0C975",
                    // error: "#F7597E",
                },
            },
        ],
    },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontSize: {
            'h1': ['64px', {
                lineHeight: '110%',
                letterSpacing: '0em',
                fontWeight: '400',
            }],
            'h2': ['48px', {
                lineHeight: '110%',
                letterSpacing: '-0.05em',
                fontWeight: '500',
            }],
            'h3': ['32px', {
                lineHeight: '110%',
                letterSpacing: '-0.04em',
                fontWeight: '500',
            }],
            'h4': ['24px', {
                lineHeight: '110%',
                letterSpacing: '-0.02em',
                fontWeight: '400',
            }],
            'b1': ['18px', {
                lineHeight: '130%',
                letterSpacing: '0em',
                fontWeight: '400',
            }],
            'b2': ['15px', {
                lineHeight: '140%',
                letterSpacing: '0em',
                fontWeight: '400',
            }],
            'b3': ['14px', {
                lineHeight: '120%',
                letterSpacing: '0em',
                fontWeight: '400',
            }],
            'c1': ['12px', {
                letterSpacing: '0em',
                fontWeight: '400',
            }],
        },
        colors: {
            "accent-1": "#2D88D6",
            "accent-2": "#E84E1B",
            white: "#F7F7F7",
            fullWhite: "#FFFFFF",
            gray: "#A5A8AD",
            "stroke-1": "#CFD2D7",
            "stroke-2": "#E1E3E5",
            label: "#36BC14",
            "accent-1-opacity": "#ECF0F4",
            "accent-2-opacity": "#F3EEEC",
            textPrimary: "#6A6B70",
            textSecondary: "#1D1E20",
        },
        extend: {},
    },
    plugins: [],
};

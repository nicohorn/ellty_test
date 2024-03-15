module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            //Changing the tailwind base colors for UX purposes (pure black and pure white can cause eyestrain due to high constrast)
            colors: {
                "white": "#FAF9F6",
                "black": "#212121",
                "gray": "#C1C1C1"
            }
        },
    },
    plugins: [],
};
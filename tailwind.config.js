/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./resources/js/**/*.jsx",
        "./resources/js/**/*.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Poppins", "sans-serif"],
            },
            spacing: {
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
                "100vh": "100vh",
                "10vw": "10vw",
                "20vw": "20vw",
                "30vw": "30vw",
                "40vw": "40vw",
                "50vw": "50vw",
                "60vw": "60vw",
                "70vw": "70vw",
                "80vw": "80vw",
                "90vw": "90vw",
                "100vw": "100vw",
            },
        },
    },
    plugins: [],
};

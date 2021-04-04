module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                img: "url('./img/Students.jpg')",
                event: "url('./img/events.jpg')",
                job: "url('./img/job.jpg')",
                pagebac: "url('./img/bg.png')",
                clubu: "url('./img/clubuniversitaire.png')",
                couverture: "url('./img/m2.jpg')",
                login: "url('./img/login.png')",
            }),
            fontFamily: {
                akaya: 'Akaya',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}

module.exports = {
    name: "Texan Digital Designs",
    email: "texandigitaldesigns@gmail.com",
    phoneForTel: "832-617-0149",
    phoneFormatted: "(832) 617-0149",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Houston",
        state: "TX",
        zip: "80206",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};

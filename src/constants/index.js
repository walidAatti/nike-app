import { facebook, instagram, twitter } from "../assets/icons";

export const navLinks = [
    { href: "/nike-app/", label: "Home" },
    { href: "/nike-app/products", label: "Products" },
    { href: "/nike-app/brands", label: "Brands" },
    { href: "/nike-app/favorites", label: "Favorites" },
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/nike-app/products" },
            { name: "Air Max 1", link: "/nike-app/products" },
            { name: "Air Jordan 1", link: "/nike-app/products" },
            { name: "Air Force 2", link: "/nike-app/products"},
            { name: "Nike Waffle Racer", link: "/nike-app/products" },
            { name: "Nike Cortez", link: "/nike-app/products" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "#about-us" },
            { name: "FAQs", link: "/nike-app/" },
            { name: "How it works", link: "/nike-app/" },
            { name: "Privacy policy", link: "/nike-app/" },
            { name: "Payment policy", link: "/nike-app/" },
        ],
    }, 
    {
        title: "Get in touch",
        links: [
            { name: "customer@sneaker.com", link: "mailto:customer@sneaker.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];


import { facebook, instagram, twitter } from "../assets/icons";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/favorites", label: "Favorites" },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/products" },
      { name: "Air Max 1", link: "/products" },
      { name: "Air Jordan 1", link: "/products" },
      { name: "Air Force 2", link: "/products" },
      { name: "Nike Waffle Racer", link: "/products" },
      { name: "Nike Cortez", link: "/products" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "#about-us" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
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

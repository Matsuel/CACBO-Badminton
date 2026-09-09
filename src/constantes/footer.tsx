import Facebook from "@/assets/footer/Facebook";
import HelloAsso from "@/assets/footer/HelloAsso";
import Instagram from "@/assets/footer/Instagram";
import Messenger from "@/assets/footer/Messenger";

export const socials = [
    {
        link: "https://facebook.com/cacbo.bad",
        icon: <Facebook size={16} />
    },
    {
        link: "https://www.instagram.com/cacbo.bad",
        icon: <Instagram size={16} />
    },
    {
        link: "https://www.messenger.com/cacbo.bad",
        icon: <Messenger size={16} />
    },
    {
        link: "https://www.helloasso.com/associations/cacbo-badminton",
        icon: <HelloAsso size={16} />
    }
]

export const footerLinks = [
    {
        title: "CLUB",
        links: [
            {
                title: "Bureau",
                link: "/bureau"
            },
            {
                title: "Histoire",
                link: "/histoire"
            },
            {
                title: "Boutique",
                link: "/boutique"
            },
            {
                title: "Partenaires",
                link: "/partenaires"
            }
        ]
    },
    {
        title: "INFOS PRATIQUES",
        links: [
            {
                title: "FAQ",
                link: "/faq"
            },
            {
                title: "Adhérer",
                link: "/adherer"
            },
            {
                title: "Nous contacter",
                link: "/contact"
            }
        ]
    },
    {
        title: "RESSOURCES",
        links: [
            {
                title: "Règles du jeu",
                link: "/regles"
            },
            {
                title: "Guide du volant",
                link: "/volant"
            },
            {
                title: "Guide de la raquette",
                link: "/raquette"
            }
        ]
    },
    {
        title: "",
        links: [
            {
                title: "Mentions légales",
                link: "/mentions-legales"
            },
            {
                title: "Politique de confidentialité",
                link: "/politiques"
            }
        ]
    }
]
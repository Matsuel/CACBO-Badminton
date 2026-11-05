export type FooterLink = { title: string; link: string }

// Colonnes du footer (Figma : CLUB, RESSOURCES)
export const footerSections: { title: string; links: FooterLink[] }[] = [
    {
        title: "Club",
        links: [
            { title: "Adhérer", link: "/adherer" },
            { title: "Bureau", link: "/bureau" },
            { title: "Histoire", link: "/histoire" },
            { title: "Boutique", link: "/boutique" },
            { title: "Partenaires", link: "/partenaires" },
        ],
    },
    {
        title: "Ressources",
        links: [
            { title: "Règles du jeu", link: "/regles" },
            { title: "Guide du volant", link: "/volant" },
            { title: "Guide de la raquette", link: "/raquette" },
            { title: "Respect & prévention", link: "/respect" },
        ],
    },
]

// Bandeau rouge du bas (Figma : ENCART)
export const footerLegalLinks: FooterLink[] = [
    { title: "Mentions légales", link: "/mentions-legales" },
    { title: "Nous contacter", link: "/contact" },
    { title: "Politique de confidentialité", link: "/politiques" },
    { title: "FAQ", link: "/faq" },
]

// Logos de la bande partenaires, hauteurs reprises du Figma
export const footerPartners = [
    { name: "Ville de Carbon-Blanc", src: "/partenaires/carbonblanc.svg", width: 60, height: 72, className: "h-[47px]" },
    { name: "Omnisports Carbon-Blanc", src: "/partenaires/omnisport.svg", width: 80, height: 30, className: "h-[38px]" },
    { name: "SportArticle", src: "/partenaires/sportarticle.svg", width: 83, height: 16, className: "h-[18px]" },
]

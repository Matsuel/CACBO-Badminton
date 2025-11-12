import { BriefcaseIcon, DocumentTextIcon, HeartIcon, MagnifyingGlassIcon, PaperAirplaneIcon, ShoppingBagIcon, TrophyIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { NavbarLinkType } from "..";

export const navbarLinks: NavbarLinkType[] = [
    {
        title: "Adhérer",
        href: "/adherer",
        description: "Prêt à nous rejoindre ?",
        icon: <UserPlusIcon className="w-5" />
    },
    {
        title: "Bureau",
        href: "/bureau",
        description: "Équipe dirigeante du club",
        icon: <BriefcaseIcon className="w-5" />
    },
    {
        title: "Histoire",
        href: "/histoire",
        description: "Le chemin parcouru depuis 2007",
        icon: <TrophyIcon className="w-5" />
    },
    {
        title: "Boutique",
        href: "/boutique",
        description: "",
        icon: <ShoppingBagIcon className="w-5" />
    },
    {
        title: "Partenaires",
        href: "/partenaires",
        description: "Ils nous soutiennent pour faire grandir notre club !",
        icon: <HeartIcon className="w-5" />
    },
    {
        title: "Nous contacter",
        href: "/contact",
        description: "Besoin d’infos ? Nous sommes à votre écoute !",
        icon: <PaperAirplaneIcon className="w-5" />
    },
    {
        title: "Règles du jeu",
        href: "/regles",
        description: "Tout ce qu'il faut savoir avant de jouer !",
        icon: <DocumentTextIcon className="w-5" />
    },
    {
        title: "Guide du volant",
        href: "/volant",
        description: "Bien connaître son volant",
        icon: <DocumentTextIcon className="w-5" />
    },
    {
        title: "Guide de la raquette",
        href: "/raquette",
        description: "Tout savoir sur sa raquette",
        icon: <DocumentTextIcon className="w-5" />
    },
    {
        title: "FAQ",
        href: "/faq",
        description: "Toutes les infos pratiques sur notre club !",
        icon: <MagnifyingGlassIcon className="w-5" />
    }
]
import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import {Envelope} from "@/assets/Envelope";
import {Send} from "@/assets/Send";

export const NavbarLinks = [
    {name: 'Accueil', href: '/'},
    {name: 'Le club', href: '/histoire'},
    {name: 'Adhérer', href: '/adherer'},
    {name: 'Le bad', href: '/bad'},
    {name: 'Nous contacter', href: '/contact'},
]

export const NavbarSocialLinks = [
    {name: 'Facebook', href: 'https://www.facebook.com/cacbo.bad/', icon: Facebook},
    {name: 'Instagram', href: 'https://www.instagram.com/cacbo.bad', icon: Instagram},
]

export const NavbarButtonLinks = [
    {name: 'NOUS ECRIRE', href: '/contact', variant: 'primary', icon: Envelope},
    {name: 'NOUS REJOINDRE', href: '/join', variant: 'inverted', icon: Send},
]
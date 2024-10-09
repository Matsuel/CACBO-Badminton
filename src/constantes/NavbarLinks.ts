import {Facebook} from "@/assets/Facebook";
import {Instagram} from "@/assets/Instagram";
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
    {name: 'NOUS ÉCRIRE', href: '/contact', variant: 'primary', icon: Envelope},
    {name: 'NOUS REJOINDRE', href: '/adherer', variant: 'inverted', icon: Send},
]
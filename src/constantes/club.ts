// Coordonnées et créneaux du club : source unique pour les pages, le footer et les mentions.
export const club = {
    nom: 'CACBO Badminton',
    mail: 'hello@cacbobad.fr',
    telephone: {
        affichage: '06 18 95 23 30',
        lien: 'tel:+33618952330',
    },
    adresse: {
        lieu: 'Complexe sportif Philippe Madrelle',
        rue: '24 rue Pasteur',
        codePostal: '33560',
        ville: 'Carbon-Blanc',
    },
    creneaux: [
        { jour: 'Lundi', horaire: '21h - 23h' },
        { jour: 'Mardi', horaire: '18h - 21h' },
        { jour: 'Vendredi', horaire: '18h30 - 21h' },
    ],
} as const

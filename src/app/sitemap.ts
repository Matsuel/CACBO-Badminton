export const BASE_URL = 'https://cacbobad.fr';

export default async function sitemap() {
    const paths = [
        '',
        '/',
        '/adherer',
        '/boutique',
        '/bureau',
        '/contact',
        '/histoire',
        '/partenaires',
        '/regles',
        '/politiques',
        '/mentions-legales',
        '/faq',
        '/favicon.ico',
        '/volant',
        '/raquette',
    ];

    return paths.map((path) => ({
        url: `${BASE_URL}${path}`,
        priority: getPriority(path),
        lastModified: new Date().toISOString(),
    }));
}

function getPriority(path: string): number {
    switch (path) {
        case '':
        case '/':
            return 1.0;
        case '/adherer':
            return 0.9;
        case '/boutique':
            return 0.8;
        case '/bureau':
            return 0.7;
        case '/contact':
            return 0.6;
        case '/histoire':
            return 0.5;
        case '/partenaires':
            return 0.4;
        case '/regles':
        case '/volant':
        case '/raquette':
            return 0.3;
        case '/politiques':
            return 0.2;
        case '/mentions-legales':
        case '/faq':
        case '/favicon.ico':
            return 0.1;
        default:
            return 0.5;
    }
}

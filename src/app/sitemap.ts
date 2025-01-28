
export const BASE_URL = 'https://cacbobad.fr';

export default async function sitemap() {
    const paths = [
        '/',
        '/adherer',
        '/boutique',
        '/bureau',
        '/contact',
        '/histoire',
        '/mentions-legales',
        '/partenaires',
        '/politiques',
        '/regles',
    ];
    return paths.map((path) => {
        return {
            path: `${BASE_URL}${path}`,
            priority: getPriority(`${BASE_URL}${path}`),
            lastmod: new Date().toISOString(),
        };
    });
}

function getPriority(path: string): number {
    switch (path) {
        case '/':
            return 1;
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
        case '/mentions-legales':
            0.1;
        case '/partenaires':
            return 0.4;
        case '/politiques':
            return 0.2;
        case '/regles':
            return 0.3;
        default:
            return 0.5;
    }
}
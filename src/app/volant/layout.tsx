import { SITE_CONFIG } from "@/constantes";

export const metadata = {
    title: `${SITE_CONFIG.volant} - ${SITE_CONFIG.title}`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body
                className="antialiased"
            >
                {children}
            </body>
        </html>
    );
}

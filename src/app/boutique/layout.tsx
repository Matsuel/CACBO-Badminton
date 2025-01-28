import { SITE_CONFIG } from "@/constantes";

export const metadata = {
    title: `Notre boutique - ${SITE_CONFIG.title}`,
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

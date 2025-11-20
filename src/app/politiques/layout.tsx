import { SITE_CONFIG } from "@/constantes";

export const metadata = {
    title: `Politique de confidentialité - ${SITE_CONFIG.title}`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="antialiased"
        >
            {children}
        </div>
    );
}

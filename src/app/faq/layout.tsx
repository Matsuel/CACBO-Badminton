import { SITE_CONFIG } from "@/constantes";

export const metadata = {
    title: `FAQ - ${SITE_CONFIG.title}`,
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

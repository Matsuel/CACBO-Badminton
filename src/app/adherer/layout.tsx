import { SITE_CONFIG } from "@/constantes";

export const metadata = {
    title: `Adhérer - ${SITE_CONFIG.title}`,
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

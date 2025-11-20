import { SITE_CONFIG } from "@/constantes";

export const metadata = {
    title: `${SITE_CONFIG.bureau} - ${SITE_CONFIG.title}`,
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

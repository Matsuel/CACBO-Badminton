import { textVariants } from '@/constantes/theme';

interface RegisterProps {
    saison: string;
    open: boolean;
}

const Register = ({
    saison,
    open
}: RegisterProps) => {
    return (
        <p className={`w-full h-auto p-2 border border-redcolor rounded-full ${textVariants.secondary} text-redpale text-center`}>
            SAISON 20{saison} - <span className="font-semibold">INSCRIPTIONS {open ? "OUVERTES" : "FERMÉES"} ! ✔️</span>
        </p>
    )
}

export default Register
import Text from "@/components/Text";

interface RegisterProps {
    saison: string;
    open: boolean;
}

const Register = ({
    saison,
    open
}: RegisterProps) => {
    return (
        <Text variant="secondaire" color="rouge-pale" className="w-full h-auto p-2 border border-rouge rounded-full text-center text-[14px] leading-4">
            SAISON 20{saison} - <span className="font-semibold">INSCRIPTIONS {open ? "OUVERTES ! ✔️" : "FERMÉES"}</span>
        </Text>
    )
}

export default Register
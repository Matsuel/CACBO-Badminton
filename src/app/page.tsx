import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { SendHorizontal } from "lucide-react";

export default function Home() {
  return (
    <PageLayout>
      <div className="w-full h-auto flex flex-col items-start justify-center gap-content">
        <h2 className="font-Poppins text-[13px] text-redcolor leading-4">
          Bienvenue
        </h2>

        <h1 className="font-Space-Grotesk text-[38px] font-bold text-redcolor leading-7">
          CACBO Badminton
        </h1>

        <h3 className="font-Poppins text-[13px] text-redcolor leading-none flex flex-col">
          <span>Club de badminton pour adultes, </span>
          <span>basé à Carbon-Blanc (33)</span>
        </h3>

        <Button href={"/contact"} variant="inverted">
          <SendHorizontal size={14} />
          Nous contacter
        </Button>
      </div>
    </PageLayout>
  );
}

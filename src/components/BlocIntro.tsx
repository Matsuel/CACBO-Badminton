import type React from "react";
import { cn } from "@/utils/cn";

interface BlocIntroProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: React.ReactNode;
}

const BlocIntro = ({ className, children, ...props }: BlocIntroProps) => {
	return (
		<p className={cn("font-Poppins text-[24px] leading-5 font-normal px-5", className)} {...props}>
			{children}
		</p>
	);
};

export default BlocIntro;

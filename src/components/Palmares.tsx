import type React from "react";
import { cn } from "@/utils/cn";

interface PalmaresProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	subtitle: string;
	legend: string;
}

const Palmares = ({
	title,
	subtitle,
	legend,
	className,
	...props
}: PalmaresProps) => {
	return (
		<div
			className={cn("w-full flex flex-col items-center gap-content", className)}
			{...props}
		>
			<p className="font-poppins font-semibold text-[24px] leading-4.5 text-rouge-pale">
				{title}
			</p>
			<p className="font-poppins font-light italic text-[24px] leading-4.5 text-rouge-pale -mt-4">
				{subtitle}
			</p>
			<p className="w-4/5 font-poppins text-corps text-center">{legend}</p>
		</div>
	);
};

export default Palmares;

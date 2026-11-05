import type React from "react";
import { cn } from "@/utils/cn";
import Text from "./Text";

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
			<Text as="p" variant="chiffre" color="rouge-pale" className="text-center">
				{title} <span className="font-light italic">{subtitle}</span>
			</Text>
			<Text className="w-4/5 text-center">{legend}</Text>
		</div>
	);
};

export default Palmares;

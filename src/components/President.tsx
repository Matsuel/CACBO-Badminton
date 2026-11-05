import type React from "react";
import Text from "@/components/Text";
import { cn } from "@/utils/cn";

interface PresidentProps extends React.HTMLAttributes<HTMLDivElement> {
	date: string;
	name: string;
}

const President = ({ date, name, className, ...props }: PresidentProps) => {
	return (
		<div
			className={cn(
				"w-full flex flex-row items-center px-5 py-3.5 bg-linear-to-tr from-rouge-pale to-rouge rounded-xl gap-3",
				className,
			)}
			{...props}
		>
			<Text as="span" variant="h4" color="blanc" className="w-[30%]">
				{date}
			</Text>
			<Text as="span" color="blanc">
				{name}
			</Text>
		</div>
	);
};

export default President;

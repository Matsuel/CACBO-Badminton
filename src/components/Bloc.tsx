import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/utils/cn";
import Text from "./Text";

const blocStyles = cva(
	"w-full h-auto flex flex-col items-start justify-start p-5 gap-content bg-blanc rounded-xl shadow-ombre",
	{
		variants: {
			variant: {
				default: "",
				outline: "border border-rouge",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

interface BlocProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof blocStyles> {
	title?: string;
}

const Bloc = ({ className, children, title, variant, ...props }: BlocProps) => {
	return (
		<div className={cn(blocStyles({ variant }), className)} {...props}>
			{title && (
				<Text variant="h3" color="rouge">
					{title}
				</Text>
			)}
			{children}
		</div>
	);
};

export default Bloc;

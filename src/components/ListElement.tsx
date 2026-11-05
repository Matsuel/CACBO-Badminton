import type React from "react";
import { cn } from "@/utils/cn";
import { textStyles } from "./Text";

interface ListElementProps extends React.LiHTMLAttributes<HTMLLIElement> {
	children?: React.ReactNode;
}

const ListElement = ({ children, className, ...props }: ListElementProps) => {
	return (
		<li className={cn(textStyles(), className)} {...props}>
			{children}
		</li>
	);
};

export default ListElement;

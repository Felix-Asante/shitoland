import { cn } from "@/utils";
import React, { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	className?: string;
}
export default function Container({ children, className }: ContainerProps) {
	return (
		<div
			className={cn(
				"max-w-6xl 2xl:max-w-[90rem] mx-auto p-5 sm:p-3",
				className,
			)}
		>
			{children}
		</div>
	);
}

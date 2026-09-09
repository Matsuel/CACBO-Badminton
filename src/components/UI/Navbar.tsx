"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navbarLinks } from "@/constantes/navbar";
import { useScrollLock } from "@/hooks/useScrollLock";
import { cn } from "@/utils/cn";
import Button from "../Button";
import Menu from "./Menu";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useScrollLock(isOpen);

	return (
		<nav
			className={cn(
				"w-full flex flex-col gap-12.5 p-5",
				isOpen
					? "fixed inset-0 z-50 h-dvh overflow-hidden bg-white"
					: "absolute top-0 h-auto",
			)}
		>
			<div className="w-full h-auto flex flex-row items-center justify-between bg-white px-5 py-3 rounded-xl shadow-default shrink-0">
				<Link href="/">
					<Image
						src="/logo.svg"
						alt="CACBO Badminton Logo"
						width={48}
						height={48}
						className="cursor-pointer"
					/>
				</Link>

				<div className="flex flex-row items-center gap-5">
					<Button href="/contact" variant="ghost">
						Nous contacter
					</Button>
					<button
						className="text-redcolor cursor-pointer w-5"
						onClick={() => setIsOpen(!isOpen)}
						type="button"
						aria-expanded={isOpen}
						aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
					>
						{!isOpen ? <Menu /> : <X size={25} />}
					</button>
				</div>
			</div>

			<div
				className="w-full flex-1 min-h-0 flex-col gap-content bg-white rounded-xl overflow-y-auto overscroll-contain scrollbar-none"
				style={{
					display: isOpen ? "flex" : "none",
				}}
			>
				{navbarLinks.map((link) => (
					<NavbarLink
						key={link.description}
						{...link}
						onClick={() => setIsOpen(false)}
					/>
				))}
			</div>
		</nav>
	);
};

export default Navbar;

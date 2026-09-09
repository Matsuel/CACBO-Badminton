"use client";

import { useEffect } from "react";

/**
 * Bloque le scroll du body tant que `locked` est vrai.
 * Compense la largeur de la scrollbar pour éviter le saut de mise en page,
 * et restaure les styles d'origine au démontage.
 */
export const useScrollLock = (locked: boolean) => {
	useEffect(() => {
		if (!locked) return;

		const { body } = document;
		const previousOverflow = body.style.overflow;
		const previousPaddingRight = body.style.paddingRight;
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

		body.style.overflow = "hidden";
		if (scrollbarWidth > 0) {
			body.style.paddingRight = `${scrollbarWidth}px`;
		}

		return () => {
			body.style.overflow = previousOverflow;
			body.style.paddingRight = previousPaddingRight;
		};
	}, [locked]);
};

export default useScrollLock;

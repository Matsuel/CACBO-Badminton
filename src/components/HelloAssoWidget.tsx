"use client"

import { useEffect, useRef } from "react"

const WIDGET_SRC = "https://www.helloasso.com/associations/cacbo-badminton/boutiques/boutique-officielle-du-club-2/widget"

// Iframe de la boutique HelloAsso : agrandit sa hauteur selon les messages envoyés par le widget.
const HelloAssoWidget = () => {
    const widgetRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        const handleMessage = (event: MessageEvent<{ height?: number }>) => {
            const dataHeight = event.data?.height
            const widget = widgetRef.current

            if (widget && typeof dataHeight === "number" && dataHeight > widget.clientHeight) {
                widget.style.height = `${dataHeight}px`
            }
        }

        window.addEventListener("message", handleMessage)

        return () => window.removeEventListener("message", handleMessage)
    }, [])

    return (
        <iframe
            ref={widgetRef}
            id="haWidget"
            allow="payment 'self' https://paymenthub.helloassopay.com https://helloasso.com"
            scrolling="auto"
            src={WIDGET_SRC}
            style={{ width: "100%", height: "750px", border: "none" }}
            title="Boutique officielle du club"
        />
    )
}

export default HelloAssoWidget

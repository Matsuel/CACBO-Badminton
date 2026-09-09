"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"

const Boutique = () => {
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
        <PageLayout>
            <Header
                title="Boutique"
                subtitle="Un achat, un geste pour notre club !"
            />

            <iframe
                ref={widgetRef}
                id="haWidget"
                allow="payment 'self' https://paymenthub.helloassopay.com https://helloasso.com"
                scrolling="auto"
                src="https://www.helloasso.com/associations/cacbo-badminton/boutiques/boutique-officielle-du-club-2/widget"
                style={{ width: "100%", height: "750px", border: "none" }}
                title="Boutique officielle du club"
            />
        </PageLayout>
    )
}

export default Boutique
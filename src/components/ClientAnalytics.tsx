"use client";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "nextjs-google-analytics";

const ClientAnalytics = () => {
    return (
        <>
            <GoogleAnalytics
                gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
            />
            <SpeedInsights />
            <Analytics />
        </>
    );
};

export default ClientAnalytics;

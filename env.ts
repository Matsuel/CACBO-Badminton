import { z } from "zod";

export const envSchema = z.object({
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().min(1, "GA Measurement ID is required"),
});

export const env = envSchema.parse(process.env);
import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  businessType: z.enum(["food-vendor", "pharmacy", "clinic", "other"], {
    error: "Please select a business type",
  }),
  city: z.string().min(2, "City must be at least 2 characters"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

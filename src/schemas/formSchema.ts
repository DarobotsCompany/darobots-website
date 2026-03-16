import { z } from 'zod';

export const formSchema = z.object({
  name: z.string(),
  phone: z.string().min(1, {
    error: 'Невірний формат номеру',
  }),
  message: z.string(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

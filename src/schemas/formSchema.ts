import { z } from 'zod';

export const formSchema = z.object({
  name: z.string(),
  phone: z.string().min(1, {
    error: 'Невірний формат номеру',
  }),
  message: z.string(),
});

export type FormValues = z.infer<typeof formSchema>;

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AUTH_ZOD_MESSAGES } from '@/app/config/routes';

const signInSchema = z.object({
  email:
      z.string()
        .email(AUTH_ZOD_MESSAGES.invalidEmail)
        .min(3, AUTH_ZOD_MESSAGES.emailRequired)
        .trim(),
  password: z.string().min(3, AUTH_ZOD_MESSAGES.passwordRequired),
});

export const SignInFResolver = zodResolver(signInSchema);

export type SignInTypeSchema = z.infer<typeof signInSchema>;

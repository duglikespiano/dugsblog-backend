import { Resend } from 'resend';
import { resendApiKey } from '../apps/dotenv';

export const resend = new Resend(resendApiKey);

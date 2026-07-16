import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const fieldLabels: Record<string, string> = {
  name: 'Jméno',
  phone: 'Telefon',
  email: 'Email',
  date: 'Datum',
  location: 'Místo',
  service: 'Typ zakázky',
  package: 'Balíček',
  message: 'Zpráva',
  gdpr: 'Souhlas GDPR'
};

export const POST: APIRoute = async ({ request, locals }) => {
  const form = await request.formData();
  const token = form.get('cf-turnstile-response');
  const env = (locals as any).runtime?.env ?? {};

  if (env.TURNSTILE_SECRET_KEY) {
    const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: String(token || '') })
    });
    const result: { success?: boolean } = await verification.json();
    if (!result.success) return new Response('Turnstile ověření se nezdařilo.', { status: 400 });
  }

  const required = ['name', 'phone', 'email', 'message', 'gdpr'];
  for (const key of required) {
    if (!form.get(key)) return new Response(`Chybí pole: ${fieldLabels[key]}`, { status: 400 });
  }

  if (env.RESEND_API_KEY) {
    const resend = new Resend(env.RESEND_API_KEY);
    const text = Object.entries(fieldLabels).map(([key, label]) => `${label}: ${form.get(key) || '-'}`).join('\n');
    await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL || 'Web <web@lukasvrbicky.cz>',
      to: env.CONTACT_TO_EMAIL || 'info@lukasvrbicky.cz',
      replyTo: String(form.get('email')),
      subject: `Nová poptávka: ${form.get('service') || 'web'}`,
      text
    });
  }

  return new Response('Děkuji, obvykle odpovídám do 24 hodin.', { status: 200 });
};

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

const emailSchema = z.string().trim().email().max(255);
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [message, setMessage] = useState('');
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (hp) { setStatus('ok'); return; }
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) { setStatus('error'); setMessage('Please enter a valid email address.'); return; }
    setStatus('loading');
    try {
      const { error } = await supabase.from('subscribers').insert({ email: parsed.data.toLowerCase() });
      if (error) { setStatus('error'); setMessage(error.code === '23505' ? "You're already on the list. Hala Madrid!" : 'Something went wrong. Please try again.'); return; }
      setStatus('ok');
    } catch { setStatus('error'); setMessage('Something went wrong. Please try again.'); }
  }
  return <section className="newsletter-band"><div className="site-container newsletter-layout"><div><span className="eyebrow"><Mail size={15} /> THE MADRIDISTA BRIEF</span><h2>Madrid, straight to your inbox.</h2><p>News, match stories and the moments that matter. No noise.</p></div><div>{status === 'ok' ? <p className="newsletter-success" role="status">You're in! Hala Madrid. ⚪🟡</p> : <form onSubmit={submit} noValidate><label className="sr-only" htmlFor="newsletter-email">Email address</label><input aria-hidden="true" tabIndex={-1} autoComplete="off" className="sr-only" name="website" value={hp} onChange={e => setHp(e.target.value)} /><div className="email-control"><input id="newsletter-email" type="email" required maxLength={255} placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /><Button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Joining…' : 'Count me in'}<ArrowUpRight size={16}/></Button></div><p className="signup-note">No spam. Unsubscribe any time.</p></form>}{status === 'error' && <p role="alert" className="mt-3 text-sm">{message}</p>}</div></div></section>;
}

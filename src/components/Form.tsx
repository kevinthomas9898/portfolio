import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

interface FormState {
  user_name: string;
  user_email: string;
  user_subject: string;
  message: string;
}

const Form: React.FC = () => {
  const [form, setForm] = useState<FormState>({ 
    user_name: '', 
    user_email: '', 
    user_subject: '', 
    message: '' 
  });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    emailjs.sendForm('service_chhi72j', 'template_11dftdc', formRef.current, '0vo29OdU1csAVeRSO')
      .then(() => { 
        alert('Email sent successfully!'); 
        setForm({ user_name: '', user_email: '', user_subject: '', message: '' }); 
      })
      .catch((err: any) => alert(err.text))
      .finally(() => setSending(false));
  };

  const inputClasses = "w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all duration-300";
  const labelClasses = "block text-xs font-black uppercase tracking-[0.2em] text-accent mb-2 ml-1";

  return (
    <div className="max-w-2xl mx-auto w-full glass-card p-8 md:p-12 animate-fade-in mt-12 bg-card">
      <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className={labelClasses}>Your Name</label>
            <input 
              type="text" 
              name="user_name" 
              value={form.user_name} 
              onChange={handleChange} 
              placeholder="Elon Musk" 
              className={inputClasses}
              required
            />
          </div>
          <div className="space-y-2">
            <label className={labelClasses}>Email Address</label>
            <input 
              type="email" 
              name="user_email" 
              value={form.user_email} 
              onChange={handleChange} 
              placeholder="elon@spacex.com" 
              className={inputClasses}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className={labelClasses}>Subject</label>
          <input 
            type="text" 
            name="user_subject" 
            value={form.user_subject} 
            onChange={handleChange} 
            placeholder="Project Collaboration" 
            className={inputClasses}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className={labelClasses}>Message</label>
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            rows={6} 
            placeholder="Tell me about your vision..." 
            className={`${inputClasses} resize-none`}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={sending}
          className="btn btn-primary w-full py-4 text-xs tracking-[0.3em]"
        >
          {sending ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
    </div>
  );
};

export default Form;

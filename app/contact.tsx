'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/RUBY-DANGOL',
      logo: '/icons/git.png',
      size: 40,
    },
    {
      name: 'Gmail',
      href: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpgRQKctwrnBzqgKMBwcdZgVdhnVvRxgqPSnLvzcjcGDqsDLQdJHmHrbfVJmNzkwvDcfdB',
      logo: '/icons/mail.png',
      size: 55, // bigger size
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rubina-dangol-maharjan-6036692aa/',
      logo: '/icons/linkedin.png',
      size: 40,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/_rubina_dangol_/',
      logo: '/icons/insta.png',
      size: 72, // biggest size
    },
  ];

  return (
    <div className="min-h-screen px-6 py-10 bg-white text-stone-600">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
      <p className="text-lg text-center mb-8">
        Feel free to reach out or leave your message below 
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Social Icons */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-lg font-semibold">Connect with me:</p>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label={social.name}
              >
                <Image
                  src={social.logo}
                  alt={social.name}
                  width={social.size}
                  height={social.size}
                  className="object-contain"
                />
                
              </a>
              
            ))}
            <div className="flex justify-center mb-6">
                  <img src="/dog.gif" alt="Cute Dog" className="w-80 h-auto" />
                </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-stone-600 text-white px-4 py-2 rounded-lg hover:bg-stone-500 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-rose-300 mt-2">Thanks! Your message has been sent 💌</p>
          )}
        </form>
      </div>
    </div>
  );
}

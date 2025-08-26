"use client"
import React, { useState } from 'react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Great_Vibes } from 'next/font/google';
import clsx from 'clsx';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Newsletter signup:', { firstName, email });
      setFirstName('');
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-footer py-2 px-4">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-2xl lg:text-6xl font-light text-background-color mt-3 max-w-4xl mx-auto text-center">
          Meet your new{' '}
          <span className={clsx(greatVibes.className, 'text-background-color')}>
            Sunday Ritual
          </span>
        </h2>
        
        {/* Subtitle */}
       <p className="w-full p-4 text-center text-background-color">
      Not your average newsletter - cozy up with Slow Brew Sunday every week for new intentions, productivity tips, and small shifts we can make together.
        </p>  

        
        {/* Newsletter Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6">
          <Input
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1"
            classNames={{
              input: "text-stone-700 placeholder:text-stone-400",
              inputWrapper: "bg-white/70 backdrop-blur-sm border-stone-300"
            }}
            size="lg"
            required
          />
          
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            classNames={{
             inputWrapper: "bg-white/70 backdrop-blur-sm border-white"
            }}
            size="lg"
            required
          />
          
          <Button
            type="submit"
            isLoading={isSubmitting}
            className="bg-stone-600 hover:bg-stone-700 text-white font-medium px-8 py-3 whitespace-nowrap"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'JOINING...' : 'JOIN 60K MINDFUL READERS'}
          </Button>
        </form>
        
        {/* Disclaimer */}
        <p className="text-stone-600 text-sm">
          *you'll also get added to our email list + can opt out any time
        </p>
    </footer>
  );
};
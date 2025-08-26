"use client"
import React, { useState } from 'react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

export const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your newsletter signup logic here
    try {
      // Example API call
      // await subscribeToNewsletter({ firstName, email });
      console.log('Newsletter signup:', { firstName, email });
      
      // Reset form on success
      setFirstName('');
      setEmail('');
      
      // You might want to show a success message here
    } catch (error) {
      console.error('Newsletter signup failed:', error);
      // Handle error state
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-amber-100 via-stone-200 to-amber-200 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-700 mb-6">
          Meet your new{' '}
          <span className="font-script italic text-stone-600">
            Sunday Ritual
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-stone-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Not your average newsletter - cozy up with Slow Brew Sunday every week for new intentions, 
          productivity tips, and small shifts we can make together.
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
              inputWrapper: "bg-white/70 backdrop-blur-sm border-stone-300 hover:border-stone-400 focus-within:border-stone-500"
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
              input: "text-stone-700 placeholder:text-stone-400",
              inputWrapper: "bg-white/70 backdrop-blur-sm border-stone-300 hover:border-stone-400 focus-within:border-stone-500"
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
        <p className="text-stone-500 text-sm">
          *you'll also get added to our email list + can opt out any time
        </p>
      </div>
    </footer>
  );
};
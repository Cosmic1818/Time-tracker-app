import React, { useState, useEffect } from 'react';
import { allQuotes } from '../data/quotes';
import { Quote } from '../types';

const QuoteDisplay: React.FC = () => {
  // Start with a random quote to avoid always seeing the first one on load
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * allQuotes.length));
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      // Wait for fade out animation to finish before changing the text
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % allQuotes.length);
        setIsFading(false);
      }, 500); // This duration should match the CSS transition duration
    }, 11000); // 11000ms = 11 seconds

    return () => clearInterval(interval);
  }, []);

  const quote = allQuotes[quoteIndex];

  if (!quote) return null;

  return (
    <div className={`text-center font-lora p-4 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-xl shadow-lg transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <blockquote className="italic">
        <p className="text-xl text-orange-950 dark:text-orange-100 text-glow mb-2">
            "{quote.text}"
        </p>
        <p className="text-base text-orange-900/80 dark:text-orange-200/80 mt-1">
            {quote.translation}
        </p>
      </blockquote>
      <cite className="block text-right mt-2 text-sm opacity-90 text-orange-900/80 dark:text-orange-200/80">
        - {quote.source}
      </cite>
    </div>
  );
};

export default QuoteDisplay;
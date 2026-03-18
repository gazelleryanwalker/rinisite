import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, Instagram, Quote, CheckCircle2, ExternalLink } from 'lucide-react';
import InstagramFeed from '../components/InstagramFeed';

const googleReviews = [
  { author: 'Jessica Thorne', rating: 5, text: 'Rini is the only person I trust with my eyebrows. She listens and always delivers exactly what I want.', date: '2 weeks ago', avatar: 'https://i.pravatar.cc/150?u=jessica' },
  { author: 'Michael Chen', rating: 5, text: 'Great service, very professional and clean. The threading was quick and virtually painless.', date: '1 month ago', avatar: 'https://i.pravatar.cc/150?u=michael' },
  { author: 'Elena Rodriguez', rating: 5, text: 'Best threading in Wellington! Rini has a magic touch. Highly recommend the henna tint too.', date: '3 months ago', avatar: 'https://i.pravatar.cc/150?u=elena' },
  { author: 'Sophia Williams', rating: 5, text: 'I have been coming here for a year and my brows have never looked better. Rini is a perfectionist.', date: '5 months ago', avatar: 'https://i.pravatar.cc/150?u=sophia' },
];

interface ReviewCardProps {
  review: typeof googleReviews[0];
  index: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ y, opacity }}
      className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-[#1a1a1a]/5 relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      <Quote className="absolute top-8 right-10 w-16 h-16 text-[#5A5A40]/5 group-hover:text-[#5A5A40]/10 transition-colors" />
      <div className="flex items-center space-x-4 mb-8">
        <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest">{review.author}</h4>
          <div className="flex text-[#5A5A40] mt-1">
            {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
          </div>
        </div>
      </div>
      <p className="text-2xl font-serif mb-8 leading-relaxed italic text-[#1a1a1a]/80">"{review.text}"</p>
      <span className="text-[10px] uppercase tracking-widest font-bold text-[#1a1a1a]/30">{review.date}</span>
    </motion.div>
  );
};

export default function Reviews() {
  return (
    <div className="py-24 px-4 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 bg-[#5A5A40]/10 rounded-full text-[#5A5A40] text-xs uppercase tracking-[0.3em] font-bold mb-8"
          >
            Testimonials
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            What our clients <br /><span className="italic text-[#5A5A40]">are saying</span>
          </h1>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex text-[#5A5A40] space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <p className="text-lg font-serif text-[#1a1a1a]/60">
              4.9/5 Average Rating · 200+ Happy Clients in Wellington
            </p>
          </div>
        </header>

        {/* Google Reviews Section */}
        <section className="mb-40">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-serif">Google Reviews</h2>
              <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center">
                Verified <CheckCircle2 className="w-3 h-3 ml-1" />
              </div>
            </div>
            <a href="https://www.google.com/search?q=Rini+Eyebrow+Threading+Wellington+reviews" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest font-bold border-b border-[#1a1a1a] pb-1 hover:text-[#5A5A40] hover:border-[#5A5A40] transition-all flex items-center">
              Write a Review <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {googleReviews.map((review, i) => (
              <ReviewCard key={i} review={review} index={i} />
            ))}
          </div>
        </section>

        {/* Instagram Testimonials Section */}
        <section>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center space-x-4 mb-4">
              <h2 className="text-4xl md:text-6xl font-serif">Instagram <span className="italic text-[#5A5A40]">Feed</span></h2>
              <Instagram className="w-8 h-8 text-[#E4405F]" />
            </div>
            <p className="text-xl font-serif text-[#1a1a1a]/60 max-w-2xl mb-8">
              Follow our journey and see real-time updates, client results, and beauty tips directly from our studio.
            </p>
            <a href="https://www.instagram.com/rini_eyebrow_threading/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest font-bold border-b border-[#1a1a1a] pb-1 hover:text-[#5A5A40] hover:border-[#5A5A40] transition-all">
              Follow @rini_eyebrow_threading
            </a>
          </div>

          <div className="max-w-3xl mx-auto">
            <InstagramFeed />
          </div>
        </section>
      </div>
    </div>
  );
}


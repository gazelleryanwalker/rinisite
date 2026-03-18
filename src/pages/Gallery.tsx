import { motion, AnimatePresence } from 'motion/react';
import InstagramFeed from '../components/InstagramFeed';
import { Instagram, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const images = [
  { url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800', category: 'Studio' },
  { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800', category: 'Threading' },
  { url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800', category: 'Henna' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', category: 'Results' },
  { url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800', category: 'Detail' },
  { url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800', category: 'Studio' },
  { url: 'https://images.unsplash.com/photo-1527799822344-429dfa855dd7?auto=format&fit=crop&q=80&w=800', category: 'Results' },
  { url: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=800', category: 'Detail' },
];

const categories = ['All', 'Threading', 'Henna', 'Results', 'Studio', 'Detail'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl font-serif mb-8">
            Visual <span className="italic text-[#5A5A40]">Journal</span>
          </h1>
          <p className="text-xl font-serif text-[#1a1a1a]/60 max-w-2xl">
            A curated collection of our work, capturing the precision and beauty of every treatment.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#5A5A40] text-white shadow-lg' 
                  : 'bg-white/50 text-[#1a1a1a]/40 hover:bg-white hover:text-[#1a1a1a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-32">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div 
                key={`${img.url}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-[2rem]"
              >
                <img 
                  src={img.url} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-[#f5f2ed] text-[#1a1a1a] px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Real Instagram Feed Section */}
        <section className="pt-24 border-t border-[#1a1a1a]/5">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                <h2 className="text-4xl md:text-6xl font-serif">Live from <span className="italic text-[#5A5A40]">Instagram</span></h2>
                <Instagram className="w-8 h-8 text-[#E4405F]" />
              </div>
              <p className="text-xl font-serif text-[#1a1a1a]/60 max-w-xl">
                See our latest work, behind-the-scenes moments, and real client results updated daily.
              </p>
            </div>
            <a 
              href="https://www.instagram.com/rini_eyebrow_threading/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center bg-[#1a1a1a] text-[#f5f2ed] px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#5A5A40] transition-all duration-500"
            >
              Follow @rini_eyebrow_threading
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
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

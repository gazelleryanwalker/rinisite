import { motion } from 'motion/react';
import { ArrowRight, Star, Instagram, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1920" 
            alt="Beauty Salon" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f2ed] via-[#f5f2ed]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-4 mb-8">
              <div className="h-[1px] w-12 bg-[#5A5A40]" />
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#5A5A40]">Wellington's Premier Studio</span>
            </div>
            <h1 className="text-8xl md:text-[12rem] font-serif leading-[0.85] tracking-tighter mb-12">
              Threading <br />
              <span className="italic text-[#5A5A40] ml-12 md:ml-24">by Rini</span>
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-[#1a1a1a]/70 mb-16 max-w-2xl leading-relaxed italic">
              "Where precision meets passion. We don't just shape brows; we define your natural elegance."
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link 
                to="/contact" 
                className="bg-[#1a1a1a] text-[#f5f2ed] px-12 py-6 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#5A5A40] transition-all duration-500 flex items-center justify-center group shadow-2xl shadow-black/10"
              >
                Book Your Experience
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link 
                to="/gallery" 
                className="bg-white/50 backdrop-blur-sm border border-[#1a1a1a]/10 px-12 py-6 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#1a1a1a] hover:text-[#f5f2ed] transition-all duration-500 flex items-center justify-center"
              >
                Explore Gallery
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: [0, 5, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-20 w-80 h-[500px] rounded-full border border-[#5A5A40]/20 overflow-hidden p-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800" 
              alt="Artistry" 
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4 bg-white border-y border-[#1a1a1a]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" 
                alt="Rini at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#f5f2ed] rounded-full flex items-center justify-center p-8 border border-[#5A5A40]/10 shadow-xl">
              <p className="text-center font-serif italic text-lg leading-tight">
                "Precision is the difference between good and exceptional."
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#5A5A40]">Our Philosophy</h2>
              <h3 className="text-5xl md:text-7xl font-serif tracking-tight leading-none">The Art of <br /><span className="italic">Subtle Enhancement</span></h3>
            </div>
            <p className="text-xl font-serif text-[#1a1a1a]/60 leading-relaxed">
              At Threading by Rini, we believe that beauty lies in the details. Our approach combines traditional techniques with modern aesthetics to create looks that are uniquely yours. Whether it's the perfect arch or a radiant facial glow, we treat every service as a masterpiece.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-3xl font-serif mb-2">15+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-[#1a1a1a]/40">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif mb-2">10k+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-[#1a1a1a]/40">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services / Specializations */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 bg-[#5A5A40]/10 rounded-full text-[#5A5A40] text-[10px] uppercase tracking-[0.3em] font-bold mb-6"
              >
                Our Specializations
              </motion.div>
              <h3 className="text-5xl md:text-8xl font-serif tracking-tight leading-none">Signature <br /><span className="italic">Treatments</span></h3>
            </div>
            <Link to="/services" className="group flex items-center text-sm uppercase tracking-widest font-bold">
              <span className="border-b border-[#1a1a1a] pb-1 group-hover:text-[#5A5A40] group-hover:border-[#5A5A40] transition-all">View All Services</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Eyebrow Threading', 
                desc: 'The gold standard of brow shaping. Using a thin cotton thread to pull hair from the root with surgical precision.', 
                img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
                tag: 'Precision'
              },
              { 
                title: 'Henna Tinting', 
                desc: 'A natural alternative to traditional tinting. Stains the skin and hair for a fuller, more defined brow look.', 
                img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
                tag: 'Definition'
              },
              { 
                title: 'Full Face Threading', 
                desc: 'Exfoliate and smooth your entire face. Removes vellus hair (peach fuzz) for a flawless makeup application.', 
                img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
                tag: 'Radiance'
              },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[3rem] mb-8 relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm">
                      {service.tag}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-serif group-hover:text-[#5A5A40] transition-colors">{service.title}</h4>
                  <p className="text-[#1a1a1a]/60 font-serif leading-relaxed text-lg">{service.desc}</p>
                  <Link to="/contact" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#5A5A40] group-hover:translate-x-2 transition-transform">
                    Book Now <ArrowRight className="ml-2 w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-24 px-4 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#5A5A40] text-[#5A5A40]" />)}
          </div>
          <blockquote className="text-3xl md:text-5xl font-serif leading-tight mb-12 max-w-4xl mx-auto">
            "Rini is truly an artist. I've never had my brows look so perfect and natural. The attention to detail is unmatched in Wellington."
          </blockquote>
          <cite className="text-sm uppercase tracking-widest font-bold not-italic">— Sarah M., Wellington Resident</cite>
          <div className="mt-16">
            <a href="https://www.instagram.com/rini_eyebrow_threading/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#5A5A40] hover:text-[#1a1a1a] transition-colors">
              <Instagram className="w-5 h-5 mr-2" />
              <span className="text-sm uppercase tracking-widest font-bold">See more on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

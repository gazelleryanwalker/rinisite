import { Scissors, Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#f5f2ed] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Scissors className="w-6 h-6 text-[#5A5A40]" />
            <span className="text-2xl font-serif tracking-tight">
              Threading <span className="italic">by Rini</span>
            </span>
          </div>
          <p className="text-[#f5f2ed]/60 font-serif leading-relaxed">
            Elevating natural beauty through precision threading and artisanal care in the heart of Wellington.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/rini_eyebrow_threading/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/RiniEyebrowThreading/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#5A5A40]">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[#5A5A40]" />
              <span className="text-[#f5f2ed]/60">Wellington, Florida</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#5A5A40]" />
              <span className="text-[#f5f2ed]/60">(561) 555-0123</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#5A5A40]">Hours</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <Clock className="w-4 h-4 mt-0.5 text-[#5A5A40]" />
              <div className="text-[#f5f2ed]/60">
                <p>Mon - Fri: 9am - 7pm</p>
                <p>Sat: 10am - 6pm</p>
                <p>Sun: Closed</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#5A5A40]">Newsletter</h4>
          <p className="text-sm text-[#f5f2ed]/60">Join our list for beauty tips and special offers.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border-b border-[#f5f2ed]/20 py-2 text-sm focus:outline-none focus:border-[#5A5A40] w-full"
            />
            <button className="ml-4 text-xs uppercase tracking-widest font-bold hover:text-[#5A5A40]">Join</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#f5f2ed]/10 text-center text-[10px] uppercase tracking-widest text-[#f5f2ed]/40">
        © 2026 Threading by Rini. All rights reserved.
      </div>
    </footer>
  );
}

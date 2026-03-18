import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, CheckCircle2, X } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { db, collection, addDoc, Timestamp, handleFirestoreError, OperationType } from '../firebase';
import { useAuth } from '../AuthContext';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY' && API_KEY !== 'MY_GOOGLE_MAPS_KEY';

// Wellington, FL coordinates (approximate)
const CENTER = { lat: 26.6617, lng: -80.2414 };

export default function Contact() {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    service: 'Threading',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        uid: user?.uid || null,
        status: 'pending',
        createdAt: Timestamp.now()
      });
      setShowModal(true);
      setFormData({
        name: user?.displayName || '',
        email: user?.email || '',
        service: 'Threading',
        message: ''
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'bookings');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl font-serif mb-8">
            Get in <span className="italic text-[#5A5A40]">Touch</span>
          </h1>
          <p className="text-xl font-serif text-[#1a1a1a]/60 max-w-2xl">
            Located in the heart of Wellington. We look forward to welcoming you to our studio.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info & Form */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#5A5A40]">Address</h3>
                <p className="text-xl font-serif leading-relaxed">
                  123 Beauty Lane,<br />
                  Wellington, FL 33414
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#5A5A40]">Contact</h3>
                <p className="text-xl font-serif leading-relaxed">
                  (561) 555-0123<br />
                  hello@threadingbyrini.com
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#5A5A40]">Hours</h3>
                <div className="text-xl font-serif leading-relaxed">
                  <p>Mon - Fri: 9am - 7pm</p>
                  <p>Sat: 10am - 6pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#5A5A40]">Social</h3>
                <div className="flex space-x-6">
                  <a href="https://www.instagram.com/rini_eyebrow_threading/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] transition-colors"><Instagram className="w-6 h-6" /></a>
                  <a href="https://www.facebook.com/rini.eyebrow.threading" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] transition-colors"><Facebook className="w-6 h-6" /></a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 pt-8 border-t border-[#1a1a1a]/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 focus:outline-none focus:border-[#5A5A40] font-serif" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 focus:outline-none focus:border-[#5A5A40] font-serif" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Service</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 focus:outline-none focus:border-[#5A5A40] font-serif"
                >
                  <option value="Threading">Threading</option>
                  <option value="Henna">Henna</option>
                  <option value="Tinting">Tinting</option>
                  <option value="Waxing">Waxing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Message</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 focus:outline-none focus:border-[#5A5A40] font-serif resize-none" 
                />
              </div>
              <button 
                disabled={isSubmitting}
                className="bg-[#1a1a1a] text-[#f5f2ed] px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#5A5A40] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-[3rem] overflow-hidden border border-[#1a1a1a]/10 relative">
            {!hasValidKey ? (
              <div className="absolute inset-0 flex items-center justify-center bg-[#f5f2ed] p-12 text-center">
                <div className="max-w-sm">
                  <MapPin className="w-12 h-12 text-[#5A5A40] mx-auto mb-6" />
                  <h3 className="text-2xl font-serif mb-4">Google Maps API Key Required</h3>
                  <p className="text-sm text-[#1a1a1a]/60 mb-8">
                    To see our location on the map, please add your Google Maps API key in the settings.
                  </p>
                  <div className="text-left bg-white/50 p-6 rounded-2xl text-xs space-y-2">
                    <p>1. Open <strong>Settings</strong> (⚙️ icon)</p>
                    <p>2. Go to <strong>Secrets</strong></p>
                    <p>3. Add <code>GOOGLE_MAPS_PLATFORM_KEY</code></p>
                  </div>
                </div>
              </div>
            ) : (
              <APIProvider apiKey={API_KEY} version="weekly">
                <Map
                  defaultCenter={CENTER}
                  defaultZoom={14}
                  mapId="DEMO_MAP_ID"
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                  style={{ width: '100%', height: '100%' }}
                >
                  <AdvancedMarker position={CENTER}>
                    <Pin background="#5A5A40" glyphColor="#fff" borderColor="#5A5A40" />
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-[#1a1a1a]/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-[#f5f2ed] rounded-[2rem] p-12 max-w-lg w-full shadow-2xl text-center"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2 hover:bg-[#1a1a1a]/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <div className="w-20 h-20 bg-[#5A5A40]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-[#5A5A40]" />
              </div>
              <h3 className="text-4xl font-serif mb-4">Message Sent</h3>
              <p className="text-lg font-serif text-[#1a1a1a]/60 mb-8">
                Thank you for reaching out! We've received your booking request and will get back to you shortly to confirm your appointment.
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-[#1a1a1a] text-[#f5f2ed] py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#5A5A40] transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

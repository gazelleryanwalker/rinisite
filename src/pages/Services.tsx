import { motion } from 'motion/react';
import { Scissors } from 'lucide-react';

const services = [
  {
    category: 'Threading',
    items: [
      { name: 'Eyebrow Shaping', price: '$15', desc: 'Precision mapping and threading for your perfect arch.' },
      { name: 'Upper Lip', price: '$8', desc: 'Quick and gentle removal for a smooth finish.' },
      { name: 'Chin', price: '$10', desc: 'Effective removal of unwanted facial hair.' },
      { name: 'Full Face', price: '$45', desc: 'Complete facial threading including brows, lip, chin, and sides.' },
      { name: 'Neck', price: '$12', desc: 'Clean up the neck area for a polished look.' },
    ]
  },
  {
    category: 'Tinting',
    items: [
      { name: 'Eyebrow Tint', price: '$20', desc: 'Semi-permanent dye to enhance and define your brows.' },
      { name: 'Henna Brows', price: '$35', desc: 'Natural henna staining for skin and hair, lasting up to 6 weeks.' },
      { name: 'Lash Tint', price: '$25', desc: 'Deepen your natural lashes for a mascara-free look.' },
    ]
  },
  {
    category: 'Lash Services',
    items: [
      { name: 'Lash Lift', price: '$65', desc: 'Curling your natural lashes from the root for an open-eye effect.' },
      { name: 'Lash Lift & Tint', price: '$80', desc: 'The ultimate natural lash enhancement combo.' },
    ]
  }
];

export default function Services() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif mb-8"
          >
            The <span className="italic text-[#5A5A40]">Menu</span>
          </motion.h1>
          <p className="text-xl font-serif text-[#1a1a1a]/60 max-w-2xl mx-auto">
            Meticulously crafted treatments designed to highlight your natural features with precision and care.
          </p>
        </header>

        <div className="space-y-32">
          {services.map((section, idx) => (
            <section key={idx}>
              <div className="flex items-center space-x-4 mb-12">
                <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#5A5A40]">{section.category}</h2>
                <div className="h-[1px] flex-1 bg-[#1a1a1a]/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {section.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-2xl font-serif group-hover:text-[#5A5A40] transition-colors">{item.name}</h3>
                      <span className="text-lg font-serif text-[#5A5A40]">{item.price}</span>
                    </div>
                    <p className="text-[#1a1a1a]/60 font-serif leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-32 p-12 bg-[#1a1a1a] text-[#f5f2ed] rounded-[3rem] text-center">
          <Scissors className="w-8 h-8 text-[#5A5A40] mx-auto mb-6" />
          <h3 className="text-3xl font-serif mb-4">Ready for your transformation?</h3>
          <p className="text-[#f5f2ed]/60 font-serif mb-8 max-w-xl mx-auto">
            Appointments are recommended to ensure the best experience. Walk-ins are welcome based on availability.
          </p>
          <button className="bg-[#f5f2ed] text-[#1a1a1a] px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#5A5A40] hover:text-white transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

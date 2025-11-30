import { motion } from 'motion/react';
import { Wallet, ShoppingCart, Smartphone, Zap } from 'lucide-react';

export function IntegrationDiagram() {
  return (
    <section className="relative py-32 px-6 bg-[#F2F0E6] border-t-4 border-b-4 border-[#2B2220]">
      {/* Horizontal separator line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E97F25]" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 mb-8 bg-[#FFC857] border-2 border-[#2B2220]"
            style={{ boxShadow: '4px 4px 0px #2B2220' }}
          >
            <span className="text-xs tracking-widest uppercase text-[#2B2220]">
              SEAMLESS INTEGRATION
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl tracking-tighter mb-6 text-[#2B2220]"
          >
            WORKS WITH YOUR{' '}
            <span className="text-[#E97F25]">EXISTING STACK</span>
          </motion.h2>
          
          {/* Underline stripes */}
          <div className="flex justify-center gap-2 max-w-xl mx-auto mb-8">
            <div className="h-1 w-24 bg-[#FFC857]" />
            <div className="h-1 w-24 bg-[#E97F25]" />
            <div className="h-1 w-24 bg-[#C83E36]" />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#333333] max-w-2xl mx-auto"
          >
            Drop-in replacement for traditional payment processors. No infrastructure changes required.
          </motion.p>
        </div>

        {/* Center - CNDL Hub */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-xs mx-auto mb-16"
        >
          <div 
            className="relative p-8 bg-white border-4 border-[#2B2220]"
            style={{ boxShadow: '8px 8px 0px #2B2220' }}
          >
            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-3 border-t-3 border-[#E97F25]" />
            <div className="absolute top-2 right-2 w-6 h-6 border-r-3 border-t-3 border-[#E97F25]" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-3 border-b-3 border-[#E97F25]" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-3 border-b-3 border-[#E97F25]" />
            
            <div className="relative text-center">
              <div className="w-12 h-12 bg-[#FFC857] rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-[#2B2220]">
                <Zap className="w-6 h-6 text-[#2B2220]" fill="#2B2220" />
              </div>
              <div className="text-3xl tracking-tighter mb-2 text-[#2B2220]">
                CANDLE
              </div>
              <div className="text-xs text-[#333333] tracking-wider uppercase">Payment Rail</div>
            </div>
          </div>
        </motion.div>

        {/* Integration Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {[
            { icon: Wallet, label: 'STRIPE', color: '#FFC857' },
            { icon: ShoppingCart, label: 'SQUARE', color: '#E97F25' },
            { icon: Smartphone, label: 'POS TERMINALS', color: '#C83E36' },
            { icon: Wallet, label: 'PAYMENT APIS', color: '#FFC857' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white border-3 border-[#2B2220]"
              style={{ boxShadow: '4px 4px 0px #2B2220' }}
            >
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-[#2B2220]" />
              </div>
              <div className="text-center text-xs tracking-wider uppercase text-[#2B2220]">
                {item.label}
              </div>
              {/* Color accent */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Features below diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: 'PLUG & PLAY', desc: 'Single API integration across all platforms', color: '#FFC857' },
            { title: 'UNIVERSAL SUPPORT', desc: 'Compatible with legacy payment infrastructure', color: '#E97F25' },
            { title: 'REAL-TIME SYNC', desc: 'Instant reconciliation and reporting', color: '#C83E36' }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="relative p-6 bg-[#FFFDF5] border-2 border-[#333333]"
            >
              {/* Top accent bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: feature.color }}
              />
              
              <div className="text-sm text-[#2B2220] mb-2 tracking-widest uppercase">
                {feature.title}
              </div>
              <div className="text-[#333333] text-sm">{feature.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C83E36]" />
    </section>
  );
}

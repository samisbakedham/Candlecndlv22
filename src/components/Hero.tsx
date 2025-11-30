import { motion } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 pt-32">
      {/* Angled sunset stripes background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-[#FFC857] via-[#E97F25] to-[#C83E36] transform -skew-y-3 origin-top-left" style={{ top: '20%' }} />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-[#C83E36] via-[#E97F25] to-[#FFC857] transform skew-y-2 origin-top-right" style={{ top: '60%' }} />
      </div>

      {/* Corner bracket decorations */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-4 border-t-4 border-[#2B2220]" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-4 border-t-4 border-[#2B2220]" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-l-4 border-b-4 border-[#2B2220]" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r-4 border-b-4 border-[#2B2220]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Vintage badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-[#FFC857] border-2 border-[#2B2220]"
          style={{ boxShadow: '4px 4px 0px #2B2220' }}
        >
          <Zap className="w-4 h-4 text-[#2B2220]" fill="#2B2220" />
          <span className="text-xs tracking-widest uppercase text-[#2B2220]">
            NEXT-GENERATION PAYMENT RAIL
          </span>
        </motion.div>

        {/* Main heading - bold, blocky */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 
            className="text-8xl md:text-[12rem] tracking-tighter text-[#2B2220] leading-none mb-4"
            style={{ 
              letterSpacing: '-0.05em',
              textShadow: '6px 6px 0px rgba(233, 127, 37, 0.3)'
            }}
          >
            CANDLE
          </h1>
          
          {/* Underline accent stripes */}
          <div className="flex justify-center gap-1 max-w-2xl mx-auto">
            <div className="h-2 flex-1 bg-[#FFC857]" />
            <div className="h-2 flex-1 bg-[#E97F25]" />
            <div className="h-2 flex-1 bg-[#C83E36]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div 
            className="inline-block text-3xl md:text-5xl tracking-[0.3em] text-[#E97F25] px-8 py-3 border-3 border-[#2B2220] bg-[#FFFDF5]"
            style={{ 
              fontFamily: 'monospace',
              boxShadow: '6px 6px 0px #2B2220'
            }}
          >
            CNDL
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-[#333333] mx-auto mb-12 leading-relaxed max-w-3xl"
        >
          The high-speed blockchain payment infrastructure built to rival{' '}
          <span className="text-[#E97F25] font-bold">VISA</span> and{' '}
          <span className="text-[#C83E36] font-bold">MASTERCARD</span>.
          <br />
          Lightning-fast settlements. Zero friction. Built for tomorrow.
        </motion.p>

        {/* CTA Buttons - hard shadows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.button 
            className="px-10 py-5 bg-[#E97F25] text-white border-2 border-[#2B2220] uppercase tracking-widest"
            style={{ boxShadow: '6px 6px 0px #2B2220' }}
            whileHover={{ 
              x: 2,
              y: 2,
              boxShadow: '4px 4px 0px #2B2220',
              transition: { duration: 0.1 }
            }}
            whileTap={{ 
              x: 6,
              y: 6,
              boxShadow: '0px 0px 0px #2B2220'
            }}
          >
            <span className="flex items-center gap-2">
              GET STARTED
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
          
          <motion.button 
            className="px-10 py-5 bg-transparent text-[#2B2220] border-2 border-[#2B2220] uppercase tracking-widest"
            whileHover={{ 
              backgroundColor: '#FFFDF5',
              transition: { duration: 0.2 }
            }}
          >
            DOCUMENTATION
          </motion.button>
        </motion.div>

        {/* Stats grid - technical manual style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            { value: '<100MS', label: 'TRANSACTION TIME', color: '#FFC857' },
            { value: '$0', label: 'NETWORK FEES', color: '#E97F25' },
            { value: '1M+', label: 'TPS CAPACITY', color: '#C83E36' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="relative p-8 bg-white border-3 border-[#2B2220]"
              style={{ boxShadow: '6px 6px 0px #2B2220' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              {/* Color accent bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-2"
                style={{ backgroundColor: stat.color }}
              />
              
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#333333]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#333333]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#333333]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#333333]" />
              
              <div className="text-5xl md:text-6xl text-[#2B2220] tracking-tight mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-[#333333] tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

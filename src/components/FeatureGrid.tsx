import { motion } from 'motion/react';
import { DollarSign, Zap, Shield, Globe, TrendingUp, Lock } from 'lucide-react';

export function FeatureGrid() {
  const features = [
    {
      icon: DollarSign,
      title: 'ZERO FEES',
      description: 'No transaction fees, no monthly fees, no hidden costs. Keep 100% of your revenue.',
      color: '#FFC857'
    },
    {
      icon: Zap,
      title: 'INSTANT SETTLEMENT',
      description: 'Funds settle in under 100ms. No more waiting days for payment processing.',
      color: '#E97F25'
    },
    {
      icon: Shield,
      title: 'BANK-GRADE SECURITY',
      description: 'Military-grade encryption and multi-layer fraud protection built into every transaction.',
      color: '#C83E36'
    },
    {
      icon: Globe,
      title: 'GLOBAL REACH',
      description: 'Accept payments from anywhere in the world with automatic currency conversion.',
      color: '#FFC857'
    },
    {
      icon: TrendingUp,
      title: 'INFINITE SCALABILITY',
      description: 'Handle millions of transactions per second without performance degradation.',
      color: '#E97F25'
    },
    {
      icon: Lock,
      title: 'IMMUTABLE RECORDS',
      description: 'Blockchain-verified transaction history that can never be altered or disputed.',
      color: '#C83E36'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#FDFBF7]">
      {/* Angled stripes decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-10">
        <div className="absolute inset-0 flex flex-col gap-4 transform rotate-45">
          <div className="h-4 bg-[#FFC857]" />
          <div className="h-4 bg-[#E97F25]" />
          <div className="h-4 bg-[#C83E36]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 mb-8 bg-[#E97F25] border-2 border-[#2B2220] text-white"
            style={{ boxShadow: '4px 4px 0px #2B2220' }}
          >
            <span className="text-xs tracking-widest uppercase">
              REVOLUTIONARY FEATURES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl tracking-tighter mb-6 text-[#2B2220]"
          >
            BUILT FOR THE{' '}
            <span className="text-[#E97F25]">FUTURE</span>
          </motion.h2>
          
          {/* Underline stripes */}
          <div className="flex justify-center gap-2 max-w-lg mx-auto mb-8">
            <div className="h-1 w-32 bg-[#FFC857]" />
            <div className="h-1 w-32 bg-[#E97F25]" />
            <div className="h-1 w-32 bg-[#C83E36]" />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#333333] max-w-3xl mx-auto"
          >
            Traditional payment processors charge you fees and make you wait. We don't. 
            Experience the next generation of financial infrastructure.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div 
                className="relative p-8 bg-white border-3 border-[#2B2220] h-full"
                style={{ boxShadow: '6px 6px 0px #2B2220' }}
              >
                {/* Top color accent bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ backgroundColor: feature.color }}
                />
                
                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-[#333333]" />
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-[#333333]" />

                {/* Icon */}
                <div 
                  className="inline-flex p-3 mb-6 border-2 border-[#2B2220]"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-6 h-6 text-[#2B2220]" />
                </div>

                {/* Content */}
                <h3 className="text-xl tracking-tight mb-4 text-[#2B2220] uppercase">
                  {feature.title}
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Bottom corner brackets */}
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-[#333333]" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-[#333333]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div 
            className="inline-block px-8 py-4 bg-[#FFFDF5] border-2 border-[#2B2220]"
            style={{ boxShadow: '4px 4px 0px #2B2220' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[#FFC857]" />
              <span className="tracking-wider uppercase text-xs text-[#2B2220]">
                No Setup Fees • No Monthly Minimums • No Contract Required
              </span>
              <div className="w-2 h-2 bg-[#C83E36]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

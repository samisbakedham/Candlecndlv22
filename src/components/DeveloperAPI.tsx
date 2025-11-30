import { motion } from 'motion/react';
import { Code2, Terminal, Braces, FileJson } from 'lucide-react';
import { useState } from 'react';

export function DeveloperAPI() {
  const [activeTab, setActiveTab] = useState('initialize');

  const codeExamples = {
    initialize: `import { Candle } from '@candle/sdk';

// Initialize the Candle client
const candle = new Candle({
  apiKey: process.env.CANDLE_API_KEY,
  network: 'mainnet'
});

// Ready to process payments
console.log('Candle initialized');`,
    
    payment: `// Create a payment intent
const payment = await candle.payments.create({
  amount: 99.99,
  currency: 'USD',
  customer: 'cus_abc123',
  metadata: {
    orderId: 'order_xyz789'
  }
});

// Settlement happens instantly
console.log(payment.status); // 'settled'`,
    
    webhook: `// Handle webhook events
app.post('/webhooks/candle', async (req, res) => {
  const event = candle.webhooks.verify(
    req.body,
    req.headers['candle-signature']
  );

  switch (event.type) {
    case 'payment.settled':
      // Process instant settlement
      await fulfillOrder(event.data);
      break;
  }

  res.json({ received: true });
});`
  };

  const features = [
    { icon: Code2, label: 'REST & GRAPHQL APIS', desc: 'Choose your interface' },
    { icon: Terminal, label: 'CLI TOOLS', desc: 'Manage from terminal' },
    { icon: Braces, label: 'SDKS FOR ALL LANGUAGES', desc: 'Node, Python, Go, Ruby' },
    { icon: FileJson, label: 'WEBSOCKET STREAMS', desc: 'Real-time updates' }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#F2F0E6] border-t-4 border-[#2B2220]">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFC857]" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 mb-8 bg-[#C83E36] border-2 border-[#2B2220] text-white"
            style={{ boxShadow: '4px 4px 0px #2B2220' }}
          >
            <span className="text-xs tracking-widest uppercase">
              DEVELOPER EXPERIENCE
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl tracking-tighter mb-6 text-[#2B2220]"
          >
            BUILT BY DEVELOPERS,{' '}
            <span className="text-[#E97F25]">FOR DEVELOPERS</span>
          </motion.h2>
          
          {/* Underline */}
          <div className="flex justify-center gap-2 max-w-2xl mx-auto mb-8">
            <div className="h-1 w-40 bg-[#FFC857]" />
            <div className="h-1 w-40 bg-[#E97F25]" />
            <div className="h-1 w-40 bg-[#C83E36]" />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#333333] max-w-3xl mx-auto"
          >
            Integrate Candle in minutes with our intuitive API. Comprehensive documentation, powerful SDKs, and world-class support.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Editor container */}
            <div 
              className="relative overflow-hidden bg-[#2B2220] border-4 border-[#2B2220]"
              style={{ boxShadow: '8px 8px 0px #2B2220' }}
            >
              {/* Editor header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#1a1514] border-b-2 border-[#E97F25]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#C83E36] border border-[#2B2220]" />
                  <div className="w-3 h-3 bg-[#FFC857] border border-[#2B2220]" />
                  <div className="w-3 h-3 bg-[#E97F25] border border-[#2B2220]" />
                </div>
                <div className="text-xs text-[#FFC857] tracking-wider" style={{ fontFamily: 'monospace' }}>
                  CANDLE-INTEGRATION.TS
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-0 px-6 pt-4 bg-[#1a1514]">
                {[
                  { key: 'initialize', label: 'INITIALIZE' },
                  { key: 'payment', label: 'PAYMENT' },
                  { key: 'webhook', label: 'WEBHOOK' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-4 py-2 text-xs tracking-widest transition-all border-2 ${
                      activeTab === tab.key
                        ? 'bg-[#FFC857] text-[#2B2220] border-[#2B2220]'
                        : 'bg-transparent text-[#FFC857] border-[#333333] hover:border-[#FFC857]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Code display */}
              <div className="p-6 overflow-x-auto bg-[#2B2220]">
                <pre className="text-sm leading-relaxed">
                  <code className="text-[#F2F0E6]" style={{ fontFamily: 'monospace' }}>
                    {codeExamples[activeTab as keyof typeof codeExamples]}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Features & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* API Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white border-2 border-[#2B2220]"
                >
                  <feature.icon className="w-8 h-8 text-[#E97F25] mb-3" />
                  <div className="text-xs uppercase tracking-wider mb-1 text-[#2B2220]">{feature.label}</div>
                  <div className="text-xs text-[#333333]">{feature.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div 
              className="p-8 bg-[#FFFDF5] border-3 border-[#2B2220]"
              style={{ boxShadow: '6px 6px 0px #2B2220' }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 flex">
                <div className="flex-1 h-1 bg-[#FFC857]" />
                <div className="flex-1 h-1 bg-[#E97F25]" />
                <div className="flex-1 h-1 bg-[#C83E36]" />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl text-[#E97F25] mb-2 tracking-tight">
                    99.99%
                  </div>
                  <div className="text-xs text-[#333333] tracking-wider uppercase">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-4xl text-[#E97F25] mb-2 tracking-tight">
                    24/7
                  </div>
                  <div className="text-xs text-[#333333] tracking-wider uppercase">Dev Support</div>
                </div>
                <div>
                  <div className="text-4xl text-[#E97F25] mb-2 tracking-tight">
                    {'<'}50MS
                  </div>
                  <div className="text-xs text-[#333333] tracking-wider uppercase">API Latency</div>
                </div>
                <div>
                  <div className="text-4xl text-[#E97F25] mb-2 tracking-tight">
                    100%
                  </div>
                  <div className="text-xs text-[#333333] tracking-wider uppercase">Documented</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div 
              className="p-8 bg-[#E97F25] border-3 border-[#2B2220] text-white"
              style={{ boxShadow: '6px 6px 0px #2B2220' }}
            >
              <h3 className="text-2xl tracking-tight mb-3 uppercase">START BUILDING TODAY</h3>
              <p className="text-sm mb-6 text-white/90">
                Get your API keys and start processing payments in minutes. No approval process, no waiting.
              </p>
              <button 
                className="w-full px-6 py-3 bg-[#FFC857] text-[#2B2220] border-2 border-[#2B2220] tracking-wider uppercase text-sm hover:bg-white transition-colors"
              >
                GET API KEYS
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

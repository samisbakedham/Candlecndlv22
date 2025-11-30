import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const links = {
    product: ['Features', 'Pricing', 'Security', 'Roadmap'],
    developers: ['Documentation', 'API Reference', 'SDKs', 'Status'],
    company: ['About', 'Blog', 'Careers', 'Press Kit'],
    legal: ['Privacy', 'Terms', 'Compliance', 'Licenses']
  };

  return (
    <footer className="relative py-20 px-6 bg-[#FDFBF7] border-t-4 border-[#2B2220]">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 flex">
        <div className="flex-1 h-1 bg-[#FFC857]" />
        <div className="flex-1 h-1 bg-[#E97F25]" />
        <div className="flex-1 h-1 bg-[#C83E36]" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-4xl tracking-tighter mb-4 text-[#2B2220]">
              CANDLE
            </div>
            {/* Brand underline */}
            <div className="flex gap-1 w-32 mb-4">
              <div className="h-1 flex-1 bg-[#FFC857]" />
              <div className="h-1 flex-1 bg-[#E97F25]" />
              <div className="h-1 flex-1 bg-[#C83E36]" />
            </div>
            <div className="text-sm text-[#333333] mb-6 max-w-xs">
              The next-generation blockchain payment rail. Zero fees, instant settlement, infinite scale.
            </div>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border-2 border-[#2B2220] flex items-center justify-center hover:bg-[#FFC857] transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#2B2220]" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-xs tracking-widest uppercase text-[#E97F25] mb-4 border-b-2 border-[#E97F25] pb-2">
                {category}
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#333333] hover:text-[#2B2220] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t-2 border-[#2B2220] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[#333333]">
            © 2025 Candle Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-[#E97F25] border border-[#2B2220]" />
            <span className="text-[#2B2220] uppercase tracking-wider">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

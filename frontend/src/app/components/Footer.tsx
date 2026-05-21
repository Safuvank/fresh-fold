import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 md:px-12 lg:px-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="text-white text-2xl font-black tracking-tight flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              FreshFold<span className="text-blue-500">.</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Smart laundry and dry cleaning services delivered right to your door. Experience premium clothing care with the click of a button.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4 pt-2">
              {['twitter', 'facebook', 'instagram'].map((platform) => (
                <a 
                  key={platform} 
                  href={`https://${platform}.com`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center text-slate-300 text-xs uppercase font-bold tracking-wider"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#pricing" className="hover:text-white transition">Wash &amp; Fold</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition">Dry Cleaning</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition">Hang Dry Care</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition">Leather &amp; Bedding</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition">Our Story</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/press" className="hover:text-white transition">Press</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter Form */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Stay Updated</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sign up to get notified when we expand our delivery zones or offer limited promos.
            </p>
            <form className="flex flex-col gap-2 pt-1">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border border-slate-700/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-xl transition shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar Area */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Rinse Clone Project. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-slate-400 transition">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
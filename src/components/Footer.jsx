import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Sun, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { SITE } from '../data/siteData';

const Footer = () => (
    <footer className="bg-secondary text-gray-400 pt-24 pb-12 px-6 rounded-t-[3rem] mt-auto relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-8 col-span-1 lg:col-span-1">
                <Link to="/" className="flex items-center gap-2">
                    <Sun className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-black text-white tracking-tighter">
                        Solar<span className="text-primary italic">Pro</span>
                    </span>
                </Link>
                <p className="text-gray-500 leading-relaxed text-sm">
                    {SITE.city}'s most trusted solar partner since 2012. We empower homes, businesses, and farms with clean, green, and affordable solar energy.
                </p>
                <div className="flex gap-4">
                    {[
                        { icon: Facebook, href: SITE.facebook },
                        { icon: Instagram, href: SITE.instagram },
                        { icon: Youtube, href: SITE.youtube }
                    ].map((social, i) => (
                        <a 
                            key={i} 
                            href={social.href} 
                            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
            
            <div className="space-y-8">
                <h4 className="text-white text-lg font-black uppercase tracking-widest">Quick Navigation</h4>
                <div className="flex flex-col gap-4">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'About Us', path: '/about' },
                        { name: 'Our Services', path: '/services' },
                        { name: 'Latest Projects', path: '/projects' },
                        { name: 'Contact Support', path: '/contact' }
                    ].map((link, i) => (
                        <Link key={i} to={link.path} className="hover:text-primary transition-colors flex items-center justify-between group py-1 border-b border-white/5 w-full">
                            <span>{link.name}</span>
                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h4 className="text-white text-lg font-black uppercase tracking-widest">Get In Touch</h4>
                <div className="space-y-6">
                    <div className="flex gap-4 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                            <Phone size={18} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Call Us</div>
                            <a href={`tel:${SITE.phone}`} className="text-gray-300 font-bold hover:text-primary transition-colors">{SITE.phoneDisplay}</a>
                        </div>
                    </div>
                    <div className="flex gap-4 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                            <Mail size={18} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email Support</div>
                            <a href={`mailto:${SITE.email}`} className="text-gray-300 font-bold hover:text-primary transition-colors">{SITE.email}</a>
                        </div>
                    </div>
                    <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                            <MapPin size={18} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Our Office</div>
                            <div className="text-gray-300 font-medium leading-relaxed italic">{SITE.address}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <h4 className="text-white text-lg font-black uppercase tracking-widest">Our Location</h4>
                <div className="rounded-[2rem] overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 h-40 border border-white/10">
                    <iframe 
                        src={SITE.mapEmbed}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="SolarEdge Pro Location"
                    />
                </div>
                <div className="text-[10px] text-gray-600 font-bold bg-white/5 p-3 rounded-xl border border-white/5">
                    Working Hours: {SITE.hours.weekday} | Sun: {SITE.hours.sunday}
                </div>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-600 font-bold">
                © {new Date().getFullYear()} {SITE.name}. Empowering Gujarat with clean energy.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
        </div>
    </footer>
);
export default Footer;
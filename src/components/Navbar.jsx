import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Phone, Menu, X, MessageCircle } from 'lucide-react';
import { SITE } from '../data/siteData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-xl shadow-gray-200/50 py-3' : 'bg-white py-5'}`}>
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Sun className="h-8 w-8 text-primary group-hover:rotate-90 transition duration-700" />
                    </div>
                    <span className="text-2xl font-black text-secondary tracking-tighter">
                        Solar<span className="text-primary italic">Pro</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8 text-secondary font-bold text-sm uppercase tracking-wider">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`hover:text-primary transition-all relative group ${location.pathname === link.path ? 'text-primary' : ''}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                            </Link>
                        ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <a 
                            href={`https://wa.me/${SITE.whatsapp}`} 
                            className="p-3 rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-sm"
                            title="WhatsApp Us"
                        >
                            <MessageCircle size={20} />
                        </a>
                        <a 
                            href={`tel:${SITE.phone}`} 
                            className="bg-secondary text-white px-7 py-3 rounded-2xl flex items-center gap-2 text-sm font-extrabold hover:bg-secondary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-secondary/20"
                        >
                            <Phone size={18} /> Call Now
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-secondary p-2 bg-gray-50 rounded-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Nav Overlay */}
            <div className={`fixed inset-0 top-0 left-0 w-full h-[100vh] bg-white z-[60] transition-all duration-500 md:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-12">
                        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                             <Sun className="h-8 w-8 text-primary" />
                             <span className="text-2xl font-black text-secondary tracking-tighter">Solar<span className="text-primary italic">Pro</span></span>
                        </Link>
                        <button onClick={() => setIsOpen(false)} className="p-3 bg-gray-50 rounded-xl"><X size={24} /></button>
                    </div>

                    <div className="flex flex-col gap-8 text-3xl font-black text-secondary">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center justify-between border-b border-gray-100 pb-4 ${location.pathname === link.path ? 'text-primary' : ''}`}
                            >
                                {link.name} <span className="text-gray-200 text-xl font-normal">→</span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-4">
                        <a href={`tel:${SITE.phone}`} className="bg-secondary text-white p-5 rounded-[2rem] flex flex-col items-center justify-center gap-2 font-bold shadow-xl">
                            <Phone size={24} /> <span>Call Expert</span>
                        </a>
                        <a href={`https://wa.me/${SITE.whatsapp}`} className="bg-green-500 text-white p-5 rounded-[2rem] flex flex-col items-center justify-center gap-2 font-bold shadow-xl">
                            <MessageCircle size={24} /> <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
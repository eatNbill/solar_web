import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SITE } from '../data/siteData';

const Contact = () => {
    const [status, setStatus] = useState(null);

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const msg = e.target.message?.value || 'Interested in Solar';
        const formattedMsg = `New Inquiry from Website:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${msg}`;
        window.open(`https://wa.me/${SITE.whatsapp}?text=${formattedMsg}`);
        setStatus('Form sent successfully!');
    };

    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Hero */}
            <section className="bg-secondary py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                        Contact <span className="text-primary italic">SolarEdge Pro</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to switch to solar? Our experts are here to guide you every step of the way.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Info Cards */}
                    <div className="space-y-8">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Inquiry Support</div>
                        <h2 className="text-4xl font-extrabold text-secondary leading-tight">
                             Let's Power Your Future <br /> Together!
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 gap-6 pt-8">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-primary transition duration-500 group">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Phone size={24} />
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Speak to Sales</h4>
                                <a href={`tel:${SITE.phone}`} className="text-xl font-black text-secondary hover:text-primary transition-colors">{SITE.phoneDisplay}</a>
                            </div>
                            
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-primary transition duration-500 group">
                                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-500 group-hover:text-white transition-all">
                                    <MessageCircle size={24} />
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">WhatsApp Us</h4>
                                <a href={`https://wa.me/${SITE.whatsapp}`} className="text-xl font-black text-secondary hover:text-green-500 transition-colors">Instant Chat</a>
                            </div>
                            
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-primary transition duration-500 group sm:col-span-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Client Support</h4>
                                <a href={`mailto:${SITE.email}`} className="text-xl font-black text-secondary hover:text-primary transition-colors">{SITE.email}</a>
                            </div>
                        </div>

                        <div className="flex bg-secondary p-8 rounded-[2.5rem] text-white gap-6 items-center shadow-2xl relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -mr-16 -mt-16" />
                             <Clock className="text-primary shrink-0 transition-transform group-hover:rotate-45" size={40} />
                             <div>
                                 <h4 className="font-bold text-lg mb-1 uppercase tracking-[0.2em] text-primary">Working Hours</h4>
                                 <p className="text-gray-400 text-sm">{SITE.hours.weekday} <br /> Sunday: {SITE.hours.sunday}</p>
                             </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100 shadow-gray-300/50">
                        <h3 className="text-2xl font-black text-secondary mb-2">Request a Site Survey</h3>
                        <p className="text-gray-500 mb-10 text-sm">Fill in your details and our solar expert will contact you shortly.</p>
                        
                        <form onSubmit={handleWhatsApp} className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">Full Name</label>
                                <input name="name" type="text" placeholder="Aapka Naam" className="w-full p-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 outline-none focus:border-primary focus:bg-white transition-all font-bold placeholder:font-normal" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">Phone Number</label>
                                <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="w-full p-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 outline-none focus:border-primary focus:bg-white transition-all font-bold placeholder:font-normal" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">Message / Requirement</label>
                                <textarea name="message" rows="4" placeholder="How many kW do you need?" className="w-full p-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 outline-none focus:border-primary focus:bg-white transition-all font-bold placeholder:font-normal resize-none"></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-orange-600 text-white p-6 rounded-[1.5rem] font-black text-xl flex items-center justify-center gap-3 transition shadow-xl shadow-orange-900/30 group">
                                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" /> 
                                Submit on WhatsApp
                            </button>
                            {status && <div className="text-center text-green-500 font-bold flex items-center justify-center gap-2 animate-bounce mt-4"><CheckCircle2 /> {status}</div>}
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Presence</div>
                        <h2 className="text-4xl font-extrabold text-secondary mb-4 leading-tight">Visit Our Showroom</h2>
                        <div className="flex items-center justify-center gap-3 text-gray-500 font-bold">
                            <MapPin className="text-primary" /> {SITE.address}
                        </div>
                    </div>
                    <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 grayscale hover:grayscale-0 transition duration-1000">
                        <iframe 
                            src={SITE.mapEmbed}
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SolarEdge Pro Showroom"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

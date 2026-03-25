import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Zap, ShieldCheck, Star, ArrowRight, Play, Phone, ChevronLeft, ChevronRight, Plus, CheckCircle2 } from 'lucide-react';
import { SLIDES, STATS, SERVICES, WHY_US, STEPS, GALLERY, REVIEWS, FAQS, SITE } from '../data/siteData';

// --- Components ---

const HeroSlider = () => {
    const [cur, setCur] = useState(0);
    const timerRef = useRef();

    const go = n => setCur(p => (n + SLIDES.length) % SLIDES.length);
    const startAuto = () => { timerRef.current = setInterval(() => setCur(p => (p + 1) % SLIDES.length), 6000); };
    const stopAuto = () => clearInterval(timerRef.current);

    useEffect(() => {
        startAuto();
        return stopAuto;
    }, []);

    const s = SLIDES[cur];

    return (
        <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-secondary" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
            {SLIDES.map((sl, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === cur ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent z-10" />
                    <img src={sl.img} alt={sl.title} className="w-full h-full object-cover" />
                </div>
            ))}

            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                <div className="animate-in fade-in slide-in-from-left duration-1000">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                        {s.tag}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                        {s.title}<br />
                        <span className="text-primary italic">{s.em}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                        {s.sub}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={s.ctaHref} className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-900/20 transition-all flex items-center justify-center gap-2">
                            {s.cta} <ArrowRight size={20} />
                        </Link>
                        <a href={`tel:${SITE.phone}`} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                            <Phone size={20} /> Call Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <button
                onClick={() => go(cur - 1)}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-primary hover:border-primary transition-all hidden md:flex"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => go(cur + 1)}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-primary hover:border-primary transition-all hidden md:flex"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCur(i)}
                        className={`transition-all duration-300 ${i === cur ? 'w-10 bg-primary' : 'w-3 bg-white/40'} h-2 rounded-full`}
                    />
                ))}
            </div>
        </section>
    );
};

const StatsSection = () => {
    const [vals, setVals] = useState(STATS.map(() => 0));
    const ref = useRef();
    const done = useRef(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !done.current) {
                done.current = true;
                STATS.forEach((s, i) => {
                    let c = 0;
                    const duration = 2000;
                    const frameRate = 1000 / 60;
                    const totalFrames = duration / frameRate;
                    const step = s.num / totalFrames;

                    const t = setInterval(() => {
                        c = Math.min(c + step, s.num);
                        setVals(v => {
                            const nv = [...v];
                            nv[i] = Math.floor(c);
                            return nv;
                        });
                        if (c >= s.num) clearInterval(t);
                    }, frameRate);
                });
            }
        }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} className="bg-secondary py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((s, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-4xl md:text-5xl font-black text-primary mb-2 flex items-center justify-center gap-1 group-hover:scale-110 transition">
                                <span>{vals[i]}</span>
                                <span className="text-2xl">{s.unit}</span>
                            </div>
                            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SavingsCalculator = () => {
    const [bill, setBill] = useState(5000);
    const monthlySaving = Math.round(bill * 0.85);

    return (
        <section className="py-24 px-6 bg-lightBg">
            <div className="max-w-6xl mx-auto bg-secondary rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                            💰 ROI Calculator
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                            How Much Will <span className="text-primary italic">You Save?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Aapka bijli ka bill har saal badh raha hai. Solar lagaiye aur agle 25 saal tak free bijli ka anand lijiye.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-white font-medium">
                                <CheckCircle2 className="text-primary" size={20} />
                                Payback in just 3-4 years
                            </div>
                            <div className="flex items-center gap-3 text-white font-medium">
                                <CheckCircle2 className="text-primary" size={20} />
                                Government subsidy up to 40%
                            </div>
                            <div className="flex items-center gap-3 text-white font-medium">
                                <CheckCircle2 className="text-primary" size={20} />
                                25-Year assured performance
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[2rem] shadow-inner">
                        <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider block mb-6 text-center">
                            Your Current Monthly Bill
                        </label>

                        <div className="relative mb-10">
                            <input
                                type="range"
                                min="1000"
                                max="20000"
                                step="500"
                                value={bill}
                                onChange={(e) => setBill(parseInt(e.target.value))}
                                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between mt-2 text-xs text-gray-500 font-bold">
                                <span>₹1,000</span>
                                <span>₹20,000</span>
                            </div>
                        </div>

                        <div className="text-center space-y-8">
                            <div>
                                <div className="text-6xl font-black text-white mb-2">₹{bill.toLocaleString()}</div>
                                <div className="text-gray-400 text-sm">Monthly Expense</div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl">
                                    <div className="text-2xl font-bold text-green-400">₹{(monthlySaving * 12).toLocaleString()}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-tighter">Yearly Saving</div>
                                </div>
                                <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl">
                                    <div className="text-2xl font-bold text-primary">₹{(monthlySaving * 12 * 25).toLocaleString()}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-tighter">25-Year Saving</div>
                                </div>
                            </div>

                            <Link to="/contact" className="block w-full bg-primary hover:bg-orange-600 text-white font-bold py-5 rounded-2xl transition shadow-lg shadow-orange-900/40">
                                Get Detailed ROI Report
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FaqItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`border rounded-2xl transition-all duration-300 mb-4 ${open ? 'border-primary bg-white shadow-xl' : 'border-gray-200 bg-gray-50 hover:bg-white'}`}>
            <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpen(!open)}
            >
                <span className={`font-bold text-lg ${open ? 'text-secondary' : 'text-gray-700'}`}>{q}</span>
                <div className={`p-2 rounded-full transition-all ${open ? 'bg-primary text-white rotate-45' : 'bg-gray-200 text-gray-500'}`}>
                    <Plus size={20} />
                </div>
            </button>
            <div className={`px-6 overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                    {a}
                </p>
            </div>
        </div>
    );
};

const Home = () => {
    const handleWhatsApp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const city = e.target.city?.value || '';
        const msg = `Solar Inquiry from Website:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*City:* ${city}`;
        window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`);
    };

    return (
        <div className="animate-in fade-in duration-700 overflow-x-hidden">
            <HeroSlider />

            {/* Quick Bar - Mobile Only */}
            <div className="md:hidden grid grid-cols-3 bg-white border-b-4 border-primary p-3 gap-2 sticky top-[72px] z-40">
                <a href={`tel:${SITE.phone}`} className="flex flex-col items-center justify-center p-3 bg-secondary text-white rounded-xl text-[10px] font-bold gap-1 active:scale-95 transition">
                    <Phone size={16} /> <span>CALL NOW</span>
                </a>
                <a href={`https://wa.me/${SITE.whatsapp}`} className="flex flex-col items-center justify-center p-3 bg-green-500 text-white rounded-xl text-[10px] font-bold gap-1 active:scale-95 transition">
                    <MessageCircle size={16} /> <span>WHATSAPP</span>
                </a>
                <Link to="/contact" className="flex flex-col items-center justify-center p-3 bg-primary text-white rounded-xl text-[10px] font-bold gap-1 active:scale-95 transition">
                    <Zap size={16} /> <span>GET QUOTE</span>
                </Link>
            </div>

            {/* Identity / About Brief */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-orange-100 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                        ☀️ Solar Experts Since 2012
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight">
                        Gujarat's Most Trusted Solar <br className="hidden md:block" />
                        <span className="text-primary italic">Installation Company</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        We install solar panels for homes, businesses & farms — making clean energy simple, affordable, and hassle-free. Subsidies handled. Lifetime support included.
                    </p>
                    <div className="pt-4">
                        <Link to="/about" className="text-primary font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all">
                            Read Our Story <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <StatsSection />

            {/* Services */}
            <section className="py-24 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm">What We Do</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Our Specialized Services</h2>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((s, i) => (
                            <Link
                                to={s.href}
                                key={i}
                                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{s.title}</h3>
                                <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                                <div className="flex items-center text-primary font-bold gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Details <ArrowRight size={18} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center lg:text-left mb-16">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Trusted by 500+ <span className="text-primary italic">Families & Businesses</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {WHY_US.map((w, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition">
                                <div className="text-3xl mb-4 text-primary">{w.icon}</div>
                                <h3 className="text-white font-bold text-lg mb-2">{w.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SavingsCalculator />

            {/* Process */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">How it works</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Hassle-Free 5-Step Process</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block" />

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                            {STEPS.map((s, i) => (
                                <div key={i} className="flex lg:flex-col items-center lg:text-center group gap-6 lg:gap-0">
                                    <div className="w-16 h-16 rounded-full bg-primary text-secondary font-black text-2xl flex items-center justify-center border-[8px] border-white shadow-xl lg:mb-6 ring-4 ring-orange-50 group-hover:scale-110 transition shrink-0">
                                        {s.no}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-secondary mb-3">{s.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Gallery Preview */}
            <section className="py-24 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="space-y-4">
                            <div className="text-primary font-bold uppercase tracking-widest text-sm">Portfolio</div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Our Recent Installations</h2>
                        </div>
                        <Link to="/projects" className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:-translate-y-1 transition mb-2">
                            View Full Gallery <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {GALLERY.slice(0, 4).map((g, i) => (
                            <div key={i} className={`relative group overflow-hidden rounded-[2rem] aspect-square ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                                <img src={g.src} alt={g.cap} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{g.cat}</span>
                                    <h4 className="text-white font-bold text-lg">{g.cap}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-24 px-6 bg-secondary">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">What Our Customers Say</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {REVIEWS.map((r, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between hover:bg-white/10 transition">
                                <div>
                                    <div className="flex gap-1 text-primary mb-6">
                                        {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                                    </div>
                                    <p className="text-gray-300 italic mb-8 leading-relaxed">
                                        {r.text}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary text-secondary font-bold flex items-center justify-center">
                                        {r.initials}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">{r.name}</div>
                                        <div className="text-gray-500 text-xs">{r.detail}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Any Questions?</div>
                        <h2 className="text-4xl font-extrabold text-secondary mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-500">Everything you need to know about switching to solar.</p>
                    </div>

                    <div className="space-y-2">
                        {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 px-6 bg-primary">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-secondary leading-tight">
                        Power Your Future Today!
                    </h2>
                    <p className="text-xl text-orange-950/70 font-medium max-w-2xl mx-auto">
                        Join the clean energy revolution. Instant savings, government support, and 25 years of peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:-translate-y-1 transition shadow-2xl">
                            Get Free Consultation
                        </Link>
                        <a href={`https://wa.me/${SITE.whatsapp}`} className="bg-white text-green-600 px-10 py-5 rounded-2xl font-bold text-xl hover:-translate-y-1 transition shadow-xl flex items-center justify-center gap-3">
                            <MessageCircle /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Floating Form / Footer Section */}
            <section id="form" className="py-24 px-6 bg-lightBg border-t">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-4xl font-extrabold text-secondary mb-6 leading-tight">
                            Request a <span className="text-primary">Free Site Survey</span>
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Aapka aur solar panels ka rasta bas ek form dur hai. Fill the details and our expert will call you back within 24 hours.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-white rounded-2xl shadow-lg text-primary"><Phone size={24} /></div>
                                <div>
                                    <div className="text-gray-400 text-sm">Call Us Directly</div>
                                    <div className="text-secondary font-bold text-xl">{SITE.phoneDisplay}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-white rounded-2xl shadow-lg text-green-500"><MessageCircle size={24} /></div>
                                <div>
                                    <div className="text-gray-400 text-sm">WhatsApp Inquiry</div>
                                    <div className="text-secondary font-bold text-xl">Instant Support</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100">
                        <form onSubmit={handleWhatsApp} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Your Name</label>
                                    <input name="name" type="text" placeholder="John Doe" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:bg-white transition" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Phone Number</label>
                                    <input name="phone" type="tel" placeholder="+91 XXXX-XXXXXX" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:bg-white transition" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">City / Location</label>
                                <input name="city" type="text" placeholder="e.g. Surat, Ahmedabad" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:bg-white transition" required />
                            </div>
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white p-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-100 active:scale-[0.98]">
                                <MessageCircle size={24} /> Send Inquiry to WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
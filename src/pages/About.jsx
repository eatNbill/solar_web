import React from 'react';
import { ShieldCheck, TrendingUp, Leaf, Award, CheckCircle2 } from 'lucide-react';
import { SITE, STATS, CERTIFICATIONS } from '../data/siteData';

const ValueCard = ({ icon: Icon, title, desc }) => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
    </div>
);

const About = () => {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Hero */}
            <section className="bg-secondary py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                        Since 2012
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                        12 Years Powering <br />
                        <span className="text-primary italic">Gujarat with Solar</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        From a small team to 500+ installations — we make solar simple, affordable, and reliable for every household.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition duration-700 mx-4" />
                        <img 
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" 
                            alt="Our Story" 
                            className="relative rounded-[3rem] shadow-2xl z-10"
                        />
                    </div>
                    <div>
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Story</div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-8 leading-tight">
                            Started Small. <br />
                            <span className="text-primary">Grown Strong.</span>
                        </h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                            <p>
                                {SITE.name} was founded in 2012 in {SITE.city}. We started with a small, dedicated team and a dream of making solar energy accessible to every Indian family.
                            </p>
                            <p>
                                We are MNRE-empaneled, DISCOM-approved, and handle everything from site survey to subsidy paperwork to lifetime maintenance.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                            {[
                                'MNRE Empaneled EPC',
                                'Certified Installation Team',
                                'Tier-1 Solar Partners',
                                'Lifetime Support',
                                'PM Surya Ghar Partner',
                                'DISCOM Approved Vendor'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-secondary font-bold text-sm">
                                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-secondary py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    {STATS.map((s, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition">
                                {s.num}{s.unit}
                            </div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Core Values</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
                            What We Stand For
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard icon={ShieldCheck} title="Quality First" desc="Only Tier-1, BIS-certified panels. No shortcuts, ever." />
                        <ValueCard icon={TrendingUp} title="Honest Pricing" desc="Transparent quotes. No hidden charges. No false promises." />
                        <ValueCard icon={Leaf} title="Go Green" desc="Every system reduces carbon emissions. Cleaner India, together." />
                        <ValueCard icon={Award} title="Lifetime Support" desc="We're with you from day 1 to year 25 and beyond." />
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 px-6 bg-secondary relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Trusted & Verified</div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            Our Certifications & Partners
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {CERTIFICATIONS.map((c, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center hover:bg-white/10 transition group">
                                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 inline-block drop-shadow-lg">
                                    {c.ico}
                                </div>
                                <h4 className="text-white font-black block mb-1">{c.title}</h4>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-tighter">{c.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

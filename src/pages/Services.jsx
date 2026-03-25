import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Home as HomeIcon, Factory, Droplets, Battery, Settings, FileSearch } from 'lucide-react';
import { SERVICES, PRODUCTS_DETAIL, SITE } from '../data/siteData';

const getServiceIcon = (title) => {
    if (title.includes('Residential')) return <HomeIcon size={24} />;
    if (title.includes('Commercial')) return <Factory size={24} />;
    if (title.includes('Pump')) return <Droplets size={24} />;
    if (title.includes('Battery')) return <Battery size={24} />;
    if (title.includes('AMC')) return <Settings size={24} />;
    if (title.includes('Subsidy')) return <FileSearch size={24} />;
    return <Zap size={24} />;
};

const Services = () => {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Hero */}
            <section className="bg-secondary py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                        Expert Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                        Complete Solar <br />
                        <span className="text-primary italic">Solutions for You</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We handle everything from installation to maintenance, ensuring you get the best out of your solar investment.
                    </p>
                </div>
            </section>

            {/* Product Details Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto space-y-32">
                    {PRODUCTS_DETAIL.map((p, i) => (
                        <div key={i} className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${p.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                            <div className="flex-1 relative group">
                                <div className={`absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700`} />
                                <img 
                                    src={p.img} 
                                    alt={p.title} 
                                    className="relative w-full h-[400px] object-cover rounded-[3rem] shadow-2xl z-10"
                                />
                                <div className="absolute top-8 left-8 z-20 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
                                     <span className="text-primary font-black text-xs uppercase tracking-widest">{p.tag}</span>
                                </div>
                            </div>
                            
                            <div className="flex-1 space-y-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl shadow-inner">
                                    {p.icon}
                                </div>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight">
                                    {p.title}
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    {p.desc}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {p.features.map((f, j) => (
                                        <div key={j} className="flex items-center gap-3 text-secondary font-bold text-sm">
                                            <CheckCircle2 className="text-primary shrink-0" size={18} />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                     <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 group">
                                         Get Quote <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                     </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Grid View */}
            <section className="py-24 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Service Catalog</div>
                        <h2 className="text-4xl font-extrabold text-secondary">Our All-In-One Services</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:-translate-y-2 transition-all group">
                                <div className="text-primary mb-6 transition-transform group-hover:scale-110">
                                    {getServiceIcon(s.title)}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-4">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance CTA */}
            <section className="py-24 px-6 bg-secondary relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        Already have solar? <br />
                        <span className="text-primary">Keep it running at 100%!</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Our expert AMC services ensure your system generates maximum energy 365 days a year. Quarterly cleaning and health checks included.
                    </p>
                    <div className="pt-4">
                        <Link to="/contact" className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition shadow-2xl">
                            Inquire About AMC
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
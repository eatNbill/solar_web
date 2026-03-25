import React, { useState } from 'react';
import { GALLERY, BRANDS } from '../data/siteData';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    // Categorize gallery manually for filtering
    const categorizedGallery = GALLERY.map(g => ({
        ...g,
        catLabel: g.cat.charAt(0).toUpperCase() + g.cat.slice(1)
    }));

    const filteredGallery = filter === 'all' 
        ? categorizedGallery 
        : categorizedGallery.filter(g => g.cat === filter);

    const categories = ['all', ...new Set(categorizedGallery.map(g => g.cat))];

    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Hero */}
            <section className="bg-secondary py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                        Case Studies
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                        Our Recent <br />
                        <span className="text-primary italic">Solar Installations</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        500+ successful installations across Gujarat, helping thousands switch to clean energy every day.
                    </p>
                </div>
            </section>

            {/* Filter Gallery Section */}
            <section className="py-24 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-4 justify-center mb-16">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${
                                    filter === cat 
                                    ? 'bg-primary text-white shadow-xl shadow-orange-900/40' 
                                    : 'bg-white text-secondary border border-gray-100 hover:bg-orange-50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredGallery.map((g, i) => (
                            <div key={i} className={`relative group h-96 overflow-hidden rounded-[2.5rem] shadow-2xl ${g.span2 ? 'md:col-span-2' : ''}`}>
                                <img 
                                    src={g.src} 
                                    alt={g.cap} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-primary font-black text-xs uppercase tracking-widest mb-2 block">{g.catLabel}</span>
                                    <h3 className="text-white text-3xl font-black leading-tight drop-shadow-lg">{g.cap}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands Partner */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Our Partners</div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-16 leading-tight">
                        Powering You with Tier-1 Brands
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {BRANDS.map((brand, i) => (
                            <div key={i} className="bg-lightBg px-10 py-6 rounded-3xl border border-gray-100 text-lg font-black text-secondary/70 hover:text-primary transition-colors cursor-default">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Start Your Project CTA */}
            <section className="py-24 px-6 bg-secondary relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[100px] -translate-y-1/2" />
                <div className="max-w-4xl mx-auto relative z-10 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Want your roof <br />
                        <span className="text-primary italic">to count too?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Transform your roof into a power plant. Get a personalized proposal within 24 hours.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl hover:-translate-y-1 transition shadow-xl">
                            Request Proposal
                        </a>
                        <a href={`https://wa.me/917990471946`} className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition">
                            See More Work
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
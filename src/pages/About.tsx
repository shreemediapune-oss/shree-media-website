import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Eye, ShieldCheck, Zap, BarChart3, MapPin, Truck, PencilRuler, Search } from 'lucide-react';
import swagatImg from '../assets/swagat.jpg';

const About: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#fcfcfc' }}>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: 'white',
                padding: '6rem 0',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 className="animate-fadeIn" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Defining the Future of <br />
                        <span style={{ color: '#f59e0b' }}>Outdoor Advertising</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                        Shree Media helps brands dominate the landscape with strategic, high-impact media solutions in Pune’s most vibrant commercial corridors.
                    </p>
                </div>
            </section>

            {/* Who We Are & Mission */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div className="animate-slideUp">
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', fontWeight: 800, marginBottom: '1.5rem' }}>Who We Are</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', marginBottom: '1.5rem' }}>
                                Shree Media is a trusted outdoor advertising and print media agency based in Mahalunge, Pune. We specialize in delivering high-impact solutions that connect brands with their audience in real-time environments.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', marginBottom: '2rem' }}>
                                From traditional hoardings to cutting-edge digital LED screens, we provide a complete spectrum of advertising support. Our reputation is built on <strong>strategic planning</strong>, <strong>reliable execution</strong>, and a <strong>client-first approach</strong>.
                            </p>

                            <div style={{ padding: '1.5rem', background: '#f8fafc', borderLeft: '4px solid #f59e0b', borderRadius: '0 0.5rem 0.5rem 0' }}>
                                <p style={{ fontStyle: 'italic', color: '#1e293b', fontWeight: 500, margin: 0 }}>
                                    "Our goal is to make every brand we work with impossible to miss. We don't just sell space; we build visibility that delivers results."
                                </p>
                                <p style={{ marginTop: '0.5rem', color: '#64748b', fontSize: '0.9rem', fontWeight: 700 }}>— Team Shree Media</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div className="glass-light" style={{ padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', background: 'white' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <Target color="#f59e0b" size={32} />
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', margin: 0, fontWeight: 700 }}>Our Mission</h3>
                                </div>
                                <p style={{ color: '#475569', margin: 0, lineHeight: 1.6 }}>
                                    To empower businesses with strategic visibility using premium outdoor media and high-quality print solutions that drive measurable brand recall.
                                </p>
                            </div>
                            <div className="glass-light" style={{ padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', background: 'white' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <Eye color="#f59e0b" size={32} />
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', margin: 0, fontWeight: 700 }}>Our Vision</h3>
                                </div>
                                <p style={{ color: '#475569', margin: 0, lineHeight: 1.6 }}>
                                    To be Pune's most innovative media agency, setting benchmarks in quality, transparency, and strategic campaign execution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section style={{ backgroundColor: '#f1f5f9', padding: '5rem 0' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', fontWeight: 800, marginBottom: '3rem' }}>Our Core Pillars</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <ShieldCheck size={40} color="#f59e0b" />, title: 'Uncompromising Quality', desc: 'We use the highest grade materials for print and best-in-class digital displays.' },
                            { icon: <Zap size={40} color="#f59e0b" />, title: 'Execution Speed', desc: 'Timely installation and responsive maintenance are at the heart of our service.' },
                            { icon: <BarChart3 size={40} color="#f59e0b" />, title: 'Strategic Insight', desc: 'We don\'t just place ads; we select locations that maximize your reach and ROI.' },
                            { icon: <CheckCircle2 size={40} color="#f59e0b" />, title: 'Absolute Transparency', desc: 'Clear reporting, honest pricing, and genuine partnerships with every client.' }
                        ].map((v, i) => (
                            <div key={i} style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                                <div style={{ marginBottom: '1.5rem' }}>{v.icon}</div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{v.title}</h4>
                                <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', fontWeight: 800 }}>Seamless Execution Process</h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>How we turn your vision into high-impact reality</p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', position: 'relative' }}>
                        {[
                            { icon: <Search size={24} />, step: '01', title: 'Consultation', desc: 'Understanding your brand goals and target demographic.' },
                            { icon: <MapPin size={24} />, step: '02', title: 'Site Survey', desc: 'Identifying prime locations with maximum traffic & visibility.' },
                            { icon: <PencilRuler size={24} />, step: '03', title: 'Design/Prep', desc: 'Creating high-impact visuals and fabricating materials.' },
                            { icon: <Truck size={24} />, step: '04', title: 'Installation', desc: 'Professional deployment by our specialized field team.' },
                            { icon: <BarChart3 size={24} />, step: '05', title: 'Reporting', desc: 'Providing visual proof of execution and campaign stats.' }
                        ].map((s, i) => (
                            <div key={i} style={{ flex: '1 1 200px', maxWidth: '300px', textAlign: 'center' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: '#f59e0b',
                                    color: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem',
                                    fontWeight: 700,
                                    fontSize: '1.2rem',
                                    boxShadow: '0 10px 20px rgba(245, 158, 11, 0.3)'
                                }}>{s.icon}</div>
                                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>{s.title}</h4>
                                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section style={{ backgroundColor: '#f8fafc', padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Leadership</p>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', fontWeight: 800 }}>Meet Our Advertising Expert</h2>
                    </div>

                    <div style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        padding: '3rem',
                        borderRadius: '2rem',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '280px',
                                height: '280px',
                                borderRadius: '2rem',
                                overflow: 'hidden',
                                margin: '0 auto 1.5rem',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                border: '5px solid white'
                            }}>
                                <img
                                    src={swagatImg}
                                    alt="Swagat Padale"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', color: 'var(--secondary-color)', fontWeight: 800, marginBottom: '0.25rem' }}>Swagat Padale</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--accent-color)', fontWeight: 600 }}>Founder & CEO (Advertising Expert)</p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', fontWeight: 700, marginBottom: '1.25rem' }}>A Vision for Impactful Advertising</h4>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', marginBottom: '1.5rem' }}>
                                With a deep-rooted passion for marketing and a commitment to excellence, Swagat Padale leads Shree Media as the Founder & CEO (Advertising Expert) to redefine how brands communicate in physical spaces. His strategic foresight has been instrumental in securing prime advertising locations across Pune.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569' }}>
                                Under his expertise, Shree Media delivers high-impact campaigns that combine creative brilliance with strategic placement, ensuring every brand gets the visibility it deserves in the competitive outdoor media landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Cards */}
            <section style={{ backgroundColor: 'var(--secondary-color)', color: 'white', padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>The Shree Media Advantage</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Why we are the preferred choice for leading brands in Pune</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#f59e0b' }}>Strategic Dominance</h3>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>We own and manage prime boards in Hinjewadi, Baner, Wakad, and Pashan – Pune’s highest growth areas where your audience spends significant time.</p>
                        </div>
                        <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#f59e0b' }}>In-House Infrastructure</h3>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>Unlike brokers, we have in-house printing and fabrication. This means total control over quality, better pricing for you, and rapid deployment.</p>
                        </div>
                        <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#f59e0b' }}>Deep Local Expertise</h3>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>With years of experience in the Pune market, we understand traffic patterns and consumer behavior, ensuring your message lands exactly where it should.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area Focus */}
            <section style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hyper-Local Focus</p>
                    <h2 style={{ fontSize: '2rem', color: 'var(--secondary-color)', fontWeight: 800, marginBottom: '2rem' }}>Our Prime Coverage Areas</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                        {['Baner Road', 'Hinjewadi IT Park', 'Wakad Highway', 'Pashan Sus Road', 'Balewadi High Street', 'Mahalunge–Nande Road', 'Pune Camp', 'Viman Nagar', 'PCMC Area', 'All Over Pune'].map((area, idx) => (
                            <span key={idx} style={{
                                padding: '0.5rem 1.5rem',
                                background: '#fef3c7',
                                color: '#92400e',
                                borderRadius: '2rem',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                border: '1px solid #fde68a'
                            }}>
                                <MapPin size={14} style={{ display: 'inline', marginRight: '5px' }} /> {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding" style={{ background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/assets/hero_bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to Elevate Your Visibility?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: '#e2e8f0' }}>Let's talk about your next big campaign.</p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', fontWeight: 700 }}>
                        Get a Free Quotation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;


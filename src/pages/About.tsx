import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import swagatImg from '../assets/swagat.jpg';

const About: React.FC = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: 'white',
                padding: 'var(--section-padding)',
                textAlign: 'center',
                position: 'relative'
            }}>
                <div className="container">
                    <h1 className="h1 animate-fadeIn" style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>About Shree Media</h1>
                    <p className="lead" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto' }}>
                        Your strategic partner in high-impact outdoor advertising and brand visibility solutions across Pune.
                    </p>
                </div>
            </section>

            {/* Our Story & Values */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid-responsive">
                        <div className="animate-slideUp">
                            <h2 className="h2" style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Our Journey</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: '#475569' }}>
                                Established with a vision to revolutionize outdoor advertising in Pune, Shree Media has grown into a leading agency known for its prime locations and professional execution.
                            </p>
                            <p style={{ fontSize: '1.05rem', color: '#475569' }}>
                                We understand that every brand has a unique story, and our mission is to provide the perfect canvas for that story to reach your target audience effectively.
                            </p>
                        </div>
                        <div className="animate-slideUp" style={{
                            background: '#f8fafc',
                            padding: '2rem',
                            borderRadius: '1.5rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <h2 className="h2" style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Core Values</h2>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { title: 'Transparency', desc: 'Clear communication and ethical business practices.' },
                                    { title: 'Excellence', desc: 'Commitment to high-quality installation and service.' },
                                    { title: 'Innovation', desc: 'Strategic placements and modern advertising solutions.' },
                                    { title: 'Growth', desc: 'Dedicated to the success and visibility of our clients.' }
                                ].map((value, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>✓</div>
                                        <div>
                                            <strong style={{ color: 'var(--secondary-color)' }}>{value.title}:</strong> {value.desc}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section style={{ backgroundColor: '#f1f5f9', padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div className="grid-responsive">
                        <div style={{
                            backgroundColor: 'white',
                            padding: '3rem 2rem',
                            borderRadius: '1.5rem',
                            textAlign: 'center',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎯</div>
                            <h2 className="h2" style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Our Vision</h2>
                            <p style={{ color: '#475569', fontSize: '1.05rem' }}>
                                To be the first choice for brands seeking impactful outdoor visibility through strategic placements and innovative quality across Pune and beyond.
                            </p>
                        </div>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '3rem 2rem',
                            borderRadius: '1.5rem',
                            textAlign: 'center',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚀</div>
                            <h2 className="h2" style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Our Mission</h2>
                            <p style={{ color: '#475569', fontSize: '1.05rem' }}>
                                To empower businesses by delivering premium, result-oriented advertising solutions with absolute transparency, professional excellence, and on-time delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="h2" style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Meet Our Leadership</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '0 auto', borderRadius: '2px' }} />
                    </div>

                    <div className="grid-responsive" style={{ '--cols': 1, maxWidth: '900px', margin: '0 auto' } as any}>
                        <div className="animate-slideUp" style={{
                            backgroundColor: 'white',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                            border: '1px solid #f1f5f9',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <style>{`
                                .leader-card-grid {
                                    display: grid;
                                    grid-template-columns: 1fr;
                                }
                                @media (min-width: 768px) {
                                    .leader-card-grid {
                                        grid-template-columns: 1fr 1.5fr;
                                    }
                                }
                            `}</style>
                            <div className="leader-card-grid">
                                {/* Image Container */}
                                <div style={{
                                    position: 'relative',
                                    height: '400px',
                                    backgroundColor: '#1e293b',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={swagatImg}
                                        alt="Swagat Padale"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top'
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '1.5rem',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                        color: 'white'
                                    }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Swagat Padale</h3>
                                        <p style={{ margin: 0, opacity: 0.9, fontWeight: 500 }}>Founder & CEO (Advertising Expert)</p>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1rem',
                                        backgroundColor: '#fef3c7',
                                        color: '#92400e',
                                        borderRadius: '50px',
                                        fontSize: '0.875rem',
                                        fontWeight: 700,
                                        marginBottom: '1.5rem',
                                        textTransform: 'uppercase'
                                    }}>Visionary Leader</div>

                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#475569',
                                        lineHeight: 1.8,
                                        marginBottom: '1.5rem'
                                    }}>
                                        With over 15 years of extensive experience in the Pune outdoor media landscape, Swagat Padale has been the driving force behind Shree Media's consistent growth and success.
                                    </p>

                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#475569',
                                        lineHeight: 1.8,
                                        marginBottom: '2rem'
                                    }}>
                                        His strategic vision and deep understanding of market dynamics have helped numerous brands achieve exceptional visibility across prime locations in Pune.
                                    </p>

                                    <div style={{
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                                        gap: '1.5rem',
                                        display: 'grid'
                                    }}>
                                        <div>
                                            <div style={{ color: 'var(--accent-color)', fontWeight: 800, fontSize: '1.5rem' }}>15+</div>
                                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Years Exp</div>
                                        </div>
                                        <div>
                                            <div style={{ color: 'var(--accent-color)', fontWeight: 800, fontSize: '1.5rem' }}>500+</div>
                                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Campaigns</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section style={{ backgroundColor: '#f8fafc', padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="h2" style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Our Work Process</h2>
                        <p className="lead" style={{ maxWidth: '600px', margin: '0 auto' }}>A systematic approach to ensuring your campaign's success.</p>
                    </div>

                    <div className="grid-responsive" style={{ '--cols': 4 } as any}>
                        {[
                            { step: '01', title: 'Consultation', desc: 'Understanding your brand goals and target audience.' },
                            { step: '02', title: 'Site Selection', desc: 'Choosing prime locations for maximum visibility.' },
                            { step: '03', title: 'Execution', desc: 'Professional installation and quality checks.' },
                            { step: '04', title: 'Monitoring', desc: 'Ensuring your display remains in perfect condition.' }
                        ].map((step, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: 'var(--accent-color)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    margin: '0 auto 1.5rem'
                                }}>{step.step}</div>
                                <h3 className="h3" style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>{step.title}</h3>
                                <p style={{ color: '#64748b' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Area Focus */}
            <section style={{ padding: 'var(--section-padding)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="h2" style={{ color: 'var(--secondary-color)', marginBottom: '2rem' }}>Our Prime Coverage Areas</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
                        {['Baner Road', 'Hinjewadi IT Park', 'Wakad Highway', 'Pashan Sus Road', 'Balewadi High Street', 'Mahalunge Road', 'Pune Camp', 'Viman Nagar', 'PCMC Area', 'All Over Pune'].map((area, idx) => (
                            <span key={idx} style={{
                                padding: '0.5rem 1.25rem',
                                background: '#fef3c7',
                                color: '#92400e',
                                borderRadius: '2rem',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                border: '1px solid #fde68a'
                            }}>
                                <MapPin size={14} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }} /> {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding" style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9))',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Ready to Elevate Your Visibility?</h2>
                    <p className="lead" style={{ marginBottom: '2.5rem', color: '#cbd5e1' }}>Let's talk about your next big campaign.</p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', fontWeight: 700 }}>
                        Get a Free Quotation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;

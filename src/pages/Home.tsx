import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import heroBg from '../assets/hero_bg.jpg';

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section with Enhanced Visuals */}
            <section style={{
                backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 50%, rgba(245, 158, 11, 0.3) 100%), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundAttachment: 'fixed',
                color: 'white',
                minHeight: 'calc(100vh - 80px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 0',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated background overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
                    animation: 'float 6s ease-in-out infinite',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Glassmorphism content card */}
                    <div className="glass-light animate-slideUp" style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1rem, 3vw, 2.5rem)',
                        borderRadius: '1.5rem',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                    }}>
                        <h1 className="h1 animate-fadeIn" style={{
                            marginBottom: '1.5rem',
                            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            color: 'var(--primary-color)'
                        }}>
                            Elevate Your Brand with <br />
                            <span style={{
                                background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                display: 'inline-block',
                                paddingBottom: '0.15em',
                                verticalAlign: 'middle',
                                fontWeight: 900
                            }}>Premium Outdoor Advertising</span>
                        </h1>
                        <p className="lead" style={{
                            maxWidth: '700px',
                            margin: '0 auto 2.5rem',
                            fontWeight: 500,
                        }}>
                            Shree Media provides strategic hoarding, billboard, and digital display solutions to maximize your brand's visibility.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                            <Link to="/contact" className="btn btn-primary animate-slideUp" style={{
                                padding: '1.25rem 2.5rem',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                backgroundColor: '#1e3a8a',
                                color: 'white',
                                boxShadow: '0 10px 25px rgba(30, 58, 138, 0.2)',
                            }}>Get a Quote</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Clients Section */}
            <section style={{
                backgroundColor: '#ffffff',
                padding: 'var(--section-padding)',
                textAlign: 'center',
                color: 'var(--secondary-color)'
            }}>
                <div className="container">
                    <div className="animate-slideUp" style={{ marginBottom: '3.5rem' }}>
                        <h2 className="h2" style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>Our Clients</h2>
                        <p className="lead">
                            Trusted by leading brands for their outdoor advertising needs.
                        </p>
                    </div>

                    <div style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        position: 'relative',
                        padding: '1rem 0',
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            gap: '1.5rem',
                            animation: 'scroll 45s linear infinite',
                            padding: '1.5rem 0'
                        }}>
                            {[
                                'Kumar World', 'Kumar Realty', 'Saheel Properties', 'Kohinoor',
                                'Krishala', 'Hiranandani', 'Nanded City', 'Nova',
                                'Jhala Group', 'Nandan Properties', 'Rising Spaces'
                            ].concat(['Kumar World', 'Kumar Realty', 'Saheel Properties', 'Kohinoor',
                                'Krishala', 'Hiranandani', 'Nanded City', 'Nova',
                                'Jhala Group', 'Nandan Properties', 'Rising Spaces']).map((client, idx) => (
                                    <div key={idx} style={{
                                        padding: '1.5rem 2.5rem',
                                        borderRadius: '1.25rem',
                                        backgroundColor: 'white',
                                        border: '1px solid #f1f5f9',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '200px',
                                        flexShrink: 0
                                    }}>
                                        <span style={{
                                            fontSize: '1.1rem',
                                            fontWeight: 700,
                                            color: 'var(--secondary-color)',
                                            letterSpacing: '0.02em'
                                        }}>{client}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics & Achievements Section */}
            <section style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                padding: 'var(--section-padding)',
                position: 'relative'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="h2" style={{
                            marginBottom: '1rem',
                            color: 'var(--secondary-color)',
                        }}>Trusted by Businesses Across Pune</h2>
                        <p className="lead">Numbers that speak for our expertise and commitment</p>
                    </div>

                    <div className="grid-responsive" style={{ '--cols': 4 } as any}>
                        {[
                            { number: '15+', label: 'Years of Excellence', icon: '🏆', color: '#f59e0b' },
                            { number: '500+', label: 'Successful Campaigns', icon: '📊', color: '#10b981' },
                            { number: '200+', label: 'Happy Clients', icon: '🤝', color: '#3b82f6' },
                            { number: '95%', label: 'Client Retention Rate', icon: '⭐', color: '#8b5cf6' }
                        ].map((stat, index) => (
                            <div key={index} className="animate-slideUp" style={{
                                padding: '2rem 1.5rem',
                                background: 'white',
                                borderRadius: '1.25rem',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent',
                                animationDelay: `${index * 0.1}s`
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.borderColor = stat.color;
                                    e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}40`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                                }}
                            >
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem'
                                }}>{stat.icon}</div>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 800,
                                    color: stat.color,
                                    marginBottom: '0.5rem',
                                    lineHeight: 1
                                }}>{stat.number}</div>
                                <div style={{
                                    fontSize: '1rem',
                                    color: '#64748b',
                                    fontWeight: 600
                                }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section-padding" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                        <h2 className="h2" style={{
                            marginBottom: '1rem',
                            color: 'var(--secondary-color)',
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            Our Services
                            <div style={{
                                position: 'absolute',
                                bottom: '-10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '80px',
                                height: '4px',
                                background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                                borderRadius: '2px'
                            }} />
                        </h2>
                        <p className="lead" style={{ marginTop: '1.5rem' }}>Comprehensive outdoor media solutions tailored to your needs.</p>
                    </div>

                    <div className="grid-responsive" style={{ '--cols': 3 } as any}>
                        {services.map((service, index) => (
                            <Link key={service.id} to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{
                                    padding: '2rem',
                                    border: '2px solid transparent',
                                    borderRadius: '1rem',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    backgroundColor: 'white',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                        e.currentTarget.style.borderColor = '#f59e0b';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(245, 158, 11, 0.25)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.borderColor = 'transparent';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                                    }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem',
                                        fontSize: '1.5rem',
                                    }}>
                                        📢
                                    </div>

                                    <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>{service.title}</h3>

                                    <p style={{
                                        color: '#64748b',
                                        marginBottom: '1.5rem',
                                        flex: 1,
                                        lineHeight: 1.7,
                                        fontSize: '1rem'
                                    }}>{service.shortDescription}</p>

                                    <span style={{
                                        color: 'var(--accent-color)',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        Learn More
                                        <span>→</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Promise Section */}
            <section style={{
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fbbf24 100%)',
                padding: 'var(--section-padding)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="h2" style={{
                            marginBottom: '1rem',
                            color: 'var(--secondary-color)',
                        }}>Our Promise to You</h2>
                        <p className="lead" style={{
                            color: '#78350f',
                            fontWeight: 500,
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            We don't just promise great service — we guarantee it with every campaign
                        </p>
                    </div>

                    <div className="grid-responsive" style={{ '--cols': 3 } as any}>
                        {[
                            {
                                icon: '📍',
                                title: 'Prime Locations',
                                description: 'Strategic high-traffic placements in Baner, Wakad, Hinjawadi & across Pune',
                                color: '#dc2626'
                            },
                            {
                                icon: '⏰',
                                title: 'On-Time Installation',
                                description: '100% deadline adherence with professional installation and setup',
                                color: '#059669'
                            },
                            {
                                icon: '✨',
                                title: 'Quality Assurance',
                                description: 'Premium materials, weather-resistant printing, and professional finishing',
                                color: '#7c3aed'
                            },
                            {
                                icon: '💰',
                                title: 'Transparent Pricing',
                                description: 'No hidden costs, clear quotations, and competitive rates',
                                color: '#0891b2'
                            },
                            {
                                icon: '🛟',
                                title: '24/7 Support',
                                description: 'Dedicated account management and round-the-clock assistance',
                                color: '#ea580c'
                            },
                            {
                                icon: '📈',
                                title: 'Proven Results',
                                description: '95% client retention rate and measurable campaign success',
                                color: '#16a34a'
                            }
                        ].map((promise, index) => (
                            <div key={index} style={{
                                padding: '2rem',
                                background: 'white',
                                borderRadius: '1.25rem',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.borderColor = promise.color;
                                    e.currentTarget.style.boxShadow = `0 20px 40px ${promise.color}30`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '1.5rem',
                                    lineHeight: 1
                                }}>{promise.icon}</div>
                                <h3 className="h3" style={{
                                    color: 'var(--secondary-color)',
                                    marginBottom: '1rem'
                                }}>{promise.title}</h3>
                                <p style={{
                                    color: '#64748b',
                                    lineHeight: 1.7,
                                    fontSize: '1rem'
                                }}>{promise.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                padding: 'var(--section-padding)'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <h2 className="h2" style={{
                            marginBottom: '1rem',
                            color: 'var(--secondary-color)',
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            Client Testimonials
                            <div style={{
                                position: 'absolute',
                                bottom: '-10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '80px',
                                height: '4px',
                                background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                                borderRadius: '2px'
                            }} />
                        </h2>
                        <p className="lead" style={{ marginTop: '1.5rem' }}>What our clients say about working with Shree Media.</p>
                    </div>

                    <div style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        position: 'relative',
                        width: '100%'
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            gap: '1.5rem',
                            animation: 'scroll 35s linear infinite',
                            width: 'max-content'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
                            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
                        >
                            {[
                                { name: 'Rahul Patil', company: 'Tech Solutions', review: 'Excellent service and prime locations. Highly recommended for brand visibility.', rating: 5 },
                                { name: 'Priya Sharma', company: 'Fashion Hub', review: 'Shree Media helped us reach the right audience with their strategic hoardings.', rating: 5 },
                                { name: 'Amit Desai', company: 'BuildKey Realty', review: 'Professional team and great execution. Our leads increased significantly.', rating: 5 },
                                { name: 'Sneha More', company: 'Healthy Life', review: 'Very happy with the digital hoarding campaign. Great ROI!', rating: 5 },
                                { name: 'Vikram Singh', company: 'Auto World', review: 'The best outdoor advertising agency in Pune. Reliable and effective.', rating: 5 }
                            ].concat([
                                { name: 'Rahul Patil', company: 'Tech Solutions', review: 'Excellent service and prime locations. Highly recommended for brand visibility.', rating: 5 },
                                { name: 'Priya Sharma', company: 'Fashion Hub', review: 'Shree Media helped us reach the right audience with their strategic hoardings.', rating: 5 },
                                { name: 'Amit Desai', company: 'BuildKey Realty', review: 'Professional team and great execution. Our leads increased significantly.', rating: 5 },
                                { name: 'Sneha More', company: 'Healthy Life', review: 'Very happy with the digital hoarding campaign. Great ROI!', rating: 5 },
                                { name: 'Vikram Singh', company: 'Auto World', review: 'The best outdoor advertising agency in Pune. Reliable and effective.', rating: 5 }
                            ]).map((review, index) => (
                                <div key={index} style={{
                                    width: 'clamp(280px, 80vw, 400px)',
                                    padding: '2rem',
                                    background: 'white',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '1.25rem',
                                    whiteSpace: 'normal',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ fontSize: '2.5rem', color: '#fbbf24', opacity: 0.3, position: 'absolute', top: '1rem', right: '1.5rem' }}>"</div>
                                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <span key={i} style={{ color: '#fbbf24', fontSize: '1rem' }}>★</span>
                                        ))}
                                    </div>
                                    <p style={{ fontStyle: 'italic', color: '#475569', lineHeight: '1.7', fontSize: '1rem', position: 'relative', zIndex: 1 }}>"{review.review}"</p>
                                    <div style={{ borderTop: '2px solid #f1f5f9', paddingTop: '1rem' }}>
                                        <h4 style={{ color: 'var(--secondary-color)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>{review.name}</h4>
                                        <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>{review.company}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Home;

import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const service = services.find((s) => s.id === id);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const Icon = service.icon;

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                padding: '6rem 0 4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                        <Link to="/" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            color: '#94a3b8',
                            fontSize: '0.9rem',
                            textDecoration: 'none'
                        }}>
                            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Home
                        </Link>
                        <Link to="/services" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            color: '#94a3b8',
                            fontSize: '0.9rem',
                            textDecoration: 'none'
                        }}>
                            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Services
                        </Link>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {/* Desktop Grid Layout */}
                        <div className="hero-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                            <style>{`
                @media (max-width: 968px) {
                  .hero-content { grid-template-columns: 1fr !important; }
                  .hero-image { order: -1; }
                }
              `}</style>

                            {/* Left Content */}
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        backgroundColor: 'var(--accent-color)',
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        color: 'var(--primary-color)'
                                    }}>
                                        <Icon size={40} />
                                    </div>
                                    <h1 style={{ fontSize: '3rem', lineHeight: 1.1 }}>{service.title}</h1>
                                </div>

                                <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '600px' }}>
                                    {service.shortDescription}
                                </p>
                            </div>

                            {/* Right Image */}
                            <div className="hero-image" style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    right: '-1rem',
                                    bottom: '-1rem',
                                    border: '2px solid var(--accent-color)',
                                    borderRadius: '1rem',
                                    zIndex: 0
                                }}></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        objectFit: 'cover',
                                        borderRadius: '1rem',
                                        position: 'relative',
                                        zIndex: 1,
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                        {/* Main Description */}
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>Overview</h2>
                            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                                {service.fullDescription}
                            </p>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>Key Features</h3>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {service.features.map((feature, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}>
                                        <CheckCircle size={18} color="var(--accent-color)" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits / CTA Card */}
                        <div>
                            <div style={{
                                backgroundColor: '#f8fafc',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid #e2e8f0'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>Why Choose This?</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '24px',
                                                height: '24px',
                                                backgroundColor: 'var(--primary-color)',
                                                color: 'white',
                                                borderRadius: '50%',
                                                fontSize: '0.8rem',
                                                fontWeight: 'bold',
                                                flexShrink: 0
                                            }}>{index + 1}</span>
                                            <span style={{ color: '#475569', fontWeight: 500 }}>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ textAlign: 'center' }}>
                                    <Link to="/contact" className="btn btn-primary" style={{ display: 'block', width: '100%' }}>
                                        Request a Quote
                                    </Link>
                                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                                        Get a customized plan for your brand.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;

import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { services } from '../data/services';

const Services: React.FC = () => {
    const outdoorServices = services.filter(s => s.category === 'outdoor');
    const printServices = services.filter(s => s.category === 'print');

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                padding: '5rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Services</h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>Comprehensive Outdoor & Print Media Solutions</p>
                </div>
            </section>

            {/* Outdoor Services */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>Outdoor Advertising Services</h2>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            Maximize your brand's reach with our premium outdoor media assets strategically located across the city.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {outdoorServices.map((service) => (
                            <Link key={service.id} to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: '2rem',
                                    borderRadius: '1rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    border: '1px solid #e2e8f0',
                                    height: '100%',
                                    transition: 'transform 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>{service.title}</h3>
                                    <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                        {service.shortDescription}
                                    </p>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                        {service.features.slice(0, 3).map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.9rem' }}>
                                                <CheckCircle size={16} color="var(--accent-color)" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <span style={{
                                        color: 'var(--primary-color)',
                                        fontWeight: 600,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        Learn More &rarr;
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Print Media Services */}
            <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>Print Media Services</h2>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            High-quality printing solutions for all your branding and marketing needs.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {printServices.map((service) => (
                            <Link key={service.id} to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: '2rem',
                                    borderRadius: '1rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    border: '1px solid #e2e8f0',
                                    height: '100%',
                                    transition: 'transform 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>{service.title}</h3>
                                    <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                        {service.shortDescription}
                                    </p>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                        {service.features.slice(0, 3).map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.9rem' }}>
                                                <CheckCircle size={16} color="var(--accent-color)" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <span style={{
                                        color: 'var(--primary-color)',
                                        fontWeight: 600,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        Learn More &rarr;
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

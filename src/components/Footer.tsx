import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-light)', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                    {/* Company Info */}
                    <div>
                        <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                            <img src={logo} alt="Shree Media Logo" style={{ height: '70px', width: 'auto' }} />
                        </Link>
                        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
                            Your partner in premium outdoor advertising solutions. We help brands grow with impactful visibility.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'white' }}><Facebook size={20} /></a>
                            <a href="#" style={{ color: 'white' }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: 'white' }}><Twitter size={20} /></a>
                            <a href="#" style={{ color: 'white' }}><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>

                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Our Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/services">Hoardings & Billboards</Link></li>
                            <li><Link to="/services">LED Screens</Link></li>
                            <li><Link to="/services">Transit Ads</Link></li>
                            <li><Link to="/services">Mall Ads</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <MapPin size={18} color="var(--accent-color)" style={{ marginTop: '4px', flexShrink: 0 }} />
                                <span>
                                    Ground Floor, Shedge Heights,<br />
                                    Opp ZP School, Mahalunge,<br />
                                    Pune-45
                                </span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Phone size={18} color="var(--accent-color)" />
                                <span>+91 8237377799</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={18} color="var(--accent-color)" />
                                <span>shreemediapune@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', color: '#94a3b8' }}>
                    <p>&copy; {new Date().getFullYear()} Shree Media. All rights reserved. | <Link to="/privacy">Privacy Policy</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

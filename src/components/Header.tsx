import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../index.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },


        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header style={{
            backgroundColor: '#ffffff',
            color: 'var(--primary-color)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            borderBottom: '1px solid #f1f5f9'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Shree Media Logo" style={{ height: '60px', width: 'auto' }} />
                    </Link>

                    {/* Desktop Nav */}
                    <nav style={{ display: 'none', gap: '2.5rem' }} className="desktop-nav">
                        <style>{`
              @media (min-width: 768px) {
                .desktop-nav { display: flex !important; }
                .mobile-menu-btn { display: none !important; }
              }
              .nav-link {
                color: #475569;
                transition: color 0.3s ease;
                font-size: 1rem;
              }
              .nav-link:hover {
                color: var(--accent-color);
              }
            `}</style>
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="nav-link" style={{ fontWeight: 600 }}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'none', color: 'var(--primary-color)' }}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav style={{
                    backgroundColor: '#ffffff',
                    padding: '1.5rem',
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    borderBottom: '1px solid #f1f5f9'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                padding: '0.5rem 0',
                                borderBottom: '1px solid #f1f5f9',
                                color: '#1e293b',
                                fontWeight: 500
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;

import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
            {/* Hero / Header Image */}
            <div style={{
                height: '400px',
                position: 'relative',
                backgroundColor: 'var(--secondary-color)'
            }}>
                <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: '0.6'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '4rem 0 2rem'
                }}>
                    <div className="container">
                        <Link to="/blog" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            color: 'white',
                            marginBottom: '1.5rem',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            opacity: 0.9
                        }}>
                            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Blog
                        </Link>
                        <h1 style={{ color: 'white', fontSize: '3rem', maxWidth: '900px', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                            {blog.title}
                        </h1>
                        <div style={{ display: 'flex', gap: '2rem', color: 'white', opacity: 0.9 }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={18} /> {blog.date}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={18} /> {blog.author}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container section-padding">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 2fr) 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    <style>{`
                        @media (max-width: 968px) {
                            .container > div { grid-template-columns: 1fr !important; }
                        }
                    `}</style>

                    {/* Main Content */}
                    <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                        <div
                            style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: '#334155'
                            }}
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                {blog.tags.map((tag, index) => (
                                    <span key={index} style={{
                                        backgroundColor: '#f1f5f9',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '2rem',
                                        fontSize: '0.9rem',
                                        color: '#475569',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <Tag size={14} /> {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div style={{ position: 'sticky', top: '100px' }}>
                        <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '2rem', borderRadius: '1rem', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Need Expert Advice?</h3>
                            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                                Looking to launch an outdoor campaign or need premium printing services? Let's discuss your project.
                            </p>
                            <Link to="/contact" className="btn" style={{
                                backgroundColor: 'white',
                                color: 'var(--primary-color)',
                                display: 'block',
                                textAlign: 'center',
                                fontWeight: 'bold'
                            }}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;

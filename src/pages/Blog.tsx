import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blog: React.FC = () => {
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Blog & Insights</h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>Latest trends, tips, and strategies in outdoor & print media.</p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {blogs.map((blog) => (
                            <div key={blog.id} style={{
                                backgroundColor: 'white',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{ height: '240px', overflow: 'hidden' }}>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Calendar size={14} /> {blog.date}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <User size={14} /> {blog.author}
                                        </span>
                                    </div>

                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary-color)', lineHeight: '1.4' }}>
                                        <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {blog.title}
                                        </Link>
                                    </h2>

                                    <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                                        {blog.excerpt}
                                    </p>

                                    <Link to={`/blog/${blog.id}`} style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--primary-color)',
                                        fontWeight: 600,
                                        textDecoration: 'none'
                                    }}>
                                        Read More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;

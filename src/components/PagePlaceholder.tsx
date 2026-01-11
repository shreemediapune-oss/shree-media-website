import React from 'react';

interface PageProps {
    title: string;
}

const PagePlaceholder: React.FC<PageProps> = ({ title }) => {
    return (
        <div className="section-padding container">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>{title}</h1>
            <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                This page is currently under construction. Please check back soon!
            </p>
        </div>
    );
};

export default PagePlaceholder;

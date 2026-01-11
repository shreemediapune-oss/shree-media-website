import React, { useState, useRef } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

// ✅ Initialize EmailJS ONCE (outside component)
emailjs.init('4H21Hmc4gCNmMoAOf'); // your PUBLIC KEY

const Contact: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus("submitting");

        emailjs
            .sendForm(
                "service_h371ryf",
                "template_0g08f3s",
                form.current
            )
            .then(() => {
                setStatus("success");
                form.current?.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setStatus("error");
                alert("Failed to send message. Please try again.");
            });
    };

    if (status === "success") {
        return (
            <div className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#ecfdf5', padding: '3rem', borderRadius: '1rem', maxWidth: '600px' }}>
                    <h2 style={{ color: '#059669', marginBottom: '1rem', fontSize: '2rem' }}>Thank You!</h2>
                    <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem' }}>
                        You’re all set! Our team will contact you shortly with the best options and pricing for your requirements.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn btn-primary"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

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
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>We’re Here to Help You Grow Your Brand</p>
                </div>
            </section>

            <div className="container section-padding">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Contact Information */}
                    <div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Get in Touch</h2>
                            <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: '1.6' }}>
                                Whether you’re looking for outdoor advertising, digital hoardings, mall branding, or print media solutions, our team at Shree Media is ready to assist you with the right guidance and the best pricing.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                        <MapPin size={24} color="var(--accent-color)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>Our Office Address</h3>
                                        <p style={{ color: '#475569', lineHeight: '1.6' }}>
                                            Ground Floor, Shedge Heights,<br />
                                            Opp ZP School, Mahalunge,<br />
                                            Pune-45
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                        <Phone size={24} color="var(--accent-color)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>Contact Details</h3>
                                        <p style={{ color: '#475569', marginBottom: '0.25rem' }}>Mobile: +91 8237377799</p>
                                        <p style={{ color: '#475569' }}>Email: shreemediapune@gmail.com</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                        <Clock size={24} color="var(--accent-color)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>Working Hours</h3>
                                        <p style={{ color: '#475569' }}>10:00 AM – 7:00 PM (Mon–Sat)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--secondary-color)' }}>💬 Quick Response Guarantee</h3>
                            <p style={{ color: '#64748b' }}>
                                We reply to all inquiries within 24 hours, and urgent project requests are handled on priority.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '2rem' }}>Send Us a Message</h2>
                        <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Name*</label>
                                <input name="name" type="text" required placeholder="Full Name" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Email Address*</label>
                                    <input name="email" type="email" required placeholder="Enter your email" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Phone Number*</label>
                                    <input name="phone" type="tel" required placeholder="WhatsApp preferred" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Select Service*</label>
                                <select name="service" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: 'white' }}>
                                    <option value="">Select an option</option>
                                    <option value="Hoardings & Billboards">Hoardings & Billboards</option>
                                    <option value="LED Screens / Digital Hoardings">LED Screens / Digital Hoardings</option>
                                    <option value="Pole Kiosks">Pole Kiosks</option>
                                    <option value="Mall Branding">Mall Branding</option>
                                    <option value="Site Survey / Location Acquisition">Site Survey / Location Acquisition</option>
                                    <option value="Installation & Maintenance">Installation & Maintenance</option>
                                    <option value="Flex / Vinyl Printing">Flex / Vinyl Printing</option>
                                    <option value="Brochures / Flyers / Visiting Cards">Brochures / Flyers / Visiting Cards</option>
                                    <option value="Glow Sign / ACP / Acrylic Boards">Glow Sign / ACP / Acrylic Boards</option>
                                    <option value="Other Inquiry">Other Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Preferred Location</label>
                                <input name="location" type="text" placeholder="e.g. Baner, Mahalunge, Hinjawadi, Wakad" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Message / Project Details*</label>
                                <textarea name="message" required rows={4} placeholder="Describe your requirement" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" disabled={status === 'submitting'} className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                                {status === 'submitting' ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'error' && (
                                <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>
                                    ❌ Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

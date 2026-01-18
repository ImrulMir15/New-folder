import { useState } from 'react';

export default function Contact() {
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykkelqp";

    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        setStatus("sending");

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 className="animate-in" style={{ textAlign: 'center' }}>Contact Me</h2>
                <p className="animate-in delay-1" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    Have a question or want to work together? Send me a message!
                </p>

                <form onSubmit={handleSubmit} className="animate-in delay-2" style={{
                    background: 'var(--bg-card)',
                    padding: '40px',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid #333',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name</label>
                        <input type="text" name="name" required style={{
                            width: '100%',
                            padding: '12px',
                            background: '#222',
                            border: '1px solid #444',
                            borderRadius: '8px',
                            color: '#fff',
                            outline: 'none'
                        }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
                        <input type="email" name="email" required style={{
                            width: '100%',
                            padding: '12px',
                            background: '#222',
                            border: '1px solid #444',
                            borderRadius: '8px',
                            color: '#fff',
                            outline: 'none'
                        }} />
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Message</label>
                        <textarea name="message" rows="5" required style={{
                            width: '100%',
                            padding: '12px',
                            background: '#222',
                            border: '1px solid #444',
                            borderRadius: '8px',
                            color: '#fff',
                            outline: 'none',
                            resize: 'vertical'
                        }}></textarea>
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%' }} disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p style={{ marginTop: '20px', color: '#4ade80', textAlign: 'center' }}>Message sent successfully!</p>
                    )}
                    {status === "error" && (
                        <p style={{ marginTop: '20px', color: '#f87171', textAlign: 'center' }}>Oops! There was a problem sending your message.</p>
                    )}
                </form>
            </div>
        </section>
    );
}

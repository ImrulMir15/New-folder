export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="animate-in">About Me</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    marginTop: '40px'
                }}>
                    <div className="animate-in delay-1" style={{
                        background: 'var(--bg-card)',
                        padding: '30px',
                        borderRadius: 'var(--border-radius)',
                        border: '1px solid #333'
                    }}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>Education</h3>
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ fontSize: '1.2rem', color: '#fff' }}>BSc in Computer Science & Engineering</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)' }}>Southeast University | Final Year</p>
                            <p style={{ fontSize: '0.95rem', marginTop: '10px' }}>
                                Focusing on core computer science principles, software development, and modern web technologies.
                            </p>
                        </div>
                    </div>

                    <div className="animate-in delay-2" style={{
                        background: 'var(--bg-card)',
                        padding: '30px',
                        borderRadius: 'var(--border-radius)',
                        border: '1px solid #333'
                    }}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>Skills & Interests</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {["Web Development", "React.js", "JavaScript", "Problem Solving"].map((skill, index) => (
                                <li key={index} style={{
                                    display: 'inline-block',
                                    background: '#222',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    margin: '0 10px 10px 0',
                                    fontSize: '0.9rem',
                                    border: '1px solid #444'
                                }}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                        <p style={{ marginTop: '20px' }}>
                            Passionate about learning and implementing new technologies to solve real-world problems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

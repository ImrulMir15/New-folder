export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="animate-in">Experience</h2>

                <div className="animate-in delay-1" style={{ marginTop: '40px' }}>
                    {/* Experience Card */}
                    <div className="cyber-card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '15px',
                            flexWrap: 'wrap',
                            gap: '10px'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>QA in 2D Floor Plan Designer</h3>
                                <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem' }}>
                                    IOT Lab BD
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '400' }}> (Vendor for Cubicasa)</span>
                                </h4>
                            </div>
                            <div className="mono" style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                padding: '5px 10px',
                                borderRadius: '4px',
                                fontSize: '0.9rem'
                            }}>
                                Present
                            </div>
                        </div>

                        <p style={{ marginBottom: '20px' }}>
                            Responsible for ensuring quality assurance in high-volume floor plan designs.
                            Checking precision, accuracy, and adherence to client standards for digital property visualizations.
                        </p>

                        <div>
                            <span className="tech-tag">Quality Assurance</span>
                            <span className="tech-tag">2D Design</span>
                            <span className="tech-tag">Floor Planning</span>
                            <span className="tech-tag">Detail Oriented</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

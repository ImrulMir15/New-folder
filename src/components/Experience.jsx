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
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>QA in 2D Floor Plan Designer - As a Team Leader</h3>
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

                {/* Skills Section */}
                <div className="animate-in delay-2" style={{ marginTop: '60px' }}>
                    <h2 style={{ marginBottom: '30px' }}>Skills & Technologies</h2>
                    
                    <div style={{ display: 'grid', gap: '30px' }}>
                        {/* Programming & AI/ML */}
                        <div className="cyber-card">
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--accent-primary)' }}>
                                Programming & AI/ML
                            </h3>
                            <div>
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">C++</span>
                                <span className="tech-tag">Java</span>
                                <span className="tech-tag">AI & Machine Learning</span>
                                <span className="tech-tag">Kaggle Dataset Handler</span>
                                <span className="tech-tag">Google Colab</span>
                            </div>
                        </div>

                        {/* Data Management */}
                        <div className="cyber-card">
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--accent-primary)' }}>
                                Data Management
                            </h3>
                            <div>
                                <span className="tech-tag">Excel Data Cleaning</span>
                                <span className="tech-tag">Data Analysis</span>
                                <span className="tech-tag">Pentaho Data Warehouse</span>
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="cyber-card">
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--accent-primary)' }}>
                                Databases
                            </h3>
                            <div>
                                <span className="tech-tag">MongoDB</span>
                                <span className="tech-tag">PostgreSQL</span>
                                <span className="tech-tag">MySQL</span>
                            </div>
                        </div>

                        {/* Web Development */}
                        <div className="cyber-card">
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--accent-primary)' }}>
                                Web Development
                            </h3>
                            <div>
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">JavaScript</span>
                                <span className="tech-tag">HTML/CSS</span>
                                <span className="tech-tag">Vite</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

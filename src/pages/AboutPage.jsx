import React from 'react';

const AboutPage = () => {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="text-center" style={{ marginBottom: '3rem' }}>About ProblemMap</h1>

                <div className="flex gap-12" style={{ flexDirection: 'column' }}>
                    <section>
                        <h2>Our Vision</h2>
                        <p>
                            We envision a world where every citizen is an active participant in their city's development. By leveraging technology and collective intelligence, we aim to make urban maintenance proactive rather than reactive.
                        </p>
                    </section>

                    <section>
                        <h2>How Data is Used</h2>
                        <p>
                            All reports submitted through ProblemMap are aggregated to provide city officials with a heat-map of infrastructure needs. We remove personally identifiable information before sharing data with third-party researchers or public agencies.
                        </p>
                    </section>

                    <section className="card" style={{ backgroundColor: '#F8FAFF' }}>
                        <h3>Privacy First</h3>
                        <p style={{ marginBottom: 0 }}>
                            Your privacy is our priority. We only use your location to pinpoint the infrastructure issue, and your contact details are never shared without your explicit consent.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

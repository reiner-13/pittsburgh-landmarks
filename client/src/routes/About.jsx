import React from 'react';
import Header from '../components/Header';
import TechCard from '../components/TechCard';

const About = () => {
    return (
        <div>
            <Header />
            <div className="container my-4 p-4 border border-dark border-5 bg-warning">
                <h2>About</h2>
                <p>View information on Pittsburgh's historic landmarks generated by Meta's Llama model.</p>
            </div>
            <div className="container my-4 p-4 border border-dark border-5 bg-warning">
                <h2>Technologies</h2>
                <div className="container row justify-content-center">
                    <TechCard techName="Node.js" techImg="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"></TechCard>
                    <TechCard techName="Express.js" techImg="https://img.icons8.com/fluent/200/express-js.png"></TechCard>
                    <TechCard techName="PostgreSQL" techImg="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"></TechCard>
                    <TechCard techName="React" techImg="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></TechCard>
                    <TechCard techName="GroqCloud" techImg="https://console.groq.com/groqcloud_dark_v2.svg"></TechCard>
                    <TechCard techName="Llama 3" techImg="https://images.vexels.com/media/users/3/180880/isolated/lists/0c09cf16a78784830b86fa8dcece9984-cute-llama-standing-profile-outline.png"></TechCard>
                    <TechCard techName="OpenLayers" techImg="https://openlayers.org/theme/img/logo-dark.svg"></TechCard>
                </div>
            </div>
        </div>
    );
};

export default About;
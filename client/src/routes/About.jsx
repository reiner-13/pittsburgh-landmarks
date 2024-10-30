import React from 'react';
import Header from '../components/Header';

const About = () => {
    return (
        <div>
            <Header />
            <div className="container my-4 p-4 border border-dark border-5 bg-warning">
                <h2>About</h2>
                <p>This is my website.</p>
                <p>I should write a description here.</p>
                <p>Maybe later.</p>
            </div>
            <div className="container my-4 p-4 border border-dark border-5 bg-warning">
                <h2>Technologies</h2>
                <div className="container row justify-content-center">
                    <div className="card mx-5 my-4 p-0 border border-dark border-3 bg-warning-subtle" style={{'width': '300px'}}>
                        <img className="card-img-top mx-auto my-4" src="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png" alt="Node.js" style={{'height': '200px', 'width': '200px'}}/>
                        <div className="card-body pt-0">
                            <h4 className="card-text text-center">Node.js</h4>
                        </div>
                    </div>
                    <div className="card mx-5 my-4 p-0 border border-dark border-3 bg-warning-subtle" style={{'width': '300px'}}>
                        <img className="card-img-top mx-auto my-4" src="https://img.icons8.com/fluent/200/express-js.png" alt="Express.js" style={{'height': '200px', 'width': '200px'}}/>
                        <div className="card-body pt-0">
                            <h4 className="card-text text-center">Express.js</h4>
                        </div>
                    </div>
                    <div className="card mx-5 my-4 p-0 border border-dark border-3 bg-warning-subtle" style={{'width': '300px'}}>
                        <img className="card-img-top mx-auto my-4" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" style={{'height': '200px', 'width': '200px'}}/>
                        <div className="card-body pt-0">
                            <h4 className="card-text text-center">PostgreSQL</h4>
                        </div>
                    </div>
                    <div className="card mx-5 my-4 p-0 border border-dark border-3 bg-warning-subtle" style={{'width': '300px'}}>
                        <img className="card-img-top mx-auto my-4" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" style={{'height': '200px', 'width': '200px'}}/>
                        <div className="card-body pt-0">
                            <h4 className="card-text text-center">React</h4>
                        </div>
                    </div>
                    <div className="card mx-5 my-4 p-0 border border-dark border-3 bg-warning-subtle" style={{'width': '300px'}}>
                        <img className="card-img-top mx-auto my-4" src="https://console.groq.com/groqcloud_dark_v2.svg" alt="GroqCloud" style={{'height': '200px', 'width': '200px'}}/>
                        <div className="card-body pt-0">
                            <h4 className="card-text text-center">GroqCloud</h4>
                        </div>
                    </div>
                    <div className="card mx-5 my-4 p-0 border border-dark border-3 bg-warning-subtle" style={{'width': '300px'}}>
                        <img className="card-img-top mx-auto my-4" src="https://images.vexels.com/media/users/3/180880/isolated/lists/0c09cf16a78784830b86fa8dcece9984-cute-llama-standing-profile-outline.png" alt="Llama" style={{'height': '200px', 'width': '200px'}}/>
                        <div className="card-body pt-0">
                            <h4 className="card-text text-center">Llama 3</h4>
                        </div>
                    </div>
                    <div className="card mx-5 my-4 p-0 border border-dark border-3 bg-warning-subtle" style={{'width': '300px'}}>
                        <img className="card-img-top mx-auto my-4" src="https://openlayers.org/theme/img/logo-dark.svg" alt="OpenLayers" style={{'height': '200px', 'width': '200px'}}/>
                        <div className="card-body pt-0">
                            <h4 className="card-text text-center">OpenLayers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
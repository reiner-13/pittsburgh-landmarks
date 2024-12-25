import React from 'react';

const Header = () => {
    return (
        // Return a navbar
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-white">Pittsburgh Landmarks</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="./">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="./about">About</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;
import React from 'react';

function Header() {
    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">Frank Moran</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-links" aria-controls="navigation-links" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-bars mt-1"></i></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navigation-links">
                <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/">About Me</a>
                    <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
                    <a className="nav-item nav-link" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;
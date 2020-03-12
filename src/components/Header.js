import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return(
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/react-portfolio/">Frank Moran</Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-links" aria-controls="navigation-links" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-bars mt-1"></i></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navigation-links">
                <div className="navbar-nav">
                  
                        <Link className="nav-item nav-link" to="/react-portfolio/">About Me</Link>

        
                        <Link className="nav-item nav-link" to="/react-portfolio/portfolio">Portfolio</Link>
                      
                   
                        <Link className="nav-item nav-link" to="/react-portfolio/contact">Contact</Link>
                   
                </div>
            </div>
        </nav>
    )
}

export default Header;
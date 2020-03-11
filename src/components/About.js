import React from 'react';

function About() {
    return (
        <div className="container-fluid body-content">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8 my-3">
                    <div className="content-container border rounded py-3 px-3 mx-3">
                        <h1 className="content-title border-bottom">About Me</h1>
                        <img className="about-portrait float-left mr-sm-4 mb-3" src="./assets/portrait.png" alt="Frank Moran" />
                        <p>My name is Frank</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
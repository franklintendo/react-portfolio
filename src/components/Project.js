import React from "react";

function Project(props) {
    return(
        <div className="col-12 col-md-4 mb-3">
            <a href={props.link} className="border rounded portfolio-item" id={props.class} target="_blank" rel="noopener noreferrer">
                <span className="portfolio-title">{props.title}</span>
            </a>
        </div>
    )
}

export default Project;
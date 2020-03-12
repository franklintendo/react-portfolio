import React from 'react';
import Project from './Project'


function Portfolio() {

    const projects = [ 
        {
          id: 1,
          title: "The Viral",
          class: "the-viral",
          link: "https://shrouded-woodland-22808.herokuapp.com/"
        },
        {
          id: 2,
          title: "Burger Logger",
          class: "burger-logger",
          link: "https://sleepy-ridge-45932.herokuapp.com/"
        },
        {
          id: 3,
          title: "Note Taker",
          class: "note-taker",
          link: "https://serene-everglades-25994.herokuapp.com/"
        },
        {
          id: 4,
          title: "The Cinefile",
          class: "cinefile",
          link: "https://franklintendo.github.io/the-cinefile/"
        },
        {
          id: 5,
          title: "Code Quiz",
          class: "quiz",
          link: "https://franklintendo.github.io/homework-4-code-quiz/"
        },
        {
          id: 6,
          title: "Weather Dashboard",
          class: "weather",
          link: "https://franklintendo.github.io/homework-6-weather-dashboard/"
        }
      ];

    return (
        <div className="container-fluid body-content">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8 my-3">
                <div className="content-container border rounded py-3 px-3 mx-3">
                        <h1 className="content-title border-bottom">Portfolio</h1>
                        <div className="container-fluid">
                            <div className="row">
                                {/* {props.projects} */}
                                {projects.map(project => {
                                     return <Project 
                                    key={project.id} 
                                    title={project.title} 
                                    class={project.class}
                                    link={project.link}
                                    />
                                })}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
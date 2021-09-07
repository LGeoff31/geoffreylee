import React from 'react';
import './project.css'

const Project = ({name, URL, language}) => {
    return (
        <div className="project-card">
            <p className="project-title">{name}</p>
            <a href={URL}>Link to Project</a>
            <p>Language: {language}</p>
        </div>
    )
}


export default Project;
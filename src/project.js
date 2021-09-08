import React from "react";
import "./project.css";

const Project = ({ name, liveLink, githubLink, replLink, language }) => {
  return (
    <div className="project-card">
      <p className="project-title">{name}</p>

      {liveLink && (
        <p>
          Live Link: <a href={liveLink}>website</a>
        </p>
      )}
      {replLink && (
        <p>
          Live Link and Code: <a href={replLink}>website</a>
        </p>
      )}
      {githubLink && (
        <p>
          Github Link: <a href={githubLink}>website</a>
        </p>
      )}
      <p>Language: {language}</p>
    </div>
  );
};

export default Project;

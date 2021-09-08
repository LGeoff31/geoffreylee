import React from "react";
import Project from "./project";
import "./projects.css";

const Projects = () => {
  return (
    <div className="games">
      <div className="language-wrap">
        <h2 className="languages">Python</h2>
        <Project
          name="Avatar Game"
          replLink="https://replit.com/@akyWong/Official-Avatar-Collab#main.py "
          language="Python"
        />
        <Project
          name="Christmas Game"
          replLink="https://replit.com/@kevze/Christmas-Game#main.py"
          language="Python"
        />
        <Project
          name="Tic Tac Toe"
          replLink="https://replit.com/@GeoffreyLee/Tic-tac-toe#main.py"
          language="Python"
        />
      </div>
      <div className="language-wrap">
        <h2 className="languages">Java</h2>
        <Project
          name="TypeRacer"
          githubLink="https://github.com/LGeoff31/Type-Racer"
          language="Java"
        />
        <Project
          name="Piano Tiles"
          githubLink="https://github.com/LGeoff31/Piano-Tiles"
          language="Java"
        />
        <Project
          name="Boulder Game"
          githubLink="https://github.com/LGeoff31/appa-game"
          language="Java"
        />
      </div>
      <div className="language-wrap">
        <h2 className="languages">React</h2>
        <Project
          name="Event Guesser"
          liveLink="https://event-guesser.netlify.app/"
          git="https://github.com/LGeoff31/Type-Racer"
          language="JavaScript/React"
        />
        <Project
          name="Record Guesser"
          liveLink="https://record-guesser.netlify.app/"
          language="JavaScript/React"
        />
        <Project
          name="Recipe Finder"
          liveLink="https://recipe-finder-geoffreylee.netlify.app/"
          language="JavaScript/React"
        />
      </div>
    </div>
  );
};

export default Projects;

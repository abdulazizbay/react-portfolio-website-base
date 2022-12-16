import React from "react";

const ProjectItem = ({ image, name }) => {
  return (
    <div className="projectItem ">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;

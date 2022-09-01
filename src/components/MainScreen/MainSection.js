import React from "react";

const MainSection = ({ children }) => {
  // The CSS module styling for the container of the main section container does not work on the deployed version, and I could not quite figure out how to fix it yet therefore here I temporarily use the styling from the index.css file
  return <div className="main_section__container">{children}</div>;
};

export default MainSection;

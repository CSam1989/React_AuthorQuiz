import React from "react";

import "./Choice.styles.scss";

export interface ChoiceProps {
  title: string;
}

const Choice = (props: ChoiceProps) => {
  const handleClick = () => console.log(props.title);
  return (
    <h4 className="choice" onClick={handleClick}>
      {props.title}
    </h4>
  );
};

export default Choice;

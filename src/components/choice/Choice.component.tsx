import React from "react";
import { connect } from "react-redux";
import { TurnDataActionTypes } from "../../interfaces/actions/turnData.types";
import { setAnsweredChoice } from "../../redux/actions/turnData.actions";

import "./Choice.styles.scss";

export interface ChoiceProps {
  title: string;
  setAnsweredChoice(choice: string): TurnDataActionTypes;
}

const Choice = ({ title, setAnsweredChoice }: ChoiceProps) => {
  const handleClick = () => setAnsweredChoice(title);
  return (
    <h4 className="choice" onClick={handleClick}>
      {title}
    </h4>
  );
};

const mapDispatchToProps = {
  setAnsweredChoice,
};

export default connect(null, mapDispatchToProps)(Choice);

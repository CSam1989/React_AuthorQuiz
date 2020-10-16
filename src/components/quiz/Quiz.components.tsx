import React, { useEffect } from "react";
import { getTurnDataAction } from "../../redux/actions/turnData.actions";
import { getTurnData } from "../../services/turnData.service";
import Choices from "../choicesList/Choices.components";
import Image from "../image/Image.component";

import "./Quiz.styles.scss";
import colors from "../../theme/_colors.scss";
import { connect } from "react-redux";
import { IAppState, ITurnDataState } from "../../interfaces/reducers.types";
import { TurnDataActionTypes } from "../../interfaces/actions/turnData.types";

export interface QuizProps {
  turndata: ITurnDataState;
  getTurnDataAction(turndata: ITurnDataState): TurnDataActionTypes;
}

const Quiz = ({ turndata, getTurnDataAction }: QuizProps) => {
  const { books, ...imgProps } = turndata.author;
  useEffect(() => {
    if (turndata.books.length === 0) getTurnDataAction(getTurnData());
  }, []);

  const color =
    turndata.highlight === "correct" ? colors.correct : colors.fault;

  return (
    <div className="quiz" style={{ backgroundColor: color }}>
      <Image {...imgProps} />
      <Choices books={turndata.books} />
    </div>
  );
};

const mapStateToProps = ({ turndata }: IAppState) => {
  return {
    turndata,
  };
};

const mapDispatchToProps = {
  getTurnDataAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

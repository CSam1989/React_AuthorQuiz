import React from "react";
import Choice from "../choice/Choice.component";

import "./Choices.styles.scss";

export interface ChoicesProps {
  books: string[];
}

const Choices = (props: ChoicesProps) => {
  return (
    <div className="choices">
      {props.books.map((book, index) => (
        <Choice key={index} title={book} />
      ))}
    </div>
  );
};

export default Choices;

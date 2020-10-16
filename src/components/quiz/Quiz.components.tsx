import React from "react";
import Choices from "../choicesList/Choices.components";
import Image from "../image/Image.component";

import "./Quiz.styles.scss";

const Quiz = () => {
  // const { books, ...imgProps } = turnData.author;
  return (
    <div className="quiz">
      <Image imageUrl="" name="" />
      <Choices books={[]} />
    </div>
  );
};

export default Quiz;

import { Button } from "@material-ui/core";
import * as React from "react";

export interface ContinueProps {
  handleClick(): void;
}

const Continue = ({ handleClick }: ContinueProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      className="continue"
    >
      Continue
    </Button>
  );
};

export default Continue;

import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import '../font.css';
import './switch.css';
export default function SwitchButton(props) {
  const { setDeploy } = props;

  const changeStyles = (K) => {
    if (K === true) {
      let add_button = document.getElementById("add-button");
      add_button.style.backgroundColor = "#333333";
      add_button.style.color = "#eeeeee";

      let remove_button = document.getElementById("remove-button");
      remove_button.style.backgroundColor = "#eeeeee";
      remove_button.style.color = "#333333";
    } else {
      let remove_button = document.getElementById("remove-button");
      remove_button.style.backgroundColor = "#333333";
      remove_button.style.color = "#eeeeee";

      let add_button = document.getElementById("add-button");
      add_button.style.backgroundColor = "#eeeeee";
      add_button.style.color = "#333333";
    }
  };

  return (
    <div>
      <ButtonGroup size="small" variant="contained">
        <Button
          id="add-button"
          color="primary"
          text="white"
          onClick={() => {
            setDeploy(true);
            changeStyles(true);
          }}
        >
         <p> Add<span>  <span></span></span> </p>
        </Button>

        <Button
          id="remove-button"
          color="secondary"
          text="white"
          onClick={() => {
            setDeploy(false);
            changeStyles(false);
          }}
        >
         <p> Remove </p>
        </Button>
      </ButtonGroup>
    </div>
  );
}

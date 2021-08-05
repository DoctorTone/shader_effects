import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const ControlPanel = () => {
  const PurpleSwitch = withStyles({
    switchBase: {
      color: orange[300],
      "&$checked": {
        color: orange[500],
      },
      "&$checked + $track": {
        backgroundColor: orange[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const toggleTexture = () => {};

  return (
    <div className="panel">
      <FormControlLabel
        control={<PurpleSwitch onChange={toggleTexture} />}
        label="Texture"
      />
    </div>
  );
};

export default ControlPanel;

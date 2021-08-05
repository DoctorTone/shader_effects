import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
        control={<PurpleSwitch checked={false} onChange={toggleTexture} />}
        label="Shadows"
      />
    </div>
  );
};

export default ControlPanel;

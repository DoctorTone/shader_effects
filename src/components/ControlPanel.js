import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import useStore from "../state/store";

const ControlPanel = () => {
  const { setTextureEnabled, textureEnabled } = useStore();
  const { setBounceEnabled, bounceEnabled } = useStore();
  const { setSpecularEnabled, specularEnabled } = useStore();

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

  const toggleTexture = (event) => {
    setTextureEnabled(event.target.checked);
  };

  const toggleBounce = (event) => {
    setBounceEnabled(event.target.checked);
  };

  const toggleSpecular = (event) => {
    setSpecularEnabled(event.target.checked);
  };

  return (
    <div className="panel">
      <div>
        <h3>Configuration</h3>
      </div>
      <div>
        <FormControlLabel
          control={
            <PurpleSwitch checked={textureEnabled} onChange={toggleTexture} />
          }
          label="Texture"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <PurpleSwitch checked={bounceEnabled} onChange={toggleBounce} />
          }
          label="Bounce"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <PurpleSwitch checked={specularEnabled} onChange={toggleSpecular} />
          }
          label="Specular"
        />
      </div>
    </div>
  );
};

export default ControlPanel;

import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import useStore from "../state/store";

const ShaderSelect = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const { currentShader, setCurrentShader } = useStore();

  const changeShader = (event) => {
    setCurrentShader(event.target.value);
  };

  const whiteText = {
    color: "white",
  };

  const orangeText = {
    color: "orange",
  };

  return (
    <div className="selectPanel">
      <FormControl className={classes.formControl}>
        <InputLabel style={whiteText} id="shaderSelect">
          Shader
        </InputLabel>
        <Select
          style={orangeText}
          id="shaderSelect"
          value={currentShader}
          onChange={changeShader}
        >
          <MenuItem value="Cube">Cube</MenuItem>
          <MenuItem value="Sphere">Sphere</MenuItem>
          <MenuItem value="Plane">Plane</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ShaderSelect;

import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const ShaderSelect = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color: "white",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const whiteText = {
    color: "white",
  };

  const [shader, setShader] = useState("Cube");

  const changeShader = (event) => {
    setShader(event.target.value);
  };

  return (
    <div className="selectPanel">
      <FormControl className={classes.formControl}>
        <InputLabel style={whiteText} id="shaderSelect">
          Shader
        </InputLabel>
        <Select id="shaderSelect" value={shader} onChange={changeShader}>
          <MenuItem value="Cube">Cube</MenuItem>
          <MenuItem value="Sphere">Sphere</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ShaderSelect;

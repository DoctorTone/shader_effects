import React from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const ShaderSelect = () => {
  return (
    <div className="selectPanel">
      <FormControl>
        <InputLabel id="shaderSelect">Shader</InputLabel>
        <Select id="shaderSelect">
          <MenuItem>Cube</MenuItem>
          <MenuItem>Sphere</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ShaderSelect;

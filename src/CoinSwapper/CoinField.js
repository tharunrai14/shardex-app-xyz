import React from "react";
import { Fab, Grid, InputBase, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import * as COLORS from "@material-ui/core/colors";
import './cf.css';
import '../font.css';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    width:"100%",
    minHeight: "60px",
    backgroundColor: COLORS.grey[700],
    borderRadius: theme.spacing(2),
    borderColor: COLORS.grey[100],
    borderWidth: "1px",
    borderStyle: "solid",
  },
  container_input: {
    padding: theme.spacing(1),
    minHeight: "60px",
    backgroundColor: COLORS.grey[500],
    borderRadius: theme.spacing(2),
    borderColor: COLORS.grey[900],
    borderWidth: "1px",
    borderStyle: "solid",
    marginLeft: "50%",
    textAlign: "right",
    color:"black"
  },
  container_blank: {
    padding: theme.spacing(1),
    minHeight: "80px",
    borderRadius: theme.spacing(2),
  },
  grid: {
    height: "40px",
  },
 
    
  
  input: {
    ...theme.typography.h5,
    width: "100%",
  },
  inputBase: {
    textAlign: "right",
  },
}));

CoinField.propTypes = {
  onClick: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  activeField: PropTypes.bool.isRequired,
};

export function RemoveLiquidityField1(props) {
  // This component is used to selecting a coin and entering a value, the props are explained below:
  //      onClick - (string) => void - Called when the button is clicked
  //      symbol - string - The text displayed on the button
  //      value - string - The value of the text field
  //      onChange - (e) => void - Called when the text field changes
  //      activeField - boolean - Whether text can be entered into this field or not

  const classes = useStyles();
  const { onClick, symbol, value, onChange, activeField } = props;
  return (
    <div className={classes.container_blank}>
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.grid}
      >
        {/* Button */}
        <Grid item xs={3}>
         <button id="rselectbutton"
            size="small"
            variant="extended"
            onClick={onClick}
            className={classes.fab}
          >
            {symbol}
            <ExpandMoreIcon />
          </button>
        </Grid>
        {/* Text Field */}
        <Grid item xs={9}  id="inputfr">
          <InputBase id="inputfrb"
            value={value}
            type="number"
            onChange={onChange}
            placeholder="Enter LP Amount"
            disabled={!activeField}
            classes={{
              root: classes.container_input,
              input: classes.inputBase,
            }} 
            
          />
        </Grid>
      </Grid>
    </div>
  );
}

export function RemoveLiquidityField2(props) {
  // This component is used to selecting a coin and entering a value, the props are explained below:
  //      onClick - (string) => void - Called when the button is clicked
  //      symbol - string - The text displayed on the button
  //      value - string - The value of the text field
  //      onChange - (e) => void - Called when the text field changes
  //      activeField - boolean - Whether text can be entered into this field or not

  const classes = useStyles();
  const { onClick, symbol } = props;

  return (
    <div className={classes.container_blank}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.grid}
      >
        {/* Button */}
        <Grid item xs={3}>
          <button id="rselectbutton2"
            size="small"
            variant="extended"
            onClick={onClick}
            className={classes.button}
          >
            {symbol}
            <ExpandMoreIcon />
          </button>
        </Grid>
      </Grid>
    </div>
  );
}

export default function CoinField(props) {
  // This component is used to selecting a token and entering a value, the props are explained below:
  //      onClick - (string) => void - Called when the button is clicked
  //      symbol - string - The text displayed on the button
  //      value - string - The value of the text field
  //      onChange - (e) => void - Called when the text field changes
  //      activeField - boolean - Whether text can be entered into this field or not

  const classes = useStyles();
  const { onClick, symbol, value, onChange, activeField } = props;

  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.grid}
      >
        {/* Button */}
        <Grid item xs={3}>
          <button class="selectbutton"
            size="small"
            variant="extended"
            onClick={onClick}
            className={classes.button}
          >
            {symbol}
            <ExpandMoreIcon />
          </button>
        </Grid>

        {/* Text Field */}
        <Grid item xs={9}>
          <InputBase class="inputf"
          type="number" 
            value={value}
            onChange={onChange}
            placeholder="0.0"
            disabled={!activeField}
            classes={{ root: classes.input, input: classes.inputBase }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

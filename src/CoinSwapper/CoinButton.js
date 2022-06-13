import React from "react";
import { ButtonBase, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import * as COLORS from "@material-ui/core/colors";
import '../font.css'
import './coinbutton.css'
const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
   
  },
  coinName: {
    opacity: 0.6,
  },
}));

CoinButton.propTypes = {
  coinName: PropTypes.string.isRequired,
  coinAbbr: PropTypes.string.isRequired,
 coinicon:PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function CoinButton(props) {
  const { coinName, coinAbbr,coinicon, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <ButtonBase id="button" focusRipple className={classes.button} onClick={onClick}>
      <Grid container direction="column">
        <p>{coinAbbr}</p>
        <Typography variant="body2" className={classes.coinName}>
          <p>{coinName}</p>
          <div>{coinicon}</div>        </Typography>
      </Grid>
    </ButtonBase>
  );
}

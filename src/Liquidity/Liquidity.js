import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import SwitchButton from "./SwitchButton";
import LiquidityDeployer from "./LiquidityDeployer";
import LiquidityRemover from "./RemoveLiquidity";
import "./l.css";
const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    maxWidth: 400,
    marginTop:"0px",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(.1),
  },
  footer: {
    marginTop: "155px",
  },
});

const useStyles = makeStyles(styles);

function Liquidity(props) {
  const classes = useStyles();

  const [deploy, setDeploy] = React.useState(true);

  const deploy_or_remove = (deploy) => {
    if (deploy === true) {
      return <LiquidityDeployer network={props.network}/>;
    }
    return <LiquidityRemover network={props.network}/>;
  };

  return (
    <div>
      <Container >
        <Paper id="paper" className={classes.paperContainer}>
          <Typography variant="h5" className={classes.title}>
            <SwitchButton setDeploy={setDeploy} />
          </Typography>

          {deploy_or_remove(deploy)}
        </Paper>
      </Container><div id="paperout"></div>

      <Grid
        container
        className={classes.footer}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
      >
        
        
      </Grid>
    </div>
  );
}

export default Liquidity;

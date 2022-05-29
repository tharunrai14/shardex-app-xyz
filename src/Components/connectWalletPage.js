import React from "react";
import {
  AppBar,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import '../App.css'
import { grey } from '@mui/material/colors';

const color = grey[900];

const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    maxWidth: 400,
    margin: "auto",
    marginTop: "200px",
    color:color
     },
  fullWidth: {
    width: "100%",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  
  },
  hr: {
    width: "100%",
  },
  balance: {
    padding: theme.spacing(1),
    overflow: "wrap",
    textAlign: "center",
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(0.4),
  },
  footer: {
    marginTop: "155px",
  },
});

const useStyles = makeStyles(styles);

function ConnectWalletPage() {
  const classes = useStyles();
  return (
    <div>
      <div className="Title">
        <h1 className="navbar-logo">
          
        </h1>
      </div>

      <Container>
        <Paper className={classes.paperContainer}>
          <Typography
          
            variant="body1"
            
            className={classes.title}
            
          >
            <h3> Connect to MetaMask To Use Shardex&nbsp; </h3>



          </Typography>
          <Typography 
          font-size='2rem'
          
          
          ><h9>Make Sure You Are Conected to Shardeum Liberty</h9>
          &nbsp;</Typography>
        </Paper>
      </Container>

      <Grid
        container
        className={classes.footer}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
      >
        <p>
         </p>
      </Grid>
    </div>
  );
}

export default ConnectWalletPage;

import React from "react";
import logo from './logobt.svg';
import {
  AppBar,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import "./cw.css";
import "../font.css";
import { grey } from '@mui/material/colors';



const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    maxWidth: 400,
    margin: "auto",
    marginTop: "400px",
    textAlign:"CenterFocusStrong"
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
    <div >  <img src={logo} alt="Logo" />
     
      <Container >
        <Paper id="paperr" className={classes.paperContainer}>
          <Typography
          
            variant="body1"
            
            className={classes.title}
            
          >
            <span id="bold"> Connect to Your Web3 Wallet &nbsp; </span>



          </Typography>
          <Typography 
          font-size='2rem'
          
          
          ><p>Make Sure You Are Conected to Shardeum Liberty



          </p>

          <p><button id="docsb" href="">Shardeum Docs</button></p>
          &nbsp;</Typography>
         <span id="smalltxt">Try <span><a  href="javascript:history.go(0)">Refreshing</a></span> Page If you are connected</span> 
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

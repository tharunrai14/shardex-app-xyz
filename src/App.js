import React from "react";
import "./App.css";
import History from "./history/history";
import { ethers } from "ethers";
import Web3Provider from "./network";
import NarBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";

import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./font.css";
import { TabScrollButton } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9e9e9e",
      contrastText: "#ffffff",
    },
  },
});

const App = () => {
  return (




    
    <div className="App">

      
      
        
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <Web3Provider
            render={(network) => (
              <div>
                <NarBar />
                <Route exact path="/">
                  <CoinSwapper network={network} />
                </Route>
                
                

                <Route exact path="/Liquidity">
                  <Liquidity network={network} />
                </Route>
                <Route path="/history" exact component={History} />
              </div>
            )}
          ></Web3Provider>
        </ThemeProvider>
      </SnackbarProvider>

      <div>
 <span id='stickyb'>Shardex v1.0 :This App is Currently Under Heavy Development... Have Fun Testing </span>
 
 </div>
      </div>


      
  );
};


export default App;

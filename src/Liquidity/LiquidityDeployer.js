import React, { useEffect } from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { useSnackbar } from "notistack";
import {
  getBalanceAndSymbol,
  getReserves,
} from "../ethereumFunctions";
import '../font.css';
import './liquiditydeployer.css';
import { addLiquidity, quoteAddLiquidity } from "./LiquidityFunctions";

import CoinField from "../CoinSwapper/CoinField";
import CoinDialog from "../CoinSwapper/CoinDialog";
import LoadingButton from "../Components/LoadingButton";
import WrongNetwork from "../Components/wrongNetwork";

const styles = (theme) => ({
 /*paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    width: "40%",
    overflow: "wrap",
    background: "#f0f0f0",
    color: "white",
  },*/
  fullWidth: {
    width: "100%",
  },
  values: {
    width: "50%",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.1),
    marginBottom: theme.spacing(1),
  },
  hr: {
    width: "100%",
    marginBottom:"20px",
    
  },
  balance: {
    padding: theme.spacing(1),
    overflow: "wrap",
    textAlign: "center",
  },
  buttonIcon: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(0.4),
    
  },
});

const useStyles = makeStyles(styles);

function LiquidityDeployer(props) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  // Stores a record of whether their respective dialog window is open
  const [dialog1Open, setDialog1Open] = React.useState(false);
  const [dialog2Open, setDialog2Open] = React.useState(false);
  const [wrongNetworkOpen, setwrongNetworkOpen] = React.useState(false);

  // Stores data about their respective coin
  const [coin1, setCoin1] = React.useState({
    address: undefined,
    symbol: undefined,
    balance: undefined,
  });
  const [coin2, setCoin2] = React.useState({
    address: undefined,
    symbol: undefined,
    balance: undefined,
  });

  // Stores the current reserves in the liquidity pool between coin1 and coin2
  const [reserves, setReserves] = React.useState(["0.0", "0.0"]);

  // Stores the current value of their respective text box
  const [field1Value, setField1Value] = React.useState("");
  const [field2Value, setField2Value] = React.useState("");

  // Controls the loading button
  const [loading, setLoading] = React.useState(false);

  // Stores the user's balance of liquidity tokens for the current pair
  const [liquidityTokens, setLiquidityTokens] = React.useState("");

  // Used when getting a quote of liquidity
  const [liquidityOut, setLiquidityOut] = React.useState([0, 0, 0]);

  // Switches the top and bottom coins, this is called when users hit the swap button or select the opposite
  // token in the dialog (e.g. if coin1 is TokenA and the user selects TokenB when choosing coin2)
  const switchFields = () => {
    let oldField1Value = field1Value;
    let oldField2Value = field2Value;

    setCoin1(coin2);
    setCoin2(coin1);
    setField1Value(oldField2Value);
    setField2Value(oldField1Value);
    setReserves(reserves.reverse());
  };

  // These functions take an HTML event, pull the data out and puts it into a state variable.
  const handleChange = {
    field1: (e) => {
      setField1Value(e.target.value);
    },
    field2: (e) => {
      setField2Value(e.target.value);
    },
  };

  // Turns the account's balance into something nice and readable
  const formatBalance = (balance, symbol) => {
    if (balance && symbol)
      return parseFloat(balance).toPrecision(4) + " " + symbol;
    else return "0.0";
  };

  // Turns the coin's reserves into something nice and readable
  const formatReserve = (reserve, symbol) => {
    if (reserve && symbol) return parseFloat(reserve).toPrecision(3)+ " " + symbol;
    else return "0.0";
  };

  // Determines whether the button should be enabled or not
  const isButtonEnabled = () => {

    // If both coins have been selected, and a valid float has been entered for both, which are less than the user's balances, then return true
    const parsedInput1 = parseFloat(field1Value);
    const parsedInput2 = parseFloat(field2Value);
    return (
      coin1.address &&
      coin2.address &&
      parsedInput1 !== NaN &&
      0 < parsedInput1 &&
      parsedInput2 !== NaN &&
      0 < parsedInput2 &&
      parsedInput1 <= coin1.balance &&
      parsedInput2 <= coin2.balance
    );
  };



  const deploy = () => {
    console.log("Attempting to deploy liquidity...");
    setLoading(true);

    addLiquidity(
      coin1.address,
      coin2.address,
      field1Value,
      field2Value,
      '0',
      '0',
      props.network.router,
      props.network.account,
      props.network.signer
    )
      .then(() => {
        setLoading(false);

        // If the transaction was successful, we clear to input to make sure the user doesn't accidental redo the transfer
        setField1Value("");
        setField2Value("");
        enqueueSnackbar("Deployment Successful", { variant: "success" });
      })
      .catch((e) => {
        setLoading(false);
        enqueueSnackbar("Deployment Failed (" + e.message + ")", {
          variant: "error",
          autoHideDuration: 10000,
        });
      });
  };

  // Called when the dialog window for coin1 exits
  const onToken1Selected = (address) => {
    // Close the dialog window
    setDialog1Open(false);

    // If the user inputs the same token, we want to switch the data in the fields
    if (address === coin2.address) {
      switchFields();
    }
    // We only update the values if the user provides a token
    else if (address) {
      // Getting some token data is async, so we need to wait for the data to return, hence the promise
      getBalanceAndSymbol(
        props.network.account,
        address,
        props.network.provider,
        props.network.signer,
        props.network.weth.address,
        props.network.coins
        ).then((data) => {
        setCoin1({
          address: address,
          symbol: data.symbol,
          balance: data.balance,
        });
      });
    }
  };

  // Called when the dialog window for coin2 exits
  const onToken2Selected = (address) => {
    // Close the dialog window
    setDialog2Open(false);

    // If the user inputs the same token, we want to switch the data in the fields
    if (address === coin1.address) {
      switchFields();
    }
    // We only update the values if the user provides a token
    else if (address) {
      // Getting some token data is async, so we need to wait for the data to return, hence the promise
      getBalanceAndSymbol(props.network.account,
        address,
        props.network.provider,
        props.network.signer,
        props.network.weth.address,
        props.network.coins
        ).then((data) => {
        setCoin2({
          address: address,
          symbol: data.symbol,
          balance: data.balance,
        });
      });
    }
  };

  // This hook is called when either of the state variables `coin1.address` or `coin2.address` change.
  // This means that when the user selects a different coin to convert between, or the coins are swapped,
  // the new reserves will be calculated.
  useEffect(() => {
    console.log(
      "Trying to get reserves between:\n" + coin1.address + "\n" + coin2.address
    );

    if (coin1.address && coin2.address && props.network.account) {
      getReserves(
        coin1.address,
        coin2.address,
        props.network.factory,
        props.network.signer,
        props.network.account
        ).then(
        (data) => {
          setReserves([data[0], data[1]]);
          setLiquidityTokens(data[2]);
        }
      );
    }
  }, [coin1.address, coin2.address, props.network.account, props.network.factory, props.network.signer]);

  // This hook is called when either of the state variables `field1Value`, `field2Value`, `coin1.address` or `coin2.address` change.
  // It will give a preview of the liquidity deployment.
  useEffect(() => {
    if (isButtonEnabled()) {
      console.log("Trying to preview the liquidity deployment");

      quoteAddLiquidity(
        coin1.address,
        coin2.address,
        field1Value,
        field2Value,
        props.network.factory,
        props.network.signer
      ).then((data) => {
        // console.log(data);
        console.log("TokenA in: ", data[0]);
        console.log("TokenB in: ", data[1]);
        console.log("Liquidity out: ", data[2]);
        setLiquidityOut([data[0], data[1], data[2]]);
      });
    }
  }, [coin1.address, coin2.address, field1Value, field2Value, props.network.factory, props.network.signer]);

  // This hook creates a timeout that will run every ~10 seconds, it's role is to check if the user's balance has
  // updated has changed. This allows them to see when a transaction completes by looking at the balance output.
  useEffect(() => {
    const coinTimeout = setTimeout(() => {
      console.log("Checking balances & Getting reserves...");

      if (coin1.address && coin2.address && props.network.account) {
        getReserves(
          coin1.address,
          coin2.address,
          props.network.factory,
          props.network.signer,
          props.network.account
        ).then((data) => {
          setReserves([data[0], data[1]]);
          setLiquidityTokens(data[2]);
        });
      }

      if (coin1.address && props.network.account &&!wrongNetworkOpen) {
        getBalanceAndSymbol(
          props.network.account,
          coin1.address,
          props.network.provider,
          props.network.signer,
          props.network.weth.address,
          props.network.coins
          ).then(
          (data) => {
            setCoin1({
              ...coin1,
              balance: data.balance,
            });
          }
        );
      }
      if (coin2.address && props.network.account &&!wrongNetworkOpen) {
        getBalanceAndSymbol(
          props.network.account,
          coin2.address,
          props.network.provider,
          props.network.signer,
          props.network.weth.address,
          props.network.coins
          ).then(
          (data) => {
            setCoin2({
              ...coin2,
              balance: data.balance,
            });
          }
        );
      }
    }, 10000);

    return () => clearTimeout(coinTimeout);
  });

  return (
    
    <div id="box">

      {/* Dialog Windows */}
      <CoinDialog
        open={dialog1Open}
        onClose={onToken1Selected}
        coins={props.network.coins}
        signer={props.network.signer}
      />
      <CoinDialog
        open={dialog2Open}
        onClose={onToken2Selected}
        coins={props.network.coins}
        signer={props.networksigner}
      />
      <WrongNetwork
        open={wrongNetworkOpen}
      />

      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12} className={classes.fullWidth}>
          <CoinField
            activeField={true}
            value={field1Value}
            onClick={() => setDialog1Open(true)}
            onChange={handleChange.field1}
            symbol={coin1.symbol !== undefined ? coin1.symbol : <span>Select</span>}
          />
        </Grid>
        <p id='bal1'> Balance {formatBalance(coin1.balance,coin1.symbol)}
   </p>
        <Grid item xs={12} className={classes.fullWidth}>
          <CoinField
            activeField={true}
            value={field2Value}
            onClick={() => setDialog2Open(true)}
            onChange={handleChange.field2}
            symbol={coin2.symbol !== undefined ? coin2.symbol : <span>Select</span>}
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={4}
        className={classes.balance}
      >   <p id='bal2'> Balance {formatBalance(coin2.balance,coin2.symbol)}
      </p>
      <hr id="hrr"></hr>
        <hr className={classes.hr} />

        
        <Grid
          container
          item
          className={classes.values}
          direction="column"
          alignItems="center"
          spacing={2}
        >
          {/*Reserves display*/ }
          <p id ="lbal">Your Liquidty Pool Balance  :    {formatReserve(liquidityTokens, "UNI-V2")}</p>
         <h5 id="heading">Pair Reserves </h5>
         <span id="c1res">{formatReserve(reserves[0], coin1.symbol)}</span>
         <span id="c2res">{formatReserve(reserves[1], coin2.symbol)}</span>

         
         
         

        

         
        </Grid>
        
      <p id="tadd1">Tokens1 to Add  {formatBalance(liquidityOut[0], coin1.symbol)} </p>
       <p id="tadd2">tokens2 to add {formatBalance(liquidityOut[1], coin2.symbol)}</p>
       <p id="ltget">Liquidity tokens In  :  {formatReserve(liquidityOut[2],"SHX Lp" )}</p>
       
        

     
      </Grid>
      <Grid container direction="column" alignItems="center" spacing={2}>
       
       
       
       
       <p></p>






       <p><p><p></p></p><p><p></p></p></p><p>



<hr></hr>
       </p>
        <LoadingButton id="b"
          loading={loading}
          valid={isButtonEnabled()}
          success={false}
          fail={false}
          onClick={deploy}
        >
          <AccountBalanceIcon className={classes.buttonIcon} />
         <span id='p'>Provide</span> 
        </LoadingButton>
      </Grid>
    </div>
  );
}

export default LiquidityDeployer;

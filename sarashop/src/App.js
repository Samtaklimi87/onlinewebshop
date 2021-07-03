import React, { useRef } from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ShowCounter from "./components/Sessions/Session1/ShowCounter";
import Header from "./components/Sessions/Session1/Header";
import Form from "./components/Sessions/Session1/Form";
import Session2 from "./components/Sessions/Session2/Session2";
import UsingEventListener from "./components/Sessions/Session2/UsingEventListener";

const Session3 = () => {
  const inputRef = useRef();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          im here
        </Grid>
      </Grid>
    </div>
  );
};

const Session1 = () => {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ShowCounter />
        </Grid>
        <Grid item xs={4}>
          <Header />
        </Grid>
        <Grid item xs={4}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};

function App() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>First Session </h2>
        <h3 className={classes.headerTxt}> useState</h3>
        <Session1 />
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Second Session</h2>
        <h3 className={classes.headerTxt} style={{ color: "blue" }}>
          useEffect
        </h3>
        <Session2 />
        <UsingEventListener />
      </div>

      <div>
        <h2 style={{ textAlign: "center" }}>Third Session</h2>
        <h3 className={classes.txtCol} style={{ textAlign: "center" }}>
          About hooks{" "}
        </h3>
        <Session3 />
      </div>
    </div>
  );
}
const useStyles = makeStyles({
  headerTxt: {
    textAlign: "center",
  },
  txtCol: {
    color: "blue",
  },
});
export default App;

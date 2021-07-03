import React, { useState } from "react";
import "../../../App.css";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function ShowCounter() {
  const [count, setCount] = useState(0);
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper>
          <button
            onClick={() => setCount(count + 1)}
            style={{ backgroundColor: "#345ee4" }}
          >
            +
          </button>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        {count}
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <button onClick={() => setCount(count - 1)}>-</button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ShowCounter;

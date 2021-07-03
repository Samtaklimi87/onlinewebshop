import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useFetch } from "../../useFetch";

function Session2() {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
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
      <Grid item xs={12}>
        <div>{!data ? "data is loading..." : data} ;</div>
      </Grid>
    </Grid>
  );
}

export default Session2;

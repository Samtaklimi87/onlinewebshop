import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import FormComponents from "../../layout/FormComponents";

function Form() {
  const [values, handleChanges] = FormComponents({ email: "", pass: "" });

  return (
    <div>
      <Paper style={{ backgroundColor: "red", padding: 20 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            Email:
            <input name="email" value={values.email} onChange={handleChanges} />
          </Grid>
          <Grid item xs={12}>
            Password:
            <input
              type="password"
              name="password"
              value={values.pass}
              onChange={handleChanges}
            />
          </Grid>
        </Grid>
      </Paper>
      {values.email}
    </div>
  );
}
export default Form;

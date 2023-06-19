/* eslint-disable no-unused-vars */
import { Grid, Paper, TextField, Button, Alert } from "@mui/material";
import { useFormik } from "formik";
import { paperStyle } from "./AuthStyles";
import { confirmValidations } from "./validations";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const ConfirmPage = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const { handleSubmit, handleChange, touched, values, errors } = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: confirmValidations,
    onSubmit: ({ email, code }, bug) => {
      const data = {
        email: email,
        code: code,
      };

      axios
        .post("http://localhost:3300/api/webuser/confirm", data)
        .then((response) => {
          console.log(response.data);
          login(data.email);
          navigate("/");
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  });

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          {errors.general && <Alert severity="error">{errors.general}</Alert>}
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="standard"
            placeholder="Enter you email"
            onChange={handleChange}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            name="code"
            label="Code"
            variant="standard"
            placeholder="Enter code"
            onChange={handleChange}
            value={values.code}
            error={touched.code && Boolean(errors.code)}
            helperText={touched.code && errors.code}
          />
          <Grid marginTop={3}>
            <Button
              fullWidth
              textAlign="center"
              type="submit"
              variant="contained"
              color="primary"
            >
              Confirm code
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

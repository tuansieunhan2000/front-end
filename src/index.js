import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, TextField } from "@material-ui/core";
import useForm from "react-hook-form";
import { object, string } from "yup";

const App = () => {
  const schema = object().shape({
    username: string().required("Username is required"),
    password: string().required("Password is required")
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  const onSubmit = data => {
    console.log(data);
  };

  const style = {
    margin: "auto",
    "max-width": "300px"
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={style}>
      <TextField
        name="username"
        error={!!errors.username}
        label="Username"
        helperText={errors.username ? errors.username.message : ""}
        type="email"
        inputRef={register}
        fullWidth
      />
      <TextField
        name="password"
        error={!!errors.password}
        label="Password"
        inputRef={register}
        helperText={errors.password ? errors.password.message : ""}
        type="password"
        fullWidth
      />

      <Button color="primary" type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </form>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

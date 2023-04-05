import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const endpoint = "https://ecommerce-proyect.onrender.com";

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const submit = (data) => {
    axios
      .post(`${endpoint}/users/login`, data)
      .then((res) => {
        alert("sesion iniciada");
        navigate("/");
        console.log(res);
        localStorage.setItem("tokenUser", res.data.token);
        localStorage.setItem("userDate", JSON.stringify(res.data.user));
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          alert("la contraseña o correo son invalidos");
        }
      });
  };
  return (
    <Form onSubmit={handleSubmit(submit)} className="form--login flexColumn">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;

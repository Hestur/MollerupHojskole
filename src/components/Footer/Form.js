import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import "./Form.css";

export default function FormFooter() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group md="4" className="formgrp1" controlId="validationCustom01">
        <Form.Label className="label">Spørg os</Form.Label>
        <br />
        <Form.Control
          required
          className="input1"
          type="text"
          placeholder="Navn..."
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" className="formgrp2" controlId="formBasicEmail">
        <Form.Control
          required
          className="input2"
          type="email"
          placeholder="Email..."
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" className="formgrp3">
        <Form.Control
          type="text"
          className="input3"
          placeholder="Besked..."
          required
        />
      </Form.Group>
      <button className="submitbtn" type="submit">
        Send
      </button>
    </Form>
  );
}

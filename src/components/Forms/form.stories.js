import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./form";
import Select from "./select";
import "./form.css";

storiesOf("Forms", module)
  .add("Input small", () => <Form label="Email" type="input-small" />)
  .add("Input medium", () => <Form label="Email" type="input-medium" />)
  .add("Input large", () => <Form label="Email" type="input-large" />)
  .add("Input large", () => <Form label="Email" type="input-large" />)
  .add("Select small", () => (
    <Select label="Email" type="select-small" option="placeholder" />
  ))
  .add("Select Medium", () => (
    <Select label="Email" type="select-medium" option2="placeholder" />
  ))
  .add("Select Large", () => (
    <Select label="Email" type="select-large"option="Option1" option2="option2" option3="Option3" />
  ))
  .add("Select-light small", () => (
    <Select label="Email" type="select-smallL" option="placeholder" />
  ))
  .add("Select-light Medium", () => (
    <Select label="Email" type="select-mediumL" option2="placeholder" />
  ))
  .add("Select-light Large", () => (
    <Select label="Email" type="select-largeL"option="Option1" option2="option2" option3="Option3" />
  ))

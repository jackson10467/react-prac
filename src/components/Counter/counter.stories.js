import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./counter";
import "./counter.css";

storiesOf("Counter", module)
  .add("Counter", () => <Counter value={5} min={0} max={5} />)
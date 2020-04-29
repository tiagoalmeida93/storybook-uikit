import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import React from "react";

export default {
  title: "Buttons",
  component: Button,
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const EmojisAulapp = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

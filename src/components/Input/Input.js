import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import "./styles.css";

export default function Input({ e }) {
  const [data] = useState(e);

  return (
    <input className="danger" type="text" value={data} onClick={action(data)} />
  );
}

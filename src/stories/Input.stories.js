import React from "react";
import Input from "../components/Input/Input";

export default {
  component: Input,
  title: "Inputs",
};

export const IES2Input = () => <Input onClick={(e) => e.target.value} />;

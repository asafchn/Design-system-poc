import React from "react";
import { Input } from "./Input";

export default {
  title: "InputText",
  component: Input,
};

interface ArgsInterface {
  onChange: (str: string) => void;
  withLabel: string;
  noBorder: boolean;
}

export function defaultInput(args: ArgsInterface) {
  return <Input {...args}></Input>;
}

defaultInput.args = {
  onChange: (str: string) => {
    alert(str);
  },
  withLabel: "",
  noBorder: false,
};

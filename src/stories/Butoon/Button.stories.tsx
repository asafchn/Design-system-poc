import React from "react";
import { Button, ButtonInterface, ButtonTypes, ButtonSizes } from "./Button";
import "../../index.css";
export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],

  args: {
    type: ButtonTypes.Primary,
    size: ButtonSizes.Small,
    text: "Button",
    onClick() {
      alert("clicked");
    },
  },
};

export function defaultButton(args: ButtonInterface) {
  return <Button {...args}></Button>;
}

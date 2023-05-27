import React from "react";
import "./Button.css";
export interface ButtonInterface {
  type: ButtonTypes;
  size: ButtonSizes;
  text: string;
  onClick: () => void;
}

export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
}

export enum ButtonSizes {
  Small = "small",
  Medium = "medium",
  Big = "big",
}

export function Button({ size, type, text, onClick }: ButtonInterface) {
  return (
    <div onClick={onClick} className={`button ${size} ${type}`}>
      {text}
    </div>
  );
}

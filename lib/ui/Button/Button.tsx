import cn from "classnames";
import {
  ButtonHTMLAttributes,
  CSSProperties,
} from "react";

import "./Button.module.sass";

export type ButtonForExtend = {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "modal";
  marginTop?: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  style?: CSSProperties;
};

export type ButtonProps = ButtonForExtend &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  width = "187px",
  height = "50px",
  marginTop = "0px",
  disabled = false,
  style = {},
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn({
        [`button--variant-${variant}`]: variant,
        [`button--width-${width}`]: width,
        [`button--height-${height}`]: height,
        [`button--marginTop-${marginTop}`]:
          marginTop,
        [`button--disabled-${disabled}`]:
          disabled,
      })}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

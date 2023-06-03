import cn from "classnames";
import {
  CSSProperties,
  ElementType,
} from "react";

import "./Typography.sass";

const ValidElementTypes: readonly ElementType[] =
  ["h1", "h2", "h3", "h4", "span", "p"] as const;

type TagVariants = Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "span" | "p"
>;

type TagKeys = keyof TagVariants;

const getElementType = (
  stringTag: string
): ElementType => {
  if (
    ValidElementTypes.includes(
      stringTag as ElementType
    )
  ) {
    return stringTag as ElementType;
  }
  return "span";
};

type CustomStyles = {
  textAlign?: CSSProperties["textAlign"];
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
  fontFamily?: CSSProperties["fontFamily"];
  textDecoration?: CSSProperties["textDecoration"];
  marginTop?: CSSProperties["marginTop"];
  lineHeight?: CSSProperties["lineHeight"];
  width?: CSSProperties["width"];
  mb?: CSSProperties["marginBottom"];
  letterSpacing?: CSSProperties["letterSpacing"];
};
type ComponentProps = {
  tag?: TagKeys;
};
export type TypographyProps =
  JSX.IntrinsicElements[TagKeys] &
    CustomStyles &
    ComponentProps;

export const Typography = ({
  tag = "span",
  fontSize = "16px",
  fontWeight = "400",
  color = "black",
  fontFamily = "Roboto",
  textDecoration = "none",
  textAlign = "left",
  marginTop = "0px",
  lineHeight = "normal",
  width = "0px",
  mb = "0px",
  letterSpacing = "0px",
  ...props
}: TypographyProps) => {
  const Component = tag
    ? getElementType(tag)
    : "span";
  return (
    <Component
      className={cn({
        [`typography--variant-${tag}`]: tag,
        [`typography--fontSize-${fontSize}`]:
          fontSize,
        [`typography--fontWeight-${fontWeight}`]:
          fontWeight,
        [`typography--color-${color}`]: color,
        [`typography--fontFamily-${fontFamily}`]:
          fontFamily,
        [`typography--textDecoration-${textDecoration}`]:
          textDecoration,
        [`typography--textAlign-${textAlign}`]:
          textAlign,
        [`typography--lineHeight-${lineHeight}`]:
          lineHeight,
        [`typography--marginTop-${marginTop}`]:
          marginTop,
        [`typography--width-${width}`]: width,
        [`typography--marginBottom-${mb}`]: mb,
        [`typography--letterSpacing-${letterSpacing}`]:
          letterSpacing,
      })}
      {...props}
    ></Component>
  );
};

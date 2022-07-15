import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import cn from "classnames";

import "./Button.scss";

type ButtonTypes = "default" | "outline" | "text";
type ButtonSizes = "sm" | "md" | "lg";
type ButtonColors = "default" | "primary" | "secondary" | "danger";
type IconPosition = "left" | "right";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonTypes;
  size?: ButtonSizes;
  color?: ButtonColors;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  shadow?: boolean;
  isDisabled?: boolean;
}

const Button = ({
  children,
  icon,
  iconPosition = "left",
  variant = "default",
  size = "md",
  color = "default",
  className,
  shadow = true,
  isDisabled = false,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button
      disabled={isDisabled}
      className={cn(
        `button`,
        `button--${variant}`,
        `button--${size}`,
        `button--${color}`,
        `${isDisabled ? "button--disabled" : ""}`,
        `${shadow ? "button--shadow-on" : "button--shadow-off"}`,
        `${icon !== undefined ? `button--${iconPosition}-icon` : ""}`,
        className
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;

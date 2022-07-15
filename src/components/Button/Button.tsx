import { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

import "./Button.scss";

type ButtonTypes = "default" | "outline" | "text";
type ButtonSizes = "sm" | "md" | "lg";
type ButtonColors = "default" | "primary" | "secondary" | "danger";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonTypes;
  size?: ButtonSizes;
  color?: ButtonColors;
  icon?: any;
  buttonShadowIsDisabled?: boolean;
  buttonIsDisabled?: boolean;
}

const Button = ({
  children,
  icon,
  variant = "default",
  size = "md",
  color = "default",
  className,
  buttonShadowIsDisabled = false,
  buttonIsDisabled = false,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={cn(
        `button`,
        `button--${variant}`,
        `button--${size}`,
        `button--${color}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

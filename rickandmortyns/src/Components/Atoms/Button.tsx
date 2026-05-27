import MuiButton from "@mui/material/Button";
import type { ReactNode } from "react";

type ButtonColor = "primary" | "secondary" | "error" | "success";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: () => void;
};

function Button({
  children,
  type = "button",
  disabled = false,
  color = "primary",
  size = "medium",
  onClick,
}: ButtonProps) {
  return (
    <MuiButton
      type={type}
      disabled={disabled}
      color={color}
      size={size}
      onClick={onClick}
      variant="contained"
    >
      {children}
    </MuiButton>
  );
}

export default Button;

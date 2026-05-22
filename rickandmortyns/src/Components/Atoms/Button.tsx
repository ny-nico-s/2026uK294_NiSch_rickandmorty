import MuiButton from "@mui/material/Button";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

function Button({
  children,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <MuiButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      variant="contained"
    >
      {children}
    </MuiButton>
  );
}

export default Button;

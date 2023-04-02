import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, type = "button", className, ...restProps }) => {
  return (
    <button className={className} {...restProps} type={type}>
      {children}
    </button>
  );
};

export default Button;

import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  className?: String;
}

const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        className +
        " inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-2 text-base font-medium text-white hover:bg-indigo-700"
      }
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

function Logo(props) {
  const { variant = "primary" } = props;

  const variantClasses = {
    primary: "text-primary text-4xl animate-bounce",
    secondary: "text-white text-xl",
  };

  return (
    <div
      className={`font-poppins tracking-wide text-center mb-8 ${
        variantClasses[variant] || variantClasses.primary
      }`}
    >
      <span className="font-bold">FINE</span>
      bank
      <span className="font-bold">.IO</span>
    </div>
  );
}

export default Logo;

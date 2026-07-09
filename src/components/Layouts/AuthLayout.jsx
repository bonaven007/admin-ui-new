import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "../Elements/ThemeToggle";

function AuthLayout(props) {
  const { children } = props;
  const { theme, mode } = useContext(ThemeContext);
  return (
    <>
      <main className={`min-h-screen bg-special-mainBg flex items-center justify-center ${theme.name} ${mode === "dark" ? "dark" : "light"}`}>
        {/* container start */}
        <div className="w-full max-w-sm">
          <Logo />
          {children}
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
        {/* container end */}
      </main>
    </>
  );
}

export default AuthLayout;
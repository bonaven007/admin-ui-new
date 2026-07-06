import { useState, useContext } from "react";
import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/authContext";
import { logoutService } from "../../context/authContext";

function MainLayout(props) {
  const { children } = props;
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

    const { theme, setTheme } = useContext(ThemeContext);
  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    {
      id: 3,
      name: "Transaction",
      icon: <Icon.Transaction />,
      link: "/transaction",
    },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  const { user, logout } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logoutService();
      logout();
    } catch (err) {
      console.error(err);
      if (err.status === 401) {
        logout();
      }
    }
  };

  return (
    <>
      <div className={`flex min-h-screen ${theme.name}`}>
        {/* ===== SIDEBAR ===== */}
        <aside className="flex flex-col justify-between bg-special-bg text-white w-28 sm:w-56 py-6 px-4">
          {/* Bagian Atas: Logo + Nav */}
          <div>
            <div className="mb-6">
              <Logo variant="secondary" />
            </div>
            <nav>
              {menu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex px-4 py-3 rounded-md hover:text-white hover:font-bold hover:scale-105 ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "hover:bg-special-bg3"
                    }`
                  }
                >
                  <div className="mx-auto sm:mx-0">{item.icon}</div>
                  <div className="ms-3 hidden sm:block">{item.name}</div>
                </NavLink>
              ))}
            </nav>
          </div>
          <div>
            Themes
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer mb-2`}
                  onClick={() => setTheme(t)}
                ></div>
              ))}
            </div>
          </div>
          {/* Bagian Bawah: Logout + Divider + User */}
          <div>
            {/* Logout */}
            <div onClick={handleLogout} className="cursor-pointer">
              <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0 text-primary">
                  <Icon.Logout />
                </div>
                <div className="ms-3 hidden sm:block">Logout</div>
              </div>
            </div>

            {/* Divider */}
            <div className="border my-10 border-b-special-bg"></div>

            {/* User Info */}
            <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                {user.name}
                <br />
                View Profile
              </div>
              <div className="hidden sm:block">
                <Icon.Detail size={15} />
              </div>
            </div>
          </div>
        </aside>

        {/* ===== BAGIAN KANAN ===== */}
        <div className="flex flex-col flex-1 min-h-0">
          {/* Header */}
          <header className="flex justify-between items-center bg-special-mainBg border-b border-gray-03 px-6 py-4">
            <div className="flex items-center">
              <div className="font-bold text-gray-01">{user.name}</div>
              <div className="flex text-gray-03">
                <span className="text-gray-03 mx-1">&#xBB;</span>
              </div>
              <div className="text-sm text-gray-02">May 19, 2023</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="me-10">
                <NotificationsIcon className="text-primary scale-110" />
              </div>
              <Input
                placeholder="Search..."
                backgroundColor="bg-white"
                border="border-white"
              />
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 min-h-0 px-6 py-6 bg-special-mainBg overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
import { NavLink, useLocation } from "react-router-dom";
import "../style/main.css";

function UbuntuDock() {
  const location = useLocation();
  const isActive = (path) => {
    if (path === "/myprojects") {
      return location.pathname.startsWith("/myprojects");
    }
    return location.pathname === path;
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-neutral-950 flex flex-col items-center py-8 gap-8 shadow-xl z-40">
      {/* HOME */}
      <div className="relative flex flex-col items-center">
        <NavLink to="/" className="text-5xl text-white hover:opacity-80">
          🏠
        </NavLink>
        {isActive("/") && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
        )}
      </div>

      {/* PROJECTS */}
      <div className="relative flex flex-col items-center">
        <NavLink
          to="/myprojects"
          className="text-5xl text-white hover:opacity-80"
        >
          📁
        </NavLink>
        {isActive("/myprojects") && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
        )}
      </div>

      {/* CONTACT */}
      <div className="relative flex flex-col items-center">
        <NavLink
          to="/contactme"
          className="text-5xl text-white hover:opacity-80"
        >
          ✉️
        </NavLink>
        {isActive("/contactme") && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
        )}
      </div>
    </div>
  );
}

export default UbuntuDock;

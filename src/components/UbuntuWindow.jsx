import { NavLink } from "react-router-dom";
import "../style/main.css";

function UbuntuWindow({ title, children, path }) {
  return (
    <div
      className="
        bg-neutral-900/80 
        backdrop-blur-md 
        rounded-xl 
        shadow-2xl 
        border border-neutral-700 

        max-w-6xl 
        w-full
        mx-auto 

        p-10 
        mt-20

        lg:p-10
        lg:mt-20

        md:p-8
        md:mt-16

        sm:p-6
        sm:mt-14

        xs:p-4
        xs:mt-10
      "
    >
      <div className="flex items-center gap-3 mb-8">
        {path && (
          <NavLink to={path} className="text-neutral-300 hover:text-white">
            <i className="fa-solid fa-angle-left text-xl"></i>
          </NavLink>
        )}

        <span className="text-white font-semibold text-2xl">{title}</span>
      </div>

      {children}
    </div>
  );
}

export default UbuntuWindow;

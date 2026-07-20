import UbuntuWindow from "../components/UbuntuWindow";
import { NavLink } from "react-router-dom";

function Projects() {
  const folders = [
    { name: "Tris Web", path: "/myprojects/tris" },
    { name: "UNO", path: "/myprojects/uno" },
    { name: "Diabetic-System", path: "/myprojects/diabetic-system" },
    { name: "MDP-value-iteration", path: "/myprojects/mdp" }
  ];

  return (
    <UbuntuWindow title="File – Progetti" path={null}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {folders.map((f) =>
          f.external ? (
            <a
              key={f.name}
              href={f.external}
              target="_blank"
              className="flex flex-col items-center text-white hover:opacity-80"
            >
              <span className="text-7xl">📁</span>
              <span className="mt-2 text-lg">{f.name}</span>
            </a>
          ) : (
            <NavLink
              key={f.name}
              to={f.path}
              className="flex flex-col items-center text-white hover:opacity-80"
            >
              <span className="text-7xl">📁</span>
              <span className="mt-2 text-lg">{f.name}</span>
            </NavLink>
          ),
        )}
      </div>
    </UbuntuWindow>
  );
}

export default Projects;

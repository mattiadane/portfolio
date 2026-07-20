import UbuntuWindow from "./UbuntuWindow";
import { NavLink } from "react-router-dom";

function ProjectWindow({ title, readme, github, webapp, description, path }) {
  return (
    <UbuntuWindow title={title} path={path}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* FILE README */}
        <NavLink
          to={readme}
          className="flex flex-col items-center text-white hover:opacity-80"
        >
          <span className="text-7xl">📄</span>
          <span className="mt-2 text-lg">README</span>
          <p className="text-white/70 text-sm mt-3 px-4 text-center">
            {description}
          </p>
        </NavLink>
        {/* FILE GITHUB */}
        <a
          href={github}
          target="_blank"
          className="flex flex-col items-center text-white hover:opacity-80"
        >
          <span className="text-7xl">📁</span>
          <span className="mt-2 text-lg">GitHub Repo</span>
        </a>

        {/* FILE WEBAPP (solo se esiste) */}
        {webapp && (
          <a
            href={webapp}
            target="_blank"
            className="flex flex-col items-center text-white hover:opacity-80"
          >
            <span className="text-7xl">🌐</span>
            <span className="mt-2 text-lg">Web App</span>
          </a>
        )}
      </div>
    </UbuntuWindow>
  );
}

export default ProjectWindow;

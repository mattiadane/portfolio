import ProjectWindow from "../components/ProjectWIndow";

function ProjectTris() {
  return (
    <ProjectWindow
      title="Tris Web"
      path="/myprojects"
      readme="/myprojects/tris/readme"
      github="https://github.com/mattiadane/tris"
      webapp="https://mattiadane.github.io/tris/"
      description="Il mio primo progetto di programmazione svolto alle superiori , che implementa il gioco del tris in HTML-CSS-JS"
    />
  );
}

export default ProjectTris;

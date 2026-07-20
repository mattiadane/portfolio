import ProjectWindow from "../components/ProjectWIndow";

function ProjectUno() {
  return (
    <ProjectWindow
      title="UNO command-line-interface"
      path="/myprojects"
      readme="/myprojects/uno/readme"
      github="https://github.com/mattiadane/uno"
      webapp={null} // nessuna webapp
      description="Implementazione del gioco di carte UNO a riga di comando (User vs Bot) in Python"
    />
  );
}

export default ProjectUno;

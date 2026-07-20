import ProjectWindow from "../components/ProjectWIndow";

function ProjectMDP() {
  return (
    <ProjectWindow
      title="MDP value-iteration"
      path="/myprojects"
      readme="/myprojects/mdp/readme"
      github="https://github.com/mattiadane/MDP-value-iteration"
      webapp={null} // nessuna webapp
      description="Progetto che mira ad implentare un MDP in particolare il value-iteration "
    />
  );
}

export default ProjectMDP;

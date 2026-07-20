import { NavLink } from "react-router-dom";
import ProjectWindow from "../components/ProjectWIndow";

function ProjectDiabetic() {
  return (
    <ProjectWindow
      title="Diabetic System "
      path="/myprojects"
      readme="/myprojects/diabetic-system/readme"
      github="https://github.com/mattiadane/Diabetic-System"
      webapp={null} // nessuna webapp
      description="Implementazione di un software desktop completo che vede la partecipazione di due attori  principali (paziente con diabete e Diabetologo) , implemetato in JavaFX"
    />
  );
}

export default ProjectDiabetic;

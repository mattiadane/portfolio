import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UbuntuDock from "./components/UbuntuDock";
import UbuntuTopBar from "./components/UbuntuTopBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectTris from "./pages/ProjectTris";
import ProjectMDP from "./pages/ProjectMDP";
import ProjectsDiabetic from "./pages/ProjectDiabetic"; 
import ProjectUno from "./pages/ProjectUno";
import ReadmeMDP from "./pages/ReadmeMDP";
import ReadmeTris from "./pages/ReadmeTris";
import ReadmeDiabetic from "./pages/ReadmeDiabetic";
import ReadmeUno from "./pages/ReadmeUno";
import Footer from "./components/Footer";
import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UbuntuDock />
    <UbuntuTopBar />

    <div className="ml-20 mt-12 h-[calc(100vh-3rem)] overflow-y-auto bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6">
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/myprojects" element={<Projects />} />
        <Route path="/contactme" element={<Contact />} />
        <Route path="/myprojects/mdp" element={<ProjectMDP />} />
        <Route path="/myprojects/tris" element={<ProjectTris />} />
        <Route path="/myprojects/diabetic-system" element={<ProjectsDiabetic />} />
        <Route path="/myprojects/uno" element={<ProjectUno />} />
        <Route path="/myprojects/mdp/readme" element={<ReadmeMDP/>} />
        <Route path="/myprojects/tris/readme" element={<ReadmeTris/>} />
        <Route path="/myprojects/diabetic-system/readme" element={<ReadmeDiabetic/>} />
        <Route path="/myprojects/uno/readme" element={<ReadmeUno />} />
        
      </Routes>
      <Footer/>
    </div>
    
  </BrowserRouter>,
);

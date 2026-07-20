import UbuntuWindow from "../components/UbuntuWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <UbuntuWindow title="Contatti" path={null}>
      <p className="text-white/80 mb-6">
        Puoi contattarmi tramite i miei social o email:
      </p>

      <div className="flex flex-wrap gap-6 text-white text-4xl">
        <a
          href="https://www.instagram.com/mattia_danese_/"
          target="_blank"
          className="hover:text-orange-400 transition"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.linkedin.com/in/danesemattia/"
          target="_blank"
          className="hover:text-orange-400 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="mailto:mattia.danese04@gmail.com"
          className="hover:text-orange-400 transition"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </UbuntuWindow>
  );
}

export default Contact;

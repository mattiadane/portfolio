import ReadmeWindow from "../components/ReadmeWindow";

function ReadmeDiabetic() {
  return (
    <ReadmeWindow 
      title="Diabetic System — Applicativo per la gestione del percorso diabetologico"
      path="/myprojects/diabetic-system"
    >

      <h2 className="text-xl sm:text-xl text-white">
        Il Diabetic System è un applicativo universitario sviluppato in Java che
        simula un sistema reale di supporto alla cura del diabete. L’obiettivo è
        migliorare la comunicazione tra pazienti e diabetologi e offrire
        strumenti per monitorare valori glicemici, terapie e notifiche
        automatiche.
      </h2>

      <div className="border-b border-neutral-700 my-6"></div>

      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">Obiettivo</h3>
      <p className="text-neutral-300 mt-2">
        Il sistema permette al diabetologo di monitorare i pazienti e gestire le
        terapie, al paziente di registrare i propri valori e ricevere
        promemoria, e all’amministratore di gestire i diabetologi presenti nel
        sistema.
      </p>

      <div className="border-b border-neutral-700 my-6"></div>

      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">Stack Tecnologico</h3>
      <div className="flex flex-wrap items-center gap-6 mt-6">

        <div className="flex flex-col items-center">
          <i className="devicon-java-plain colored text-4xl sm:text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">Java / JavaFX</span>
        </div>

        <div className="flex flex-col items-center">
          <i className="devicon-css3-plain colored text-4xl sm:text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">CSS</span>
        </div>

        <div className="flex flex-col items-center">
          <i className="devicon-junit-plain colored text-4xl sm:text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">JUnit</span>
        </div>

      </div>

      <div className="border-b border-neutral-700 my-6"></div>

      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">OOP e Design Pattern</h3>
      <p className="text-neutral-300 mt-2">
        Il progetto segue i principi della programmazione orientata agli oggetti
        e utilizza design pattern per garantire modularità, estensibilità e una
        struttura del codice pulita.
      </p>

      <div className="border-b border-neutral-700 my-6"></div>

      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">Funzionalità dei Ruoli</h3>

      <h4 className="text-lg font-semibold text-white mt-4">Diabetologo</h4>
      <ul className="list-disc pl-6 text-neutral-300 mt-2">
        <li>Gestione e registrazione dei pazienti</li>
        <li>Assegnazione e modifica delle terapie e farmaci</li>
        <li>Visualizzazione dei trend glicemici dei pazienti</li>
        <li>Chat integrata con i pazienti</li>
        <li>Gestione del profilo</li>
      </ul>

      <h4 className="text-lg font-semibold text-white mt-4">Paziente</h4>
      <ul className="list-disc pl-6 text-neutral-300 mt-2">
        <li>Registrazione dei valori glicemici</li>
        <li>Registrazione delle assunzioni dei farmaci</li>
        <li>Chat con il diabetologo</li>
        <li>Gestione dell’account</li>
      </ul>

      <h4 className="text-lg font-semibold text-white mt-4">Amministratore</h4>
      <ul className="list-disc pl-6 text-neutral-300 mt-2">
        <li>Aggiunta e gestione dei diabetologi</li>
      </ul>

      <div className="border-b border-neutral-700 my-6"></div>

      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">Documentazione Tecnica</h3>
      <p className="text-neutral-300 mt-2">
        Il progetto include analisi dei requisiti, diagrammi UML e una strategia
        di testing completa.
      </p>

    </ReadmeWindow>
  );
}

export default ReadmeDiabetic;

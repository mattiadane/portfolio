import ReadmeWindow from "../components/ReadmeWindow";

function ReadmeTris() {
  return (
    <ReadmeWindow 
      title="Tic Tac Toe – Web App"
      path="/myprojects/tris"
    >

      {/* Spiegazione */}
      <h2 className="text-xl sm:text-xl text-white">
        Tic Tac Toe – Web App è una semplice implementazione del classico gioco
        Tris, sviluppata in HTML, CSS e JavaScript. È il mio primo progetto di
        programmazione, realizzato durante le scuole superiori, con un’interfaccia
        volutamente essenziale e basata su tecnologie web di base.
      </h2>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Obiettivo */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">Obiettivo</h3>
      <p className="text-neutral-300 mt-2">
        Creare un gioco completamente funzionante da browser, con logica di gioco
        completa, gestione dei turni, rilevamento automatico di vittoria/pareggio
        e un sistema di match che rende l’esperienza più coinvolgente.
      </p>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Stack Tecnologico */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
        Stack Tecnologico
      </h3>
      <div className="flex flex-wrap items-center gap-6 mt-4">

        <div className="flex flex-col items-center">
          <i className="devicon-html5-plain colored text-4xl sm:text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">HTML5</span>
        </div>

        <div className="flex flex-col items-center">
          <i className="devicon-css3-plain colored text-4xl sm:text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">CSS3</span>
        </div>

        <div className="flex flex-col items-center">
          <i className="devicon-javascript-plain colored text-4xl sm:text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">JavaScript</span>
        </div>

        <div className="flex flex-col items-center">
          <i className="devicon-chartjs-plain colored text-4xl sm:text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">Chart.js</span>
        </div>

      </div>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Approccio Tecnico */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
        Approccio Tecnico
      </h3>
      <p className="text-neutral-300 mt-2">
        Il gioco gestisce turni alternati tra X e O, controlla automaticamente le
        condizioni di vittoria e pareggio e permette di resettare la board in
        qualsiasi momento. Al termine di un match al meglio delle tre vittorie,
        viene generato un grafico tramite Chart.js che mostra le statistiche dei
        giocatori.
      </p>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Funzionalità del Gioco */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
        Funzionalità del Gioco
      </h3>
      <ul className="list-disc pl-6 text-neutral-300 mt-2">
        <li>Interfaccia semplice e immediata</li>
        <li>Turni alternati tra giocatore X (parte sempre prima) e O</li>
        <li>Rilevamento automatico di vittoria e pareggio</li>
        <li>Pulsante di reset della board</li>
        <li>Match system: primo a 3 vittorie</li>
        <li>Visualizzazione statistiche tramite Chart.js</li>
        <li>Esecuzione diretta da browser (index.html)</li>
      </ul>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Nota Personale */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
        Nota Personale
      </h3>
      <p className="text-neutral-300 mt-2">
        Questo è stato il mio primo progetto di programmazione, realizzato
        durante le scuole superiori. Mi ha permesso di comprendere le basi della
        logica di gioco, della manipolazione del DOM e della gestione degli
        eventi in JavaScript.
      </p>

    </ReadmeWindow>
  );
}

export default ReadmeTris;

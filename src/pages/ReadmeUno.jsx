import ReadmeWindow from "../components/ReadmeWindow";

function ReadmeUno() {
  return (
    <ReadmeWindow title="UNO – Command Line Game "
     path="/myprojects/uno"
    >
      {/* Spiegazione */}
      <h2 className="text-xl sm:text-xl  text-white">
        UNO – Command Line Game è una versione testuale del celebre gioco di
        carte UNO, sviluppata in Python come uno dei miei primi progetti di
        programmazione. Il gioco permette una partita completa tra un giocatore
        umano e un bot, gestendo regole, turni, carte speciali e condizioni di
        vittoria.
      </h2>
      <hr />
      {/* Obiettivo */}
      <h3 className="text-lg sm:text-xl font-semibold text-white">Obiettivo</h3>
      <p className="text-neutral-300">
        Realizzare un gioco completamente funzionante da terminale, con gestione
        delle carte, validazione delle mosse, turni alternati e un bot in grado
        di seguire le regole ufficiali di UNO. Il progetto nasce per consolidare
        le basi della programmazione e della logica applicata ai giochi.
      </p>
      <hr />
      {/* Stack Tecnologico */}
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        Stack Tecnologico
      </h3>
      <div className="flex flex-wrap items-center gap-6 mt-4">
        <div className="flex flex-col items-center">
          <i className="devicon-python-plain colored text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">Python</span>
        </div>
      </div>
      <hr />
      {/* Approccio Tecnico */}
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        Approccio Tecnico
      </h3>
      <p className="text-neutral-300">
        Il bot utilizza una strategia deterministica basata su regole: analizza
        le carte in mano e gioca la prima carta valida secondo le regole di UNO.
        Se non ha mosse disponibili, pesca una carta. Per le carte Wild, sceglie
        il colore più presente nella propria mano, oppure uno casuale in caso di
        parità. Non utilizza tecniche di AI avanzate, ma una logica semplice e
        funzionale.
      </p>
      <hr />
      {/* Funzionalità del Gioco */}
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        Funzionalità del Gioco
      </h3>
      <ul className="list-disc pl-6 text-neutral-300">
        <li>Partita completa tra giocatore umano e bot</li>
        <li>Regole ufficiali UNO (colori, numeri, carte speciali)</li>
        <li>Sistema a turni con pesca automatica</li>
        <li>Validazione delle carte giocate</li>
        <li>Logica del bot basata su regole deterministiche</li>
        <li>Rilevamento automatico della vittoria</li>
        <li>Esecuzione interamente da terminale</li>
      </ul>
      <hr />
      {/* Nota Personale */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
        Nota Personale
      </h3>
      <p className="text-neutral-300">
        Questo progetto è stato sviluppato durante le scuole superiori ed è uno
        dei miei primi esercizi di programmazione. Mi ha permesso di comprendere
        la gestione dei flussi di gioco, la logica decisionale e la
        strutturazione di un programma interattivo.
      </p>
    </ReadmeWindow>
  );
}

export default ReadmeUno;

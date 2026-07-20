import ReadmeWindow from "../components/ReadmeWindow";

function ReadmeMDP() {
  return (
    <ReadmeWindow 
      title="MDP Value Iteration — Marine Drone Navigation"
      path="/myprojects/mdp"
    >

      {/* Spiegazione */}
      <h2 className="text-xl sm:text-xl text-white">
        MDP Value Iteration – Marine Drone Navigation è un progetto
        universitario che simula la navigazione di un drone marino all’interno
        di un ambiente costiero complesso. Il drone deve raggiungere un’area ad
        alta biodiversità gestendo correnti, ostacoli e punti di ricarica
        energetica, all’interno di una griglia 10×10 modellata come Markov
        Decision Process (MDP).
      </h2>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Obiettivo */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">Obiettivo</h3>
      <p className="text-neutral-300 mt-2">
        L’obiettivo è calcolare la politica ottimale di navigazione del drone,
        bilanciando rischio, consumo energetico e ricompense. L’ambiente viene
        modellato come MDP e viene applicato Value Iteration per ottenere la
        migliore azione in ogni stato della griglia.
      </p>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Stack Tecnologico */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
        Stack Tecnologico
      </h3>
      <div className="flex flex-wrap items-center gap-6 mt-4">

        <div className="flex flex-col items-center">
          <i className="devicon-python-plain colored text-4xl sm:text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">Python</span>
        </div>

        <div className="flex flex-col items-center">
          <i className="devicon-jupyter-plain colored text-4xl sm:text-5xl"></i>
          <span className="text-neutral-300 text-sm mt-2">Jupyter Notebook</span>
        </div>

      </div>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Approccio Tecnico */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
        Approccio Tecnico
      </h3>
      <p className="text-neutral-300 mt-2">
        L’ambiente è rappresentato come una griglia 10×10 con celle che
        includono acqua aperta, correnti, foreste di alghe, stazioni
        energetiche, stato iniziale e goal. Ogni cella ha costi o ricompense
        specifiche, mentre le correnti introducono transizioni stocastiche. Su
        questa struttura viene applicato Value Iteration per calcolare la
        funzione di valore e la politica ottimale.
      </p>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Funzionalità */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
        Funzionalità del Progetto
      </h3>
      <ul className="list-disc pl-6 text-neutral-300 mt-2">
        <li>Modellazione dell’ambiente come Markov Decision Process</li>
        <li>Definizione di costi, ricompense e transizioni stocastiche</li>
        <li>Applicazione dell’algoritmo di Value Iteration</li>
        <li>Calcolo della funzione di valore per ogni stato</li>
        <li>Generazione della politica ottimale di navigazione</li>
        <li>Visualizzazione della griglia, dei valori e delle azioni ottimali</li>
      </ul>

      <div className="border-b border-neutral-700 my-6"></div>

      {/* Documentazione Tecnica */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
        Documentazione Tecnica
      </h3>
      <p className="text-neutral-300 mt-2">
        Il progetto include la definizione dell’ambiente, la struttura dell’MDP,
        la funzione di transizione, la matrice delle ricompense e la
        visualizzazione finale della politica ottimale ottenuta tramite Value
        Iteration.
      </p>

    </ReadmeWindow>
  );
}

export default ReadmeMDP;

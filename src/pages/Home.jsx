import UbuntuWindow from "../components/UbuntuWindow";

function Home() {
  return (
    <UbuntuWindow title="Benvunuto" path={null}>
      <h1 className="text-white text-3xl font-bold">Sono Mattia Danese</h1>

      <p className="text-white/80 mt-4">
        Uno studente di informatica presso l'Università di Verona e mi laureerò
        ad ottobre. Mi piace programmare, imparare nuove tecnologie e creare
        progetti che mi aiutano a crescere come sviluppatore, nel mio tempo
        libero mi alleno ed esco con gli amici.
      </p>
      <h4 className="font-bold mt-6">
        Per approfondire la mia conoscenza
        <a 
        className="btn btn-submit btn-ghost"
        href="/portfolio/Curriculum_MattiaDanese.pdf"
        download="Curriculum_MattiaDanese.pdf"
        
        > clicca qui </a> per scaricare
        il mio curriculum
      </h4>
    </UbuntuWindow>
  );
}

export default Home;

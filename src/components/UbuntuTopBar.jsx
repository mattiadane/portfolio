import { useEffect, useState } from "react";
import "../style/main.css"

function UbuntuTopBar() {
  const [time, setTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    const options = {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    setTime(now.toLocaleString("it-IT", options));
  };

  useEffect(() => {
    updateTime(); // inizializza subito
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-20 right-0 h-12 bg-neutral-900 text-white flex items-center px-4 shadow-md z-30">

      {/* SINISTRA */}
      <div className="w-1/3 flex items-center">
        <span className="font-semibold tracking-wide">Mattia Danese OS</span>
      </div>

      {/* CENTRO */}
      <div className="w-1/3 flex justify-center">
        <span className="font-medium">{time}</span>
      </div>

      {/* DESTRA (vuota per ora) */}
      <div className="w-1/3 flex justify-end gap-4 pr-4"></div>

    </div>
  );
}

export default UbuntuTopBar;

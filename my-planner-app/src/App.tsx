import { useState } from "react";
import Home from "./pages/home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./App.css";
import NewTaskOverlay from "./components/newTaskOverlay";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <div className="h-screen w-screen bg-[#F7F8FA] flex">
      {/* Botão para alternar sidebar */}
      <button
        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-200 rounded-full p-4 shadow hover:bg-white border border-gray-300 transition-all text-lg font-semibold"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Fechar sidebar" : "Abrir sidebar"}
      >
        {isOpen ? "Fechar Sidebar" : "Abrir Sidebar"}
      </button>
      <Sidebar isOpen={isOpen} />
      <main className="flex-1">
        <Topbar isOpen={isOpen} onNewTaskClick={() => setOpenOverlay(true)} />
        {openOverlay && <NewTaskOverlay />}
        <Home />
      </main>
    </div>
  );
}

export default App;

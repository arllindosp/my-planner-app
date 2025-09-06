import { useState } from "react";
import Home from "./pages/home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./App.css";
import NewTaskOverlay from "./components/newTaskOverlay";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <div className="h-screen w-screen bg-[#F7F8FA] flex">
      <button
        className={`fixed ${
          isOpen ? "left-[250px]" : "left-[70px]"
        } w-6 h-6 top-5 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-violet-300 rounded-r-lg shadow hover:bg-white transition-all  duration-500 text-lg font-semibold flex items-center justify-end hover:w-9`}
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Fechar sidebar" : "Abrir sidebar"}
      >
        {isOpen ? (
          // Arrow left (padrao aberto)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#6D28D9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 6l-6 6 6 6"
            />
          </svg>
        ) : (
          // Arrow right
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#6D28D9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6l6 6-6 6"
            />
          </svg>
        )}
      </button>
      <Sidebar isOpen={isOpen} />
      <main className="flex-1 pt-20 px-2 pb-2">
        <Topbar isOpen={isOpen} onNewTaskClick={() => setOpenOverlay(true)} />
        {openOverlay && <NewTaskOverlay />}
        <Home isOpen={isOpen} />
      </main>
    </div>
  );
}

export default App;

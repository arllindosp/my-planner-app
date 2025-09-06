import searchIcon from "../assets/search_icon.png";
import personIcon from "../assets/person.png";
import bellIcon from "../assets/bell_icon.png";
import planIcon from "../assets/plan_icon.png";

type TopbarProps = { isOpen: boolean; onNewTaskClick?: () => void };

function Topbar({ isOpen , onNewTaskClick}: TopbarProps) {
  const topbarStyle = `w-full ml-[245px] h-[64px] mt-0 fixed top-0 left-0 w-full z-20 flex fle-row items-center transition-all duration-500 border-b ${
    !isOpen ? "ml-[65px] transition-all duration-500" : ""
  }`;
  const elementsContainer = `h-[50px] w-[88rem] ml-2 pl-0 flex flex-row items-center justify-between transition-all duration-500 ${
    !isOpen ? " w-[101rem] transition-all duration-500" : ""
  }`;
  const searchbarStyle = `h-[33px] w-[20em] border shadow rounded-full flex flex-row items-center justify-center transition-all duration-500 p-3 gap-1${
    !isOpen ? " w-[28em]" : ""
  }`;
  return (
    <div className={topbarStyle}>
      <div className={elementsContainer}>
        <div className="flex flex-col items-start mt-1 ml-4">
          <div className="flex flex-row items-center gap-2">
            <img src={planIcon} alt="Icone" className="h-8 w-8" />
            <h1
              style={{ fontFamily: "Product Sans, sans-serif" }}
              className="text-stone-500 text-2xl font-normal font-satoshi tracking-normal"
            >
              Plan. Focus. Succeed
            </h1>
          </div>
        </div>
        <div
          className={`${searchbarStyle} focus-within:ring-2 focus-within:ring-violet-400`}
          tabIndex={0}
          onFocus={() => {}}
        >
          <img src={searchIcon} alt="" className="h-5 w-5" />
          <input
            className="outline-none border-none bg-transparent shadow-none focus:outline-none focus:ring-0 focus:border-none appearance-none text-gray-600 flex-1 text-[14px]"
            type="text"
            placeholder="Search..."
            autoComplete="off"
            spellCheck={false}
          />
          <div className="h-5 w-7 bg-gray-300 rounded-md flex flex-row items-center justify-center">
            {" "}
            <span className="text-gray-600">⌘</span>{" "}
            <span className="mb-[3px] text-gray-600">s</span>
          </div>
        </div>
        <div
          className={`w-[25em] h-full  flex flex-row justify-between items-center transition-all duration-500 ${
            !isOpen ? " w-[22rem] pl-8" : ""
          }`}
        >
          <div
            className={`w-[12em] flex flex-row justify-between items-center gap-3 transition-all duration-500${
              !isOpen ? "gap-1" : ""
            }`}
          >
            <button onClick={onNewTaskClick} className="flex flex-row items-center gap-2 px-4 py-2 shadow-md rounded-full bg-white border border-gray-300  hover:bg-gray-100 transition-all text-gray-700 font-semibold text-[14px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              New Task
            </button>
            <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all">
              <img src={bellIcon} alt="Notificações" className="h-6 w-6" />
            </div>
          </div>
          <div className="w-[10em] h-full px-1 gap-1 rounded-full border shadow-md border-gray-400 flex flex-row items-center justify-start">
            <div className="w-[40px] h-[40px] bg-stone-400 rounded-full flex items-center justify-center relative">
              <img src={personIcon} alt="" className="w-[30px] h-[30px]" />
              <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div className=" w-[80px] h-[35px] flex-1 flex flex-col">
              <span className="text-[13px] font-semibold">Arlindo</span>
              <span className="text-[11px]">arllindo@exemple...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topbar;

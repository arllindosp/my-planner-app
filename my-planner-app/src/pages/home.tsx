import DistributionChart from "../components/distributionChart";

type homeProps = {
  isOpen: boolean;
};

function Home({ isOpen }: homeProps) {
  const headerStyle = `w-full h-11 border-b `;
  return (
    <div className="h-full w-full bg-[#aae2d4] border rounded-md flex-1 flex flex-col justify-between gap-2">
      <div className={headerStyle}></div>
      <div className=" flex flex-row flex-1 border px-2 pb-2 border-pink-500 justify-between gap-3">
        <div className=" h-full flex flex-col flex-1 border border-blue-400 justify-between gap-3">
          <div className="w-full h-[24em] border border-purple-600 flex flex-row justify-between gap-3">
            <div
              className=" h-full w-[27%]  flex flex-col  flex-shrink-0 flex-grow-0  bg-[#efeeee] rounded-xl
            "
            >
              <div className="w-full  h-10 flex flex-row justify-between items-center px-3 py-1">
                <div className="w-28  h-full flex flex-row justify-start items-center gap-2">
                  <div className="h-5 w-5 bg-[#A78BFA] rounded-md"></div>{" "}
                  <span className="text-stone-500">Projects</span>
                </div>
              </div>
              <div className=" w-full h-48 border-b-2 flex flex-col justify-between gap-2">
                <div className="w-full h-8 p-2  flex items-center justify-center gap-4 relative">
                  <div className="flex items-center justify-between w-full h-full px-2">
                    <div className="flex items-end gap-1">
                      <div className="w-2 h-2 rounded-full bg-stone-300 flex items-center"></div>

                      <div className="w-5 h-2 rounded-full bg-[#A78BFA] shadow flex items-center"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300 flex items-center"></div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 shadow hover:bg-violet-300 transition">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="8" cy="8" r="8" fill="none" />
                          <path
                            d="M10 4L6 8L10 12"
                            stroke="#374151"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 shadow hover:bg-violet-300 transition">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="8" cy="8" r="8" fill="none" />
                          <path
                            d="M6 4L10 8L6 12"
                            stroke="#374151"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-full flex-1 mb-3 px-3 flex-row flex mt-0  h-[10em] justify-between">
                  <div className="h-full w-2/3  flex flex-col justify-between ">
                    <span className="text-7xl text-stone-500">24</span>
                    <span className="text-stone-500 font-semibold">
                      Total Projects
                    </span>
                  </div>
                  <div className="w-14 h-5 rounded-xl bg-violet-300 flex items-center justify-center gap-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-45"
                    >
                      <path
                        d="M8 12V4M8 4L4 8M8 4L12 8"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-bold text-white">20%</span>
                  </div>
                </div>
                <div className="w-full h-11  mt-0 pl-4  flex flex-start">
                  <span className="text-[11px] inline-block w-44 font-semibold uppercase text-stone-500">
                    TOTAL NUMBER OF PROJECTS IN YOUR WORKSPACE
                  </span>{" "}
                </div>
              </div>
              <div className="w-full h-48 border-t-2 flex flex-row ">
                <div className="w-1/2 h-36 border-r flex flex-col  p-1 px-2 justify-between ">
                  <div className="w-full h-20  flex flex-row justify-between items-center">
                    <div
                      className="h-full w-20
                    flex flex-col  justify-between"
                    >
                      <span className="text-6xl text-stone-500">52</span>{" "}
                      <span className="text-xs font-semibold text-stone-500">
                        MEMBERS
                      </span>
                    </div>
                    <div className="w-16 mt-0 mb-9 h-4 rounded-xl bg-[#A78BFA] flex items-center justify-center gap-1 ml-4">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate-45"
                      >
                        <path
                          d="M8 12V4M8 4L4 8M8 4L12 8"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-xs font-bold text-white">15%</span>
                    </div>{" "}
                  </div>
                  <span className="text-[11px] inline-block font-semibold  text-stone-500">
                    TOTAL TEAM MEMBERS
                  </span>
                </div>
                <div className="w-1/2 h-36 border-l border-r-green-50 flex flex-col p-1 px-2 justify-between ">
                  <div className="w-full h-20  flex flex-row justify-between items-center">
                    <div className="h-full w-20  flex flex-col justify-between">
                      <span className="text-6xl text-stone-500">17</span>
                      <span className="text-xs font-semibold text-stone-500">
                        STRIKES
                      </span>
                    </div>
                    <div className="w-16 mt-0 mb-9 h-4 rounded-xl bg-[#A78BFA] flex items-center justify-center gap-1 ml-4">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate-45"
                      >
                        <path
                          d="M8 12V4M8 4L4 8M8 4L12 8"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-xs font-bold text-white">10%</span>
                    </div>
                  </div>
                  <span className="text-[11px] inline-block font-semibold text-stone-500">
                    TOTAL OF STRIKES
                  </span>
                </div>
              </div>
            </div>
            <div className=" h-full flex-1 border border-yellow-300 "> </div>
          </div>
          <div className="w-full flex flex-1 border border-red-600 flex-row gap-3">
            <div className="h-full w-[26em] bg-violet-400"></div>
            <div className="flex flex-1 flex-col gap-3 bg-pink-400">
              <div className="w-full h-32 bg-green-300"></div>
              <div className="w-full h-32 bg-green-300"></div>
            </div>
          </div>
        </div>
        <div className="h-full w-1/5 flex flex-col border border-violet-400 ">
          <div className="w-full h-[24em] bg-[#efeeee] rounded-xl flex flex-col justify-between p-2">
            <div className="w-full h-8 border flex flex-row justify-between items-center pr-2">
              {" "}
              <div className="w-30  h-full flex border  flex-row justify-start items-center gap-2">
                <div className="h-5 w-5 bg-[#A78BFA] rounded-md"></div>{" "}
                <span className="text-stone-500">Task Distribution</span>
              </div>
              <div className="w-6 h-6 rounded-full mb-0 gap-y-0 bg-white flex items-center justify-center hover:cursor-pointer">
                <div className="flex flex-row gap-0.5 w-full items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-stone-400"></div>
                  <div className="w-1 h-1 rounded-full bg-stone-400"></div>
                  <div className="w-1 h-1 rounded-full bg-stone-400"></div>
                </div>
              </div>
            </div>
            <div className="w-full h-36 border">
              <DistributionChart isOpen={isOpen} />
            </div>
            <div className="w-full h-40 border flex flex-col justify-between border-yellow-300 gap-1">
              {" "}
              <div className="w-30  flex border  flex-row justify-start  items-center gap-2">
                <div className="h-5 w-5 bg-[#A78BFA] rounded-md"></div>{" "}
                <span className="text-stone-500">Task Distribution</span>
              </div>
              <div className="w-full h-52 border flex flex-col justify-between gap-1">
                <div className="w-full h-full flex flex-col gap-3 justify-between border scrollbar-none border-green-400 overflow-auto py-2">
                  <div className="w-full h-10 items-center justify-between px-1 gap-2 flex flex-row border rounded-xl">
                    <div className="w-28 h-full border border-green-400 flex flex-row justify-between">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 mr-0 border border-gray-400 rounded-md checked:bg-violet-400 checked:border-violet-500 transition"
                      />

                      <div className="w-full h-full border border-red-400">
                        <span>Appel Developer</span>

                        <span> Fazer a porra do trabalho direito</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

import owlLogo from "../assets/logo (2).png";
import searchIcon from "../assets/search_icon.png";
import { Button } from "@/components/ui/button";
import boxIcon from "../assets/box_icon.png";
import agendaIcon from "../assets/agenda_icon (2).png";
import checkIcon from "../assets/check_icon.png";
import timelineIcon from "../assets/timeline_icon.png";
import ProgressoSemanal from "../components/chart";
import arrowIcon from "../assets/arrow_icon.png";
import person from "../assets/person.png";
import homeIcon from "../assets/home_icon.png";
import settingsIcon from "../assets/settings.png";
import supportIcon from "../assets/support (2).png";
import inviteIcon from "../assets/invite.png";
import { useState } from "react";
import sideBarIcon from "../assets/sideBar-buttom.png";
import newBadge from "../assets/new_badge.svg";

type SidebarProps = {
  isOpen: boolean;
};

function Sidebar({ isOpen }: SidebarProps) {
  const sidebarStyles = `w-60 z-50 h-full border-r rounded-r-xl flex flex-col justify-center items-center bg-gray-100 transition-all duration-500 relative ${
    !isOpen ? "w-[60px] transition-all duration-500" : ""
  }`;
  const sidebarinnerContainer = ` h-full mt-4 mb-4 flex flex-col transition-all duration-500 ${
    isOpen ? "w-[13rem]" : "w-[57px] transition-all duration-500"
  }`;
  const sidebarHeader = `w-[13rem] h-[3rem] border-b border-b-400 flex flex-row justify-left gap-[-10px] p-1 pl-0 items-center transition-all duration-500${
    !isOpen
      ? " w-[50px] items-center justify-center transition-all duration-500"
      : ""
  }`;
  const searchContainer = `border-2 bg-gray-200 rounded-md flex flex-row shadow-md transition-all duration-500 ${
    isOpen
      ? "w-[13rem] h-[2rem] pl-1 transition-all duration-500"
      : "w-[38px] h-[40px] items-center justify-center mx-auto p-0 transition-all duration-500"
  }`;
  const seactionsContainer = isOpen
    ? " w-[13rem] h-[18rem] flex flex-col justify-between transition-all duration-500 "
    : " w-[60px] h-[18rem] flex flex-col justify-center items-center  transition-all duration-500 ";
  const sidebarFooter =
    "w-[13rem] h-[3rem]  flex flex-row  mt-auto items-center bg-gray-300 pl-2 rounded-xl";
  const buttonStyles = `w-[48px] h-[38px] items-center justify-center transition-all duration-500 p-0 border-none bg-transparent flex flex-row text-[12px] gap-2 hover:bg-white hover:shadow hover:rounded-xl hover:border hover:border-gray-200 ${
    isOpen ? "w-full justify-start pl-1" : ""
  }`;
  return (
    <div className={sidebarStyles}>
      <div className={sidebarinnerContainer}>
        <div
          className={`h-[18rem] flex flex-col justify-between items-center   pb-14 ${
            !isOpen ? " h-[18rem] pb-5 " : ""
          }`}
        >
          <div
            className={`h-[3rem] w-[13rem]  flex flex-col justify-between items-center transition-all duration-500 ${
              !isOpen ? " w-full justify-center items-center" : ""
            }`}
          >
            <div className={sidebarHeader}>
              <div
                className={`flex items-center transition-all duration-500 ${
                  isOpen ? "" : "justify-center w-[57px]"
                }`}
              >
                <img
                  src={owlLogo}
                  alt="Owl Logo"
                  className={`pb-0 transition-all duration-500 ${
                    isOpen
                      ? "w-[48px] h-[48px]"
                      : "w-[50px] h-[50px] transition-all duration-500"
                  }`}
                />
                <span
                  className={`ml-2 font-semibold text-gray-600 text-base text-left transition-all duration-500 ${
                    isOpen
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  {isOpen ? "TaskFlow" : ""}
                </span>
              </div>
            </div>
          </div>

          <div className={seactionsContainer}>
            <div
              className={`flex flex-col border-b border-b-1 py-1 gap-2 transition-all duration-500 ${
                !isOpen ? "w-full items-center" : ""
              }`}
            >
              <Button
                className={`${buttonStyles} ${
                  !isOpen ? "justify-center items-center pl-0" : ""
                }`}
                variant="outline"
              >
                <img
                  src={homeIcon}
                  alt=""
                  className={isOpen ? "w-6 h-6" : "w-6 h-6"}
                />
                {isOpen && (
                  <span className="text-sm transition-all duration-500">
                    Home
                  </span>
                )}
              </Button>
              <Button
                className={`${buttonStyles} ${
                  !isOpen ? "justify-center items-center pl-0" : ""
                }`}
                variant="outline"
              >
                <img
                  src={boxIcon}
                  alt=""
                  className={isOpen ? "w-6 h-6" : "w-6 h-6"}
                />
                {isOpen && (
                  <span className="text-sm flex items-center w-full">
                    Tarefas Pendentes
                    <span
                      className="ml-auto flex items-center justify-center"
                      style={{ minWidth: "44px", height: "18px" }}
                    >
                      <span className="px-2 py-0 rounded-xl bg-[#A78BFA] text-white text-[8px] font-bold flex items-center justify-center">
                        NEW
                      </span>
                    </span>
                  </span>
                )}
              </Button>
              <Button
                className={`${buttonStyles} ${
                  !isOpen ? "justify-center items-center pl-0" : ""
                }`}
                variant="outline"
              >
                <img
                  src={checkIcon}
                  alt=""
                  className={isOpen ? "w-6 h-6" : "w-6 h-6 "}
                />
                {isOpen && <span className="text-sm">Concluídas</span>}
              </Button>
            </div>
            <div
              className={`flex flex-col gap-2 transition-all duration-500 ${
                !isOpen ? "w-full items-center" : ""
              }`}
            >
              <Button
                className={`${buttonStyles} ${
                  !isOpen ? "justify-center items-center pl-0" : ""
                }`}
                variant="outline"
              >
                <img
                  src={agendaIcon}
                  alt=""
                  className={isOpen ? "w-6 h-6" : "w-6 h-6"}
                />
                {isOpen && <span className="text-sm">Agenda</span>}
              </Button>
              <Button
                className={`${buttonStyles} ${
                  !isOpen ? "justify-center items-center pl-0" : ""
                }`}
                variant="outline"
              >
                <img
                  src={timelineIcon}
                  alt=""
                  className={isOpen ? "w-6 h-6" : "w-6 h-6"}
                />
                {isOpen && <span className="text-sm">Time-line</span>}
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`px-4 mt-4 transition-all duration-500 ${
            isOpen ? "w-full" : "w-[60px]"
          }`}
          style={{
            height: 192,
            minHeight: 192,
            maxHeight: 192,
            boxSizing: "border-box",
          }}
        >
          {isOpen ? (
            <div className="w-full h-[150px] flex items-center justify-center transition-all duration-500">
              <ProgressoSemanal />
            </div>
          ) : null}
        </div>

        <div
          className={`flex flex-col justify-between transition-all duration-500${
            isOpen ? "w-[13rem]" : "w-[60px]"
          } h-full`}
        >
          <div
            className={` mt-3  flex flex-col gap-2 border-t transition-all duration-500 ${
              !isOpen ? "w-full items-center" : ""
            }`}
          >
            <Button className={`${buttonStyles}`} variant="outline">
              <img src={inviteIcon} alt="" className="w-6 h-6" />
              {isOpen && <span className="text-sm">Invite</span>}
            </Button>
            <Button className={`${buttonStyles}`} variant="outline">
              <img src={supportIcon} alt="" className="w-6 h-6" />
              {isOpen && <span className="text-sm">Support</span>}
            </Button>
            <Button className={`${buttonStyles}`} variant="outline">
              <img src={settingsIcon} alt="" className="w-6 h-6" />
              {isOpen && <span className="text-sm">Settings</span>}
            </Button>
          </div>

          <div
            className={`self-end flex items-center justify-center ${
              isOpen
                ? sidebarFooter
                : "bg-transparent border-none w-full h-[50px] mt-auto"
            } transition-all duration-500`}
          >
            <div
              className={`flex flex-row items-center gap-2 w-full ${
                isOpen ? "justify-start" : "justify-center"
              }`}
            >
              <div className="relative w-[35px] h-[35px] rounded-full bg-stone-400 flex flex-col justify-center items-center">
                <img src={person} alt="" className="h-[25px] w-[25px]" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              {isOpen && (
                <div className="flex flex-col gap-0">
                  <div className="flex flex-row">
                    <p className="text-[13px] font-semibold text-gray-700">
                      {" "}
                      Arlindo Júnior
                    </p>{" "}
                    <img src={arrowIcon} alt="" className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] text-gray-500">
                    arlindo@exemple.com
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Sidebar;

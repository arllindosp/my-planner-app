import React, { useState } from "react";
import { Calendar24 } from "./ui/datePicker";
import trashIcon from "../assets/normaltrashIcon.png"
import redtrashIcon from "../assets/redtrashIcon.png"

const NewTaskOverlay = () => {
  // Notes logic (independente)
  const [isNotesEditing, setIsNotesEditing] = useState(false);
  const [notesValue, setNotesValue] = useState("");
  const handleNotesDoubleClick = () => {
    setIsNotesEditing(true);
  };
  const handleNotesKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsNotesEditing(false);
    }
  };
  const [isEditing, setisEditing] = useState(false);
  const [value, setValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const isLong = value.length > 22;
  const fontSizeClass = isLong ? "text-[15px]" : "text-[20px]";
  const heightClass = isLong ? "h-14" : "h-14";
  let modalHeadr = `w-full h-14 flex flex-col items-start`;

  const handleDoubleClick = () => {
    setisEditing(true);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      setisEditing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white rounded-xl shadow-xl w-[350px] h-[560px] flex flex-col items-center transition-all duration-500 p-2 animate-modalDown">
        <div className={modalHeadr + " flex-row gap-2"}>
          <textarea
            placeholder="Task Title"
            value={value}
            maxLength={43}
            readOnly={!isEditing}
            onDoubleClick={handleDoubleClick}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`p-2 rounded w-[13em] ml-3 overflow-hidden resize-none text-stone-500 font-semibold focus:ring-0 focus:outline-none placeholder:text-stone-300 ${fontSizeClass} ${heightClass}`}
          />

          <div className="border-b-2 border-b-stone-300 w-[20em] self-center"></div>
        </div>
        <div className="w-full h-[27em] flex flex-col mx-2 px-2">
          <div className="w-full h-20  mt-2 flex flex-col justify-between px-1 items-center">
            <Calendar24 />
          </div>
          <div className="w-full mt-4 h-12 flex items-center justify-center border border-dashed border-yellow-300 rounded bg-yellow-50 text-yellow-700 text-sm">
            Location picker aqui futuramente
          </div>
          <div className=" border border-b-stone-300 w-[20em] self-center"></div>

          <div className="w-full flex flex-col gap-2 mt-2 mb-2">
            <span className="text-sm font-medium text-stone-700 mb-1">
              Participants
            </span>
            <div className="flex flex-row flex-wrap gap-2 items-center">
              {/* Chips de participantes (exemplo estático) */}
              <div className="flex flex-row flex-wrap gap-2">
                <div className="flex items-center  px-1 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-medium shadow">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Caroline"
                    className="w-5 h-5 rounded-full mr-2"
                  />
                  Caroline
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-medium shadow">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Angeline"
                    className="w-5 h-5 rounded-full mr-2"
                  />
                  Angeline
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-medium shadow">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Andy"
                    className="w-5 h-5 rounded-full mr-2"
                  />
                  Andy
                </div>
              </div>
              {/* Botão para adicionar novo participante */}
              <button
                type="button"
                className="w-20 h-8 flex items-center justify-center border-2 border-dashed border-stone-300 rounded-full text-stone-400 bg-white hover:bg-stone-50 transition-all ml-2"
              >
                + Add
              </button>
            </div>
          </div>

          {/* Label Section */}
          <div className="w-full flex flex-col gap-2 mt-2 mb-2">
            <span className="text-sm font-medium text-stone-700 mb-1">
              Label
            </span>
            <div className="flex flex-row gap-2 items-center justify-between">
              {[
                "#fca7cd",
                "#fea9f0",
                "#ce9ef6",
                "#ee887f",
                "#67d8d3",
                "#5ce99f",
                "#bbea5f",
                "#ebce68",
                "#eeb57f",
                "#fd7c7c",
              ].map((color: string, idx: number) => (
                <button
                  key={color}
                  type="button"
                  className="w-6 h-6 rounded-full border-2 border-white shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                  style={{ backgroundColor: color }}
                  aria-label={`Escolher cor ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 mt-2 mb-2">
            <span className="text-sm font-medium text-stone-700 mb-1">
              Notes
            </span>
            <textarea
              placeholder="Add notes..."
              value={notesValue}
              readOnly={!isNotesEditing}
              onDoubleClick={handleNotesDoubleClick}
              onChange={(e) => setNotesValue(e.target.value)}
              onKeyDown={handleNotesKeyDown}
              className="p-2 rounded w-full min-h-[60px] resize-none text-stone-700 font-normal focus:ring-0 focus:outline-none placeholder:text-stone-300 border border-stone-200 bg-stone-50"
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-between h-12 p-1 mt-3">
          <div className="w-36 h-full border border-gray-300 rounded-xl flex flex-row items-center justify-center transiton-all duraiton-500 hover:border-2 hover:border-[#bbea5f]">
            <img src="" alt="" /> <span className="hover:text-[#bbea5f] hover:ring-[#bbea5f] ">+ Create Task</span>
          </div>
          <div className="w-36 h-full border border-gray-300 rounded-xl flex flex-row  items-center justify-center gap-3">
            <img src={redtrashIcon} alt="" className="h-6 w-6" /> <span className="text-[#fd7c7c]">Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTaskOverlay;

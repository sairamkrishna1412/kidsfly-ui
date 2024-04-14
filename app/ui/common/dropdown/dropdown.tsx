"use client";
import { useState } from "react";
import { MdExpandCircleDown } from "react-icons/md";

export default function Dropdown(props: { title: string; options: any[] }) {
  const [showOptions, setShowOptions] = useState(false);
  const { title, options } = props;
  const selectOption = (value: any) => {
    console.log(value);
  };
  const toggleOptions = () => {
    setShowOptions((showOptions) => !showOptions);
  };
  return (
    <div className="">
      <select className="!w-[1px] !h-[1px]" name="age" id="age">
        {options.map((option: any, i: number) => (
          <option key={i} value={option.value}>
            {option.show}
          </option>
        ))}
      </select>
      <div className="flex items-center gap-12 text-gray-600 cursor-pointer">
        <p className="w-[15%]">{title}</p>
        <div className="relative w-full">
          <div
            onClick={toggleOptions}
            className="flex justify-between items-center p-2 border-1 border-gray-500"
          >
            <span>Choose an option</span>
            <MdExpandCircleDown />
          </div>
          {showOptions && (
            <div className="absolute w-full bg-white z-10">
              {options.map((option: any, i: number) => (
                <p
                  key={i}
                  className="p-2 border hover:bg-app_purple"
                  onClick={() => selectOption(option.value)}
                >
                  {option.show}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

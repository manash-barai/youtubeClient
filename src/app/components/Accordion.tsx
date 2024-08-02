"use client";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  rightSide: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  rightSide,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 rounded">
      <h2 className="">
        <button
          type="button"
          className="flex rounded items-center justify-between w-full py-4 px-5 font-medium text-gray-500 border     hover:bg-zinc-200 gap-3 bg-zinc-100 border-zinc-300"
          onClick={toggleAccordion}
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="text-zinc-800 font-bold">{title}</span>
          <div className="flex items-center gap-3">
            <span className="text-zinc-700 text-sm font-semibold">
              {rightSide}
            </span>
            <svg
              className={`w-3 h-3 transform ${isOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </div>
        </button>
      </h2>
      <div
        className={`p-5 border border-t-0 border-gray-200 rounded ${
          isOpen ? "" : "hidden"
        }`}
        aria-hidden={!isOpen}
      >
        {isOpen && children}
      </div>
    </div>
  );
};

export default Accordion;

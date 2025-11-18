'use client'
import React, { useState } from 'react'

type accordionProps = {
  question: string,
  answer: string
}
  const Accordion = ({ question, answer }: accordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="quest-ans-box border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md">
        <div
          className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setIsOpen(!isOpen)} // 👈 This toggles the state on click
        >
          <p className="quest font-semibold text-gray-700">{question}</p>
          {/* Toggle sign based on state */}
          <span className="text-xl font-bold text-indigo-600 transition-transform duration-300">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {/* Conditionally render/style the answer based on state */}
        <div
          className={`ans overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 p-4 pt-0" : "max-h-0 opacity-0 p-0"
          }`}
        >
          <p className="text-gray-500">{answer}</p>
        </div>
      </div>
    );
  };

  export default Accordion

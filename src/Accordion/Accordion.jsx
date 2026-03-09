import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState();
  function handleToggle(index) {
    setOpenIndex(openIndex == index ? null : index);
  }
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index} className="accordion">
            <button
              onClick={() => handleToggle(index)}
              className="accordion-title"
            >
              {item.title}
              {openIndex === index ? (
                <FaChevronUp className="right" />
              ) : (
                <FaChevronDown className="right" />
              )}
            </button>
            {openIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;

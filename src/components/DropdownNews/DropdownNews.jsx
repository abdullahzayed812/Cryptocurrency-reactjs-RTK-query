import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { GoArrowSmallDown } from "react-icons/go";
import "./DropdownNews.css";

export function DropdownNews({
  data,
  news,
  details,
  defaultValue,
  setNewsCategory,
  setTimeStamp,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const inputRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
  const handleOpen = () => {
    setOpen(!open);
  };
  const close = (event) => {
    setOpen(event && event.target === inputRef.current);
  }
  const handleSelect = (event) => {
    setSelected(event.target.textContent.trim());
    if (news) {
      setNewsCategory(selected);
    } else if (details) {
      setTimeStamp(selected);
    }
  }
  return (
    <div className="dorpdown-container">
      <div className="control">
        <input
          readOnly
          type="text"
          value={selected}
          ref={inputRef}
          onClick={handleOpen}
          placeholder="Search Cryptos"
        />
        {
          !open ? <GoArrowSmallDown className="arrow-icon" />
          : <BsSearch className="search-icon" />
        }
      </div>
      <div className={open ? "options-box open" : "options-box"}>
        <div className="option">{defaultValue}</div>
        {data.map((option, index) => (
          <div
            key={index} 
            className="option"
            onClick={handleSelect}
          >{news ? option.name : option}</div>
        ))}
      </div>
    </div>
  );
}

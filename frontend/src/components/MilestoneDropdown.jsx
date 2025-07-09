import { useState, useRef, useEffect } from "react";
import "../styles/MilestoneDropdown.css";

export default function MilestoneDropdown({ onSelect, selectedValue }) {
  const [milestones, setMilestones] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/milestones/");
        const data = await res.json();
        setMilestones(data);
      } catch (err) {
        console.error("Failed to fetch", err);
      }
    }
    fetchData();

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = milestones.find(ms => ms.id === selectedValue);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selected?.get_milestone_display || selected?.milestone_display || "Select milestone"}
        <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {milestones.map(ms => (
            <li 
              key={ms.id}
              onClick={() => {
                onSelect(ms.id);
                setIsOpen(false);
              }}
            >
              {ms.get_milestone_display || ms.milestone_display || ms.milestone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

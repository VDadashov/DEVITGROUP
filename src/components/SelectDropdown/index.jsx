import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: "Graphik", sans-serif;
`;

const DropdownButton = styled.button`
  background-color: #2563eb;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.3s ease, transform 0.25s ease;

  transform: ${({ open }) => (open ? "scale(1.05)" : "scale(1)")};

  &:hover {
    background-color: #1e4ed8;
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 120%;
  left: 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 12px 0;
  margin: 0;
  min-width: 200px;
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;
  font-family: "Graphik-Medium500";

  &:hover {
    background-color: #f5f5f5;
  }
`;

const SelectDropdown = ({ label = "Industry", options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect?.(option);
    setIsOpen(false);
  };

  // ✨ Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {selected || label}
        <FaChevronDown />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((opt, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(opt)}>
              {opt}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default SelectDropdown;

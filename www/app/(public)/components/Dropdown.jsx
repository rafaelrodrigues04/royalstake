'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ iconBeforeTitle = '', title, items, alignment = 'left' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown container

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  // Close dropdown if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex justify-center items-center bg-transparent w-fit py-2 px-4 rounded-md text-gray-300 focus:outline-none hover:text-yellow-500 transition duration-300 ease-in-out"
      >
        {iconBeforeTitle === '' ? '' : <i className={`mr-1 fas ${iconBeforeTitle}`} />}
        {title}
        <i
          className={`ml-1 fas fa-angle-down`}
          style={{
            transition: 'transform 0.3s ease-in-out',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Dropdown Content */}
      <div
        className={`absolute bg-slate-800 rounded-md min-w-[160px] z-[1] p-2 ${styles.dropdownContent} ${isOpen ? styles.show : ''} 
          ${alignment === 'right' ? 'right-0' : 'left-0'}`}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <a
              href={item.href}
              className="block px-4 py-2 cursor-pointer rounded-md hover:bg-slate-700 hover:text-yellow-500 transition duration-300 ease-in-out"
              onClick={item.onClick}
            >
              {item.icon && <i className={`mr-1 fas ${item.icon}`} />}
              {item.label}
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

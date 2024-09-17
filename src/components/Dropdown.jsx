import React, { useState, useEffect, useRef } from "react";
// import "./Dropdown.css"; // Import your CSS for styling

const Dropdown = ({ triggerElement, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Function to close dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Add event listener to detect outside clicks
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className="dropdown-container" onClick={toggleDropdown}>
            <>
                {triggerElement}
            </>
            {isOpen && (

                <>{children}</>

            )}
        </div>
    );
};

export default Dropdown;

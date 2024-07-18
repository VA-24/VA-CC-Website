import React, { useState } from 'react';

const HoverArrow = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href="/"
            className="text-blue-800 font-medium transition duration-300 flex items-center space-x-2 hover:text-blue-600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span
                className={`arrow transform transition-transform duration-300 ${isHovered ? 'rotate-45 translate-x-1' : ''}`}
            ></span>
        </a>
    );
};

export default HoverArrow;
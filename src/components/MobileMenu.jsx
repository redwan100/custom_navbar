import React, { useState } from "react";

const MobileNavbar = ({ data }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState(null);

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
    setActiveNestedMenu(null);
  };

  const toggleNestedMenu = (nestedIndex) => {
    setActiveNestedMenu(activeNestedMenu === nestedIndex ? null : nestedIndex);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <button className="focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1 text-center">
            <a href="/" className="font-bold text-lg">
              Your Company
            </a>
          </div>
        </div>
        <div className="mt-4">
          {data.map((item, index) => (
            <div key={index}>
              <button
                className="flex justify-between items-center w-full py-2 px-4 hover:bg-gray-700 focus:outline-none"
                onClick={() => toggleMenu(index)}
              >
                <span>{item.label}</span>
                {item.child && (
                  <svg
                    className={`h-6 w-6 fill-current transition-transform duration-300 ${
                      activeMenu === index ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                )}
              </button>
              {item.child && activeMenu === index && (
                <div className="pl-8 py-2">
                  {item.child.map((child, childIndex) => (
                    <div key={childIndex}>
                      <button
                        className="flex justify-between items-center w-full py-2 hover:bg-gray-700 focus:outline-none"
                        onClick={() => toggleNestedMenu(childIndex)}
                      >
                        <span>{child.label}</span>
                        {child.nChild && (
                          <svg
                            className={`h-6 w-6 fill-current transition-transform duration-300 ${
                              activeNestedMenu === childIndex
                                ? "transform rotate-180"
                                : ""
                            }`}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 10l5 5 5-5z" />
                          </svg>
                        )}
                      </button>
                      {child.nChild && activeNestedMenu === childIndex && (
                        <div className="pl-8 py-2">
                          <a
                            href={child.nChild.path}
                            className="block py-2 hover:bg-gray-700 focus:outline-none"
                          >
                            {child.nChild.label}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;

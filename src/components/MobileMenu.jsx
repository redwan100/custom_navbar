import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";

const MobileNavbar = ({ navbarItems }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeChildMenu, setActiveChildMenu] = useState(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState(null);
  const [isShowNavMenu, setIsShowNavMenu] = useState(false);

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
    setActiveChildMenu(null);
    setActiveNestedMenu(null);
  };

  const toggleChildMenu = (childIndex) => {
    setActiveChildMenu(activeChildMenu === childIndex ? null : childIndex);
    setActiveNestedMenu(null);
  };

  const toggleNestedMenu = (nestedIndex) => {
    setActiveNestedMenu(activeNestedMenu === nestedIndex ? null : nestedIndex);
  };

  const toggleNavMenu = () => {
    setIsShowNavMenu(!isShowNavMenu);
  };

  return (
    <div className="w-full bg-white fixed top-0 left-0 z-40 right-0">
      <div className="container mx-auto flex justify-between items-center px-3 py-4">
        <div>
          <BiBuildings size={25} cursor={"pointer"} />
        </div>

        <div onClick={toggleNavMenu} className="cursor-pointer">
          {isShowNavMenu ? (
            <AiOutlineClose size={25} cursor={"pointer"} />
          ) : (
            <CgMenuLeft size={25} cursor={"pointer"} />
          )}
        </div>
      </div>

      <nav
        className={`bg-gray-800 text-white transition-all z-50  w-full fixed top-14 left-0 h-full  ${
          isShowNavMenu
            ? "translate-y-0 opacity-100"
            : "-translate-y-[120%] opacity-0"
        }`}
      >
        <div className="container mx-auto pb-4 h-max">
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
          </div>
          <div className="mt-4">
            {navbarItems.map((item, index) => (
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
                          onClick={() => toggleChildMenu(childIndex)}
                        >
                          <span>{child.label}</span>
                          {child.nChild && (
                            <svg
                              className={`h-6 w-6 fill-current transition-transform duration-300 ${
                                activeChildMenu === childIndex
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
                        {child.nChild && activeChildMenu === childIndex && (
                          <div className="pl-8 py-2">
                            {child.nChild.map((nc, nestedIndex) => (
                              <button
                                key={nestedIndex}
                                className="flex justify-between items-center w-full py-2 hover:bg-gray-700 focus:outline-none"
                                onClick={() => toggleNestedMenu(nestedIndex)}
                              >
                                <span>{nc.label}</span>
                              </button>
                            ))}
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
    </div>
  );
};

export default MobileNavbar;

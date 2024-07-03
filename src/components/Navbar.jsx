import { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

import { navbarItems } from "../../db";

const Navbar = () => {
  const [navMenus, setNavItems] = useState(navbarItems);

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-center gap-2 w-full bg-white p-3 text-[14px] font-semibold ">
        {navMenus.map((item) => (
          <div key={item.label}>
            {/*  navbar  */}
            <div className="relative w-full group">
              <a
                href="#"
                className="flex items-center min-w-max hover:text-[#013773] py-2 px-1 hover:bg-[#013773]/10 transition"
              >
                {item.label}
                {item.child && <BiChevronDown size={20} />}
              </a>

              {/* ! child  */}

              {item.child && (
                <div className="absolute left-0 w-full  z-10 hidden group-hover:block min-w-[12rem] max-w-max ">
                  <ul className="list-none w-full min-w-max bg-white shadow-md ">
                    {item.child.map((child, i) => (
                      <li
                        key={child.label + i}
                        className="relative group/child"
                      >
                        <a
                          href={child.path}
                          className="text-sm text-gray-700 hover:text-[#013773] cursor-pointer flex items-center justify-between gap-1 py-2 px-1 hover:bg-[#013773]/10 transition"
                        >
                          {child.label}{" "}
                          {child?.nChild && <BiChevronRight size={18} />}
                        </a>

                        {/* nested child  */}
                        {child?.nChild?.length > 0 && (
                          <div className="absolute left-full top-0 bg-white z-10 hidden group-hover/child:block min-w-[12rem] max-w-max">
                            <ul className="list-none">
                              {child.nChild.map((nc, i) => (
                                <li
                                  key={nc.label + i}
                                  className="py-2 px-1 hover:bg-[#013773]/10 transition text-sm text-gray-700 hover:text-[#013773] cursor-pointer"
                                >
                                  <a href={nc?.path} className=" ">
                                    {nc?.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {/* nested child  */}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ! child  */}
            </div>
            {/*  navbar  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

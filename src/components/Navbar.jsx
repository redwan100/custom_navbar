import { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

import { navbarItems } from "../../db";

const Navbar = () => {
  const [navMenus, setNavItems] = useState(navbarItems);

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-center gap-2 w-full bg-slate-300/40 p-3">
        {navMenus.map((item) => (
          <div key={item.label}>
            {/*  navbar  */}
            <div className="relative w-full group">
              <a href="#" className="flex items-center min-w-max">
                {item.label}
                <BiChevronDown size={20} />
              </a>

              {/* ! child  */}

              {item.child && (
                <div className="absolute left-0 w-full bg-white shadow-md z-10 hidden  group-hover:block min-w-max">
                  <ul className="list-none">
                    {item.child.map((child) => (
                      <li key={child.label} className="relative group/child">
                        <a
                          href={child.path}
                          className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between gap-1"
                        >
                          {child.label} <BiChevronRight size={18} />
                        </a>

                        {/* nested child  */}
                        {child.nChild && (
                          <li key={child.label} className="relative">
                            <a
                              href={child.path}
                              className=" px-4 py-2 text-sm text-gray-700 group-hover/child:bg-gray-100  items-center justify-between gap-1 absolute -top-8 -right-[7rem] z-[100] bg-slate-400 min-w-max hidden group-hover/child:flex"
                            >
                              {child.nChild.label}
                            </a>
                          </li>
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

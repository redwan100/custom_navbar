import {
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiChevronUp,
} from "react-icons/bi";

const NavDropDownMenu = ({ navMenus, toggleFunc, toggle, dropDownItems }) => {
  return (
    <div className="bg-white p-3">
      <div className="flex flex-wrap items-center justify-center w-full relative container mx-auto text-[14px] font-semibold">
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
                <div className="absolute left-0 w-full bg-white z-10 hidden group-hover:block min-w-[12rem] max-w-max">
                  <ul className="list-none">
                    {item.child.map((child, i) => (
                      <li
                        key={child.label + i}
                        className="relative group/child"
                      >
                        <a
                          href={child.path}
                          className=" py-2 px-1 hover:bg-[#013773]/10 transition text-sm text-gray-700 hover:text-[#013773] cursor-pointer flex items-center justify-between gap-1"
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
                                  <a href={nc?.path} className="">
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
        <button
          onClick={toggleFunc}
          className="py-1 px-2 text-[14px] font-semibold min-w-max hover:text-[#013773] hover:bg-[#013773]/10 transition"
        >
          {toggle ? (
            <div className="flex items-center">
              show more <BiChevronDown />
            </div>
          ) : (
            <div className="flex items-center">
              show less
              <BiChevronUp />
            </div>
          )}
        </button>
      </div>

      {/* show more dropdown menu--------------- */}

      {!toggle ? (
        <div className="absolute right-10 top-10 bg-white shadow-md  rounded-md min-w-max text-[14px] font-semibold ">
          {dropDownItems.map((item) => (
            <div key={item.label}>
              {/*  navbar  */}
              <div className="relative w-full group">
                <a
                  href="#"
                  className="flex items-center gap-1 min-w-max  hover:text-[#013773] py-2 px-1 hover:bg-[#013773]/10 transition"
                >
                  {!item?.child && <span className="pl-5"></span>}
                  {item?.child && <BiChevronDown size={20} />}
                  {item.label}
                </a>

                {/* ! child  */}

                {item.child && (
                  <div className="absolute left-[-12.5rem] top-0 w-full bg-white z-10 hidden  group-hover:block min-w-max">
                    <ul className="list-none ">
                      {item.child.map((child) => (
                        <li key={child.label} className="relative group/child ">
                          <a
                            href={child.path}
                            className=" text-sm text-gray-700 hover:text-[#013773] cursor-pointer flex items-center justify-between gap-1 py-2 px-1 hover:bg-[#013773]/10 transition"
                          >
                            {child?.nChild && <BiChevronLeft size={18} />}
                            {child.label}
                          </a>

                          {/* nested child  */}
                          {child?.nChild?.length > 0 && (
                            <div className="absolute left-[-12rem] top-0 bg-white z-10 hidden group-hover/child:block min-w-[12rem] max-w-full ">
                              <ul className="list-none">
                                {child.nChild.map((nc, i) => (
                                  <li
                                    key={nc.label + i}
                                    className=" py-2 px-1 hover:bg-[#013773]/10 transition text-sm text-gray-700 hover:text-[#013773] cursor-pointer w-full"
                                  >
                                    <a href={nc?.path} className="">
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
      ) : null}
    </div>
  );
};

export default NavDropDownMenu;

import { useEffect, useState } from "react";
import { navbarItems } from "../db";
import MobileNavbar from "./components/MobileMenu";
import NavDropDownMenu from "./components/NavDropDownMenu";
import Navbar from "./components/Navbar";

const App = () => {
  const [navItems, setNavItems] = useState(navbarItems);
  const [navLeftSideItems, setNavLeftSideItems] = useState([]);
  const [navDropdownItems, setNavDropdownItems] = useState([]);

  const [toggle, setToggle] = useState(true);

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize.width > 600 && screenSize.width < 800) {
      setNavLeftSideItems(navItems.slice(0, 5));
      setNavDropdownItems(navItems.slice(5, 12));
    } else if (screenSize.width > 800 && screenSize.width < 1200) {
      setNavLeftSideItems(navItems.slice(0, 6));
      setNavDropdownItems(navItems.slice(6, 12));
    } else if (screenSize.width > 1200 && screenSize.width < 1400) {
      setNavLeftSideItems(navItems.slice(0, 7));
      setNavDropdownItems(navItems.slice(7, 12));
    } else if (screenSize.width >= 1400) {
      setNavLeftSideItems(navItems);
    }
  }, [navItems, screenSize]);

  const buttonToggle = () => {
    setToggle(() => !toggle);
  };

  let currentComponent;
  if (screenSize.width <= 600) {
    currentComponent = <MobileNavbar navbarItems={navItems} />;
  } else if (screenSize.width > 600 && screenSize.width <= 1400) {
    currentComponent = (
      <NavDropDownMenu
        navMenus={navLeftSideItems}
        dropDownItems={navDropdownItems}
        toggle={toggle}
        toggleFunc={buttonToggle}
      />
    );
  } else if (screenSize.width > 1400) {
    currentComponent = <Navbar />;
  }

  return (
    <div className="w-full min-h-[400vh] bg-slate-50">{currentComponent}</div>
  );
};

export default App;

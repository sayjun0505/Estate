import React, { FC } from "react";

interface MenuOverlayProps {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
  setImageIndex: (index: number) => void;
}

const MenuOverlay: FC<MenuOverlayProps> = ({ navbarOpen, setNavbarOpen, setImageIndex }) => {
  const menuItem = [
    "GRAY HOUSE",
    "BVA HOUSE",
    "WINDEWOOD AK HOUDR",
    "FRND HOUSE",
    "MONOGRAM HOUSE",
    "LIGHT HOUSE",
  ];
  const handleClickMenu = (key: number) => {
    setNavbarOpen(!navbarOpen);
    setImageIndex(key);
  };
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900/50 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <div className=" sm:mx-auto lg:mx-[300px] mt-20 h-[500px] overflow-y-hidden">
        <ul className="m-0 p-0 list-none tracking-widest">
          {menuItem.map((value, key) => {
            return (
              <li className="py-3 text-4xl" key={key}>
                <span
                  onClick={() => handleClickMenu(key)}
                  className="transition duration-300 hover:cursor-pointer text-gray-200/40 hover:text-gray-50"
                >
                  {value}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MenuOverlay;

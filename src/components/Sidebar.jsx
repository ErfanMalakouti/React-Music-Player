/* eslint-disable quotes */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { links } from "../assets/constants";
import logo from "../assets/logo.png";

const NavLinks = (handleClick) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#181624]">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="logo" className="w-full h-14 object-contain" />
          <h2 className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#8f5e25] to-[#fbf4a1]">
            EFI MUSIC
          </h2>
        </div>
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#181725] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="logo" className="w-full h-14 object-contain" />
          <h2 className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#8f5e25] to-[#fbf4a1]">
            EFI MUSIC
          </h2>
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;

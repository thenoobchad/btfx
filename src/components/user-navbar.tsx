"use client"

import { Dispatch, SetStateAction, useState } from "react";
import Copy from "./Copy";

export const UserNavbar = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <nav className="w-full p-2 z-10 ">
      <div className="relative flex justify-between">
        <a href="/">
          <h4 className="font-bold text-2xl">BTFX.</h4>
        </a>
        <div className="flex items-center gap-4">
          
          <div className={`${isActive && ""} top-10 right-[5px] z-10 fixed`}>
            <NavBtn isActive={isActive} setIsActive={setIsActive} />
          </div>
          <MenuBar isActive={isActive} />
        </div>
      </div>
    </nav>
  );
}

const userNavlist = [
    "Deposit",
    "Withdrawal",
    "Investment",
    "Profile",
    
]

const NavBtn = ({ isActive, setIsActive }:{isActive:boolean, setIsActive:Dispatch<SetStateAction<boolean>>}) => {
    
    return (
      <button
        onClick={() => setIsActive(!isActive)}
        className="flex flex-col gap-[5px] justify-center h-8 w-12 p-2 z-10"
      >
        <div
          className={`h-1 w-8 rounded-sm bg-white transition-all duration-300 ${isActive && "translate-y-1 rotate-45"}`}
        />
        <div
          className={`h-1 w-8 rounded-sm bg-white transition-all duration-300 ${isActive && "-translate-y-1 -rotate-45"}`}
        />
      </button>
    );
}

const MenuBar = ({isActive}: {isActive: boolean}) => {
  return (
    
      <div
        className={`fixed top-0 min-h-screen w-[300px] z-9  bg-black text-white transition-all duration-500 flex justify-center flex-col ${!isActive ? "-right-100" : "right-0"}`}
      >
        
        <ul className="flex h-full w-full flex-col items-center justify-center gap-4 p-2 ">
          <p className="text-md font-semibold tracking-widest capitalize">
            Dasboard
          </p>
          {userNavlist.map((item) => (
            <li
              key={item}
              className="text-lg font-semibold tracking-widest capitalize hover:underline"
            >
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          </ul>
          
      </div>
      
    );
}

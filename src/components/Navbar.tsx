import React from "react";

export default function Navbar() {
  const liStyle =
    "w-[80px] flex justify-center font-bold hover:text-text-black transition-all ease-in duration-75 cursor-pointer";

  const navBarList = ["소개", "프로젝트", "스터디", "연락처"];

  return (
    <nav className="fixed w-[100%] h-[60px] p-4 top-0 flex justify-end bg-white text-text-black shadow-md">
      <span className="material-symbols-outlined">clear_night</span>
      {/* <span className="material-symbols-outlined">clear_day</span> */}
      <ul className="flex hover:text-gray-400">
        {navBarList.map((navBarMenu, index) => (
          <li key={index} className={liStyle}>
            {navBarMenu}
          </li>
        ))}
      </ul>
    </nav>
  );
}

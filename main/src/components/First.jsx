import React from "react";
import brotherPic from "../assets/brother.jpg";
const First = () => {
  return (
    <>
      <div className="flex">
        <p className="text-lg px-3 py-1 m-1 flex-auto">Navbar</p>
        <ul className="flex-end items-center justify-between inline gap-5 space-x-8 p-3">
          <li className="inline-block">Home</li>
          <li className="inline-block">About</li>
          <li className="inline-block">Project</li>
        </ul>
        <hr className="bg-black" />
      </div>
      <hr className="border-none outline-none h-0.5 bg-black m-auto" />
      <div>
        <p className="text-3xl px-2">Hi! I am Abinash Neupane!</p>
      </div>
    </>
  );
};

export default First;

import React from "react";

const Second = () => {
  return (
    <>
      {/* Border */}
      <h1 className="p-4 m-2">Border IN TAILWIND</h1>
      <div className="border-4 border-sky-500 p-10 m-2 w-40">
        <div className="border-x-2 border-red-500 p-2 m-2 w-20">Fun?</div>
      </div>
      <p className="p-2">Another Border</p>
      <div className="divide-y divide-slate-700 text-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <hr
        className="border-none outline-none h-0.5 m-auto
       bg-gray-800"
      />
      {/* Grids */}
      <h1
        className="p-2 text-xl text-purple-800 
      stroke-black-1000"
      >
        Grids On Tailwind CSS
      </h1>
      <div className="flex flex-row gap-2">
        <div
          className="p-2 m-1 basis-1/4 hover:basis-1/3 border-2 text-center
         bg-cyan-300 border-black"
        >
          01
        </div>
        <div
          className="basis-1/2 border-2 bg-cyan-300 p-2 m-1 
        text-center border-black hover:basis-1/3"
        >
          02
        </div>
        <div
          className="basis-1/4 p-2 m-1 border-2
         border-black bg-cyan-300"
        >
          04
        </div>
      </div>
      <hr className="border-none outline-none h-0.5 m-auto bg-black" />
      <h1
        className="p-2 text-xl text-purple-800 
      stroke-black-1000"
      >
        Flex Direction
      </h1>
      <div className="flex flex-row p-1 m-1">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Second;

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
        Flex Direction (Row )
      </h1>
      <div className="flex flex-row md:flex-flex-wrap p-1 m-1 gap-6">
        <div
          className="bg-pink-500 border-2 border-black w-32
          text-center "
        >
          01
        </div>
        <div
          className="bg-pink-500 border-2 border-black w-32
          text-center "
        >
          03
        </div>
        <div
          className="bg-pink-500 border-2 border-black w-32
          text-center "
        >
          04
        </div>
        <div
          className="bg-pink-500 border-2 border-black w-32
          text-center "
        >
          05
        </div>
        <div
          className="bg-pink-500 border-2 border-black w-32
          text-center "
        >
          06
        </div>
        <div
          className="bg-pink-500 border-2 border-black w-32
          text-center "
        >
          07
        </div>
      </div>
      <hr className="border-none outline-none h-0.5 m-auto bg-black" />
      <h1
        className="p-2 text-xl text-purple-800 
      stroke-black-1000"
      >
        Flex Direction (Column)
      </h1>
      <div className="flex flex-col gap-2 m-1 p-1">
        <div className="hover:bg-red-500 border-2 border-b bg-purple-700 w-20 text-center ">
          02
        </div>
        <div className="border-2 border-b bg-purple-700 w-20 text-center ">
          01
        </div>
        <div className="border-2 border-b bg-purple-700 w-20 text-center ">
          03
        </div>
      </div>
      <hr className="border-none outline-none h-0.5 m-auto bg-black" />
      <div className="flex gap-3 p-1 m-1">
        <div
          className="flex-none border-2 border-black bg-blue-500 w-14 text-center h-10
        hover:bg-green-200"
        >
          01
        </div>
        <div
          className="flex-none border-2 border-black bg-blue-500 w-32 text-center h-10
        hover:grow-0"
        >
          01
        </div>
        <div
          className=" flex-auto border-2 border-black bg-blue-500 w-32 text-center h-10
        hover:grow-0"
        >
          01
        </div>
      </div>
      <hr className="border-none outline-none h-0.5 m-auto bg-black" />
      <h1
        className="p-2 text-xl text-purple-800 
      stroke-black-1000"
      >
        Flex Order
      </h1>

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

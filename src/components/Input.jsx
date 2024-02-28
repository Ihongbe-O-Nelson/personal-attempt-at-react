import React from "react";

const Input = () => {
  return (
    <div>
      {/* for mobile */}
      <div className="px-[8%]">
        <div
          className="fixed bg-transparent h-5 w-5 rounded-full mx-4 top-[17.25%] 
          z-20 border-[1.5px] border-gray-200"
        ></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="fixed z-10 h-12 top-[15%] w-[84%] 
             bg-slate-800 px-14 rounded-md text-sm text-gray-200"
        />
      </div>

      {/* for large screens  */}
      {/* <div className="lg:px-[27.5%]">
        <div
          className="lg:fixed bg-transparent h-5 w-5 rounded-full mx-4 top-[17.25%] 
        z-20 border-[1.5px] border-gray-200"
        ></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="lg:fixed z-10 h-12 top-[15%] w-[45%] 
             bg-slate-800 px-14 rounded-md text-sm text-gray-200"
        />
      </div> */}
    </div>
  );
};

export default Input;

import React from "react";
import { GoCircle } from "react-icons/go";

const Input = ({handleInput}) => {
  return (
    <div>
      {/* for mobile */}
      <div className="px-[8%] dark">
        <GoCircle
          className="fixed bg-transparent h-5 w-5 rounded-full mx-4 top-[17.25%] 
          z-20 border-[1.5px] border-gray-200"
        />

        <input
          type="text"
          placeholder="Create a new todo..."
          onChange={(e)=> handleInput(e)}
          className="fixed z-10 h-12 top-[15%] w-[84%] 
             bg-slate-800 px-14 rounded-md text-sm text-gray-200 dark:bg-white  "
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

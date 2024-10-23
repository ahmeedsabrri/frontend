import { useState } from "react";

import Cardslide from "./components/Cardslide"
function App() {
  const [isOpen, setIsOpen] = useState(true); // Changed to true for initial state

  return (
    <div className="relative w-full h-screen bg-[#1B1F26] overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00AF74] blur-[150px] opacity-40"
      />
    <div className="flex justify-center items-center w-screen min-h-screen">
        <div className="w-[1176px] h-[824px] border-white border-4 rounded-xl flex">
          <div className="absolute w-[587px] h-[821px] flex justify-center items-center">
            <div className="w-[479px] h-[578px] flex-row justify-center items-center">
              <h1 className="text-white font-Roboto font-semibold text-2xl">Please Enter your Account details</h1>
              <div className="w-[417px] h-[527px] flex items-center">
                <form action="" method="post" className="flex flex-col space-y-10">
                  <div className=" flex flex-col space-y-3">
                  <label className="text-white font-Roboto text-base">Email</label>
                  <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-[399px] h-[59px] bg-white rounded-lg"/>
                  <label className="text-white font-Roboto text-base">Password</label>
                  <input type="password" name="password" id="password" placeholder="***********" className="w-[399px] h-[59px] bg-white rounded-lg "/>
                  <a href="#" className="text-white underline font-Roboto text-base flex justify-end cursor-pointer">Forget Password</a>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-10">
                    <button className="text-white font-Roboto text-lg w-[399px] h-[59px] bg-[#00AF74] hover:bg-[#258e69] rounded-xl cursor-pointer">Sign in</button>
                    <button href="#" className="bg-white w-[78px] h-[71px] bg-intra-42 bg-cover hover:bg-[#565656] rounded-full"></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Cardslide />
          <div className="w-[587px] h-[821px] flex justify-center items-center">
            <div className="w-[481px] h-[730px] flex flex-col justify-center items-center">
              <div className="w-[435px] h-[435px] flex items-center ">
                <form action="" method="post" className="flex flex-col space-y-10">
                  <h1 className="text-white font-Roboto font-semibold text-2xl">Please Enter your Account details</h1>
                  <div className=" flex flex-col space-y-3">
                  <label className="text-white font-Roboto text-base">Username</label>
                  <input type="text" name="Username" id="Username" placeholder="Username" className="w-[399px] h-[59px] bg-white rounded-lg"/>
                  <label className="text-white font-Roboto text-base">Email</label>
                  <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-[399px] h-[59px] bg-white rounded-lg"/>
                  <label className="text-white font-Roboto text-base">Password</label>
                  <input type="password" name="password" id="password" placeholder="***********" className="w-[399px] h-[59px] bg-white rounded-lg "/>
                  <label className="text-white font-Roboto text-base">Confirm Password</label>
                  <input type="password" name="password" id="password" placeholder="***********" className="w-[399px] h-[59px] bg-white rounded-lg "/>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-10">
                    <button className="text-white font-Roboto text-lg w-[399px] h-[59px] bg-[#00AF74] hover:bg-[#258e69] rounded-xl cursor-pointer">Sign in</button>
                    <button href="#" className="bg-white w-[78px] h-[71px] bg-intra-42 bg-cover hover:bg-[#565656] rounded-full"></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

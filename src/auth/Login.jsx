import React from 'react'

function Login() {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
        <div className="w-[1176px] h-[824px] border-white border-4 rounded-xl flex">
          <div className="w-[587px] h-[821px] flex justify-center items-center">
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
          <div className="relative w-[586px] h-[817px]">
            <div className="absolute inset-0 bg-[#00AF74] rounded-xl"></div>
            {/* Semi-transparent background image */}
              <div className="absolute inset-0 bg-tennis-bro bg-cover opacity-25 flex justify-center"></div>
                {/* Content container */}
                <div className="relative flex flex-col justify-center items-center space-y-7 w-full h-full">
                    <img
                      src="/src/assets/Welcome to ft_trancedance.svg"
                      alt="Welcome"
                      className="w-[483px] h-[164px]"
                      />
                    <button
                      type='button'
                      className="hover:bg-[#1B1F26] hover:text-white w-[324px] h-[56px] border-2 border-[#1B1F26] rounded-xl cursor-pointer"
                      >
                      Create an account
                    </button>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Login
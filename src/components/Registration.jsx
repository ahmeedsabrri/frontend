
function Registration() {
    return (
        <div className="w-[587px] h-[821px] flex justify-center items-center">
            <div className="w-[481px] h-[730px] flex flex-col justify-center items-center">
              <div className=" flex items-center">
                <form action="" method="post" className="flex flex-col space-y-10 ">
                  <h1 className="text-white font-Roboto font-semibold text-2xl">Please Enter your Account details</h1>
                  <div className="flex flex-col space-y-3">
                    <label className="text-white font-Roboto text-base">Username</label>
                    <input type="text" name="Username" id="Username" placeholder="Username" className="w-[399px] h-[59px] bg-white rounded-lg"/>
                    <label className="text-white font-Roboto text-base">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-[399px] h-[59px] bg-white rounded-lg"/>
                    <label className="text-white font-Roboto text-base">Password</label>
                    <input type="password" name="password" id="password" placeholder="***********" className="w-[399px] h-[59px] bg-white rounded-lg "/>
                    <label className="text-white font-Roboto text-base">Confirm Password</label>
                    <input type="password" name="password" id="Confirmpassword" placeholder="***********" className="w-[399px] h-[59px] bg-white rounded-lg "/>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-10">
                    <button className="text-white font-Roboto text-lg w-[399px] h-[59px] bg-[#00AF74] hover:bg-[#258e69] rounded-xl cursor-pointer">Sign in</button>
                    <button href="#" className="bg-white w-[78px] h-[71px] bg-intra-42 bg-cover hover:bg-[#565656] rounded-full"></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    )
}

export default Registration
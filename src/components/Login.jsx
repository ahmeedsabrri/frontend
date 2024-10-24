import { useState } from 'react';

function Login() {

    const [emailValue,setEmailValue] = useState('')
    const [passwordValue,setPasswordValue] = useState('')

    // Update the email value
    function getEmail(e) {
        setEmailValue(e.target.value);
    }

    // Update the password value
    function getPassword(e) {
        
        setPasswordValue(e.target.value);
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': emailValue,
                'password': passwordValue,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.access);
            // document.cookie = data.access
            alert('Login successful!');
        } else {
            const errorData = await response.json();
            alert(`Login failed: ${errorData.detail || 'Invalid credentials'}`);
        }
    };

  return (
    <div className="absolute w-[587px] h-[821px] flex justify-center items-center">
        <div className="w-[479px] h-[578px] flex-row justify-center items-center">
          <h1 className="text-white font-Roboto font-semibold text-2xl">Please Enter your Account details</h1>
          <div className="w-[417px] h-[527px] flex items-center">
            
            <form className="flex flex-col space-y-10">
              <div className=" flex flex-col space-y-3">
              <label className="text-white font-Roboto text-base">Email</label>
              <input onChange={getEmail} type="text" name="email" id="emailLogin" placeholder="example@gmail.com" className="w-[399px] h-[59px] bg-white rounded-lg"/>
              <label className="text-white font-Roboto text-base">Password</label>
              <input onChange={getPassword}  type="password" name="password" id="passwordLogin" placeholder="***********" className="w-[399px] h-[59px] bg-white rounded-lg "/>
              <a href="#" className="text-white underline font-Roboto text-base flex justify-end cursor-pointer">Forget Password</a>
              </div>
              <div className="flex flex-col items-center justify-center space-y-10">
                <button onClick={handleLogin} type="submit" className="text-white font-Roboto text-lg w-[399px] h-[59px] bg-[#00AF74] hover:bg-[#258e69] rounded-xl cursor-pointer">Sign in</button>
                <button className="bg-white w-[78px] h-[71px] bg-intra-42 bg-cover hover:bg-[#565656] rounded-full"></button>
              </div>
            </form>
          
          </div>
        </div>
      </div>
  )
}

export default Login
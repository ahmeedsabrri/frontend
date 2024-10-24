
import Cardslide from "./components/Cardslide"
import Login from "./components/Login"
import Registration from "./components/Registration"
function App() {
    return (
      <main>
        <div className="relative w-full h-screen bg-[#1B1F26] overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00AF74] blur-[150px] opacity-40"
          />
        <div className="flex justify-center items-center w-screen min-h-screen">
            <div className="w-[1176px] h-[824px] border-white border-4 rounded-2xl flex">
              <Login/>
              <Cardslide />
              <Registration/>
            </div>
          </div>
        </div>
      </main>
    )
}
export default App

// import { motion } from "framer-motion";
// import { useState } from "react";

// function Cardslide() {
//     const [isOpen, setIsOpen] = useState(true); // Changed to true for initial state

    
//     return (

//     )
// }

// export default Cardslide

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Cardslide() {

    const CreatAcc = "Create an account";
    const Already = "Already have an account";

    const [isOpen, setIsOpen] = useState(() => {
        // Check local storage for previous state
        const storedState = localStorage.getItem("cardPosition");
        return storedState ? JSON.parse(storedState) : true; // Default to true if not found
    });

    useEffect(() => {
        // Store the state in local storage whenever it changes
        localStorage.setItem("cardPosition", JSON.stringify(isOpen));
    }, [isOpen]);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            className="relative w-[586px] h-[817px]"
            initial={{  x: isOpen ? "585px" : "0"}} // Start from right if isOpen, otherwise from left
            animate={{  x: isOpen ? "585px" : "0" }} // Animate left or right based on isOpen
            transition={{
                duration: 0.4,
                type: "Tween",
                stiffness: 100
            }}
        >
            <div className="absolute inset-0 bg-[#00AF74] rounded-xl"></div>
            <div className="absolute inset-0 bg-tennis-bro bg-cover opacity-25 flex justify-center"></div>
            <div className="relative flex flex-col justify-center items-center space-y-7 w-full h-full">
                <img
                    src="/src/assets/Welcome to ft_trancedance.svg"
                    alt="Welcome"
                    className="w-[483px] h-[164px]"
                />
                <button
                    onClick={handleClick}
                    type='button'
                    className="hover:bg-[#1B1F26] hover:text-white w-[324px] h-[56px] border-2 border-[#1B1F26] rounded-xl cursor-pointer"
                >
                    {isOpen ?  CreatAcc: Already}
                </button>
            </div>
        </motion.div>
    );
}

export default Cardslide;

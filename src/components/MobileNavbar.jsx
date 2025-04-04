import { useEffect } from "react"

export const MobileNavbar = ({menuOpen, setMenuOpen}) => {

    return (
        <div className = {`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
            <button onClick = {() => setMenuOpen(false)} className = "absolute top-6 right-6 w-7 h-7 cursor-pointer z-40 text-indigo-100 text-3xl focus:outline-none" aria-label = "Close menu">
            <span className = "text-indigo-200">&times;</span>            
            </button>
            
            <a onClick = {()=> setMenuOpen(false)} href="#home"     className={`text-2xl font-semibold text-indigo-100 my-4 transform transition-transfor duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}><span className = "text-indigo-200">Home</span></a>
            <a onClick = {()=> setMenuOpen(false)} href="#about"    className={`text-2xl font-semibold text-indigo-100 my-4 transform transition-transfor duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}><span className = "text-indigo-200">About</span></a>
            <a onClick = {()=> setMenuOpen(false)} href="#projects" className={`text-2xl font-semibold text-indigo-100 my-4 transform transition-transfor duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}><span className = "text-indigo-200">Projects</span></a>
            <a onClick = {()=> setMenuOpen(false)} href="#contact"  className={`text-2xl font-semibold text-indigo-100 my-4 transform transition-transfor duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}><span className = "text-indigo-200">Contact</span></a>
        </div>
    );
};
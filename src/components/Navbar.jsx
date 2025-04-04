import { useEffect } from "react"


export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return <nav className = "fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                    <a href="#home" >
                        <img src="./img/logo.png" alt="Logo" className="h-10 w-auto scale-120" />
                    </a>

                    <div className = "w-7 h-5 cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        <span className = "text-indigo-200">&#9776;</span>
                    </div>

                    <div className = "hidden md:flex items-center space-x-4">
                        <a href="#home" className="text-gray-200 hover:text-white transition-colors"><span className = "text-indigo-200">Home</span></a>
                        <a href="#about" className="text-gray-200 hover:text-white transition-colors"><span className = "text-indigo-200">About</span></a>
                        <a href="#projects" className="text-gray-200 hover:text-white transition-colors"><span className = "text-indigo-200">Projects</span></a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors"><span className = "text-indigo-200">Contact</span></a>
                    </div>

                    </div>
                </div>      
            </nav>
}
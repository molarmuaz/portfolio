import { Reveal } from "../Reveal";
export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex justify-center items-center relative">
            <Reveal>
                <div className="text-center z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
                        Hi, My name is Muaz Ahmed
                    </h1>

                    <p className = "text-gray-300 text-lg mb-8 max-w-4xl mx-auto ">
                    CS Junior @ FAST NUCES | Working on Web Dev and AI Projects 
                    </p>
                    <div className = "flex justify-center space-x-4">
                        <a href = "#projects" className = "bg-indigo-600 text-gray-300 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                            My Projects
                        </a>

                        <a href = "#contact" className = "text-indigo-400 border-2 border-indigo-600/60 text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-indigo-600/10">
                            Contact Me
                        </a>
                    </div>
                </div>
            </Reveal>

        </section>
    );
};
import { Reveal } from "../Reveal";


export const About = () => {
    const langs = ["C++", "Python", "Java", "C#"];
    const webdev = ["Javascript", "React.js", "Node.js", "HTML/CSS"];
    const db = ["MySQL", "MongoDB", "PostgreSQL"];
    const design = ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <Reveal>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Hi, I’m <span className="font-bold">Muaz</span>, a Computer Science student with a passion for{" "}
                            <span className="font-bold">AI/ML, full-stack development, and UI/UX design</span>. I love
                            building projects that are both functional and aesthetically pleasing, always focusing on user experience
                            and design. When I’m not coding, I’m leading as{" "}
                            <span className="font-bold">Vice President of the FAST Debating Society</span>, or diving into{" "}
                            <span className="font-bold">music production</span> and{" "}
                            <span className="font-bold">graphic design</span>. I'm always eager to learn and
                            collaborate—let's{" "}
                            <a
                                href="https://www.linkedin.com/in/mmuazahmed/"
                                className="font-bold text-blue-400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                connect
                            </a>{" "}
                            and create something great together!
                        </p>
                        <div className = "flex justify-center space-x-4">
                            <a href = "../../assets/ResumeMuazAhmed2025.pdf" className = "bg-indigo-600 text-gray-300 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                                View my Resume
                            </a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="font-bold text-gray-300 text-xl mb-4 ">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {langs.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/20 text-indigo-500 py-1 px-3 rounded-full text-m hover:bg-indigo-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="font-bold text-gray-300 text-xl mb-4">Web Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {webdev.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/20 text-indigo-500 py-1 px-3 rounded-full text-m hover:bg-indigo-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="font-bold text-gray-300 text-xl mb-4">Database</h3>
                                <div className="flex flex-wrap gap-2">
                                    {db.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/20 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="font-bold text-gray-300 text-xl mb-4">Design</h3>
                                <div className="flex flex-wrap gap-2">
                                    {design.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/20 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className = "p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                    <h3 className = "text-xl font-bold mb-4 text-gray-300">
                                        🎓 Education
                                    </h3>
                                    <ul className = "list-disc list-inside space-y-2 text-gray-300">
                                        <li>
                                            <strong>B.S Computer Science </strong>
                                            - FAST NUCES [2022-2026 (Hopefully)]
                                        </li>

                                        <li>
                                            <strong>O/A Levels (Pre-Engineering) </strong>
                                            - Benchmark School System [2018-2022]
                                        </li>
                                    </ul>

                        </div>

                        <div className = "p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                    <h3 className = "text-xl font-bold mb-4 text-gray-300">
                                        🗣️ Soft Skills
                                    </h3>
                                    <ul className = "list-disc list-inside space-y-2 text-gray-300">
                                        <li>
                                            Project Management
                                        </li>

                                        <li>
                                            Public Speaking 
                                        </li>

                                        <li>
                                            Technical Writing
                                        </li>

                                        <li>
                                            Leadership
                                        </li>
                                    </ul>

                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

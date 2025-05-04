import { Reveal } from "../Reveal"

export const Projects = () => {
    return (
        <section id = "projects" className = "min-h-screen flex items-center justify-center py-20">
            <Reveal>
                <div className = "max-w-5xl mx-auto px-4">
                    <h2 className = "text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent text-center">Projects</h2>
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-border-indigo-500/30 hover:-shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer">
                            <h3 className = "text-xl font-bold mb-2">
                                TableForWho - UI/UX Design
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A concept project that reimagines the dining reservation experience through a user-centered lens. This case study walks through the entire UX process—from initial user interviews and pain point analysis to wireframes, high-fidelity mockups, and usability testing. Focused on solving real frustrations with clarity, personalization, and accessible design, the final prototype delivers both form and function.
                            </p>
                            <div>
                                {["Figma","Photoshop","UX Research", "Wireframing"].map((tech,key) =>(
                                    <span
                                    key={key}
                                    className="bg-indigo-500/20 text-indigo-400 py-1 px-3 rounded-full text-xs hover:bg-indigo-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className = "flex-justify-between items-center mt-4">
                                <a href="#" className="text-indigo-400 hover:text-indigo-300 transition">View Project →</a>
                            </div>
                        </div>

                        <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-border-indigo-500/30 hover:-shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer">
                            <h3 className = "text-xl font-bold mb-2">
                                TEZ - Bus Tracking & Transport Platform
                            </h3>
                            <p className="text-gray-400 mb-4">
                            A real-time bus management app for institutions. Built the responsive frontend enabling live tracking, seat monitoring, and digital ticketing with a clean, accessible interface.
                            </p>
                            <div>
                                {["React.js","Git"].map((tech,key) =>(
                                    <span
                                    key={key}
                                    className="bg-indigo-500/20 text-indigo-400 py-1 px-3 rounded-full text-xs hover:bg-indigo-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className = "flex-justify-between items-center mt-4">
                                <a href="https://molarmuaz.github.io/tez/" className="text-indigo-400 hover:text-indigo-300 transition">View Project →</a>
                            </div>
                        </div>

                        <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-border-indigo-500/30 hover:-shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer">
                            <h3 className = "text-xl font-bold mb-2">
                                XYZ
                            </h3>
                            <p className="text-gray-400 mb-4">
                                afaujehfaouefghaoeughaoudfhgaouehgaoudfh
                            </p>
                            <div>
                                {["ABC","SEGE","WRWR"].map((tech,key) =>(
                                    <span
                                    key={key}
                                    className="bg-indigo-500/20 text-indigo-400 py-1 px-3 rounded-full text-xs hover:bg-indigo-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className = "flex-justify-between items-center mt-4">
                                <a href="#" className="text-indigo-400 hover:text-indigo-300 transition">View Project →</a>
                            </div>
                        </div>

                        <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-border-indigo-500/30 hover:-shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer">
                            <h3 className = "text-xl font-bold mb-2">
                            TableForWho - UI/UX Design
                            </h3>
                            <p className="text-gray-400 mb-4">
                            Designed a modern, reservation app focused on clean UI, usability, intuitive flows, and personalized booking. Crafted all screens, components, and interactions to enhance usability and aesthetics.
                            </p>
                            <div>
                                {["Figma","Photoshop","UX Research", "Wireframing", "Prototyping"].map((tech,key) =>(
                                    <span
                                    key={key}
                                    className="bg-indigo-500/20 text-indigo-400 py-1 px-3 rounded-full text-xs hover:bg-indigo-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className = "flex-justify-between items-center mt-4">
                                <a href="https://www.behance.net/gallery/177798751/TableForWho-Reservations-concept-app-(UIUX)?tracking_source=project_owner_other_projects" className="text-indigo-400 hover:text-indigo-300 transition">View Project →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}
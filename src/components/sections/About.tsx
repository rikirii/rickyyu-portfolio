import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const languageList = [
        "C#",
        "C++",
        "JavaScript",
        "React",
        "Typscript",
    ];

    const tools = [
        "Unity",
        "Maya",
        "Axure",
        "Git",
        "Unreal Engine",
        "Clip Paint Studio",
    ];

    return (
        <section id="about"
            className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    {/* border-white/10 border */}
                    {/* main section */}
                    <div className="rounded-xl p-8  hover:-translate-y-1 transition-all">

                        {/* short introduction to yourself */}
                        <p className="text-gray-300 mb-6">
                            I need internships. I need life. I need help. I need friends
                            I can build webs by coping from others. please
                        </p>

                        {/* show skills */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                                {/* show all the tools */}
                                <div className="flex flex-wrap gap-2">
                                    {languageList.map((lang, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"

                                        >{lang}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Tools</h3>
                                {/* show all the tools */}
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tool, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"

                                        >{tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>B.S. in Game Design and Development</strong> - Rochester Institute of Technology
                                        (2022- Expected: 2026)
                                    </li>

                                    <li>
                                        Relevant Coursework: Web Development, Game design and development...
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-xl hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">Changeling VR - Game Developer Intern (May 2024 - August 2024)</h4>
                                        <p>
                                            Refined onboarding levels for a better feeling
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
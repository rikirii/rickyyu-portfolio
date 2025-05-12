import { useEffect } from "react";

type NavbarProps ={
    menuOpen: boolean;
    setMenuOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({menuOpen, setMenuOpen} : NavbarProps) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgb(28,35,53,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* logo */}
                    <a href="#home" className="font-mono text-xl font-bold text-[rgb(238, 241, 229)]">
                        Kiri<span className="text-[rgb(239,188,213)]">.dev</span>
                    </a>

                    {/* mobile menu */}
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() =>  setMenuOpen((prev)=> !prev) }
                    >
                        &#9776;
                    </div>

                    {/* desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-[rgb(238, 241, 229)] hover:text-white transition:colors">
                            Home
                        </a>

                        <a href="#about" className="text-[rgb(238, 241, 229)] hover:text-white transition:colors">
                            About
                        </a>

                        <a href="#projects" className="text-[rgb(238, 241, 229)] hover:text-white transition:colors">
                            Projects
                        </a>

                        <a href="#contact" className="text-[rgb(238, 241, 229)] hover:text-white transition:colors">
                            Contact
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};
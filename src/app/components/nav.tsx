'use client'
import { Link } from 'react-scroll';

export default function Nav() {
    return (
        <nav className="fixed w-full z-50 grid grid-cols-12 bg-[#917FB3] items-center">
            <div className="col-span-8 col-start-1">
                <div className="flex flex-row">
                    <Link 
                        to="home" 
                        smooth={true} 
                        duration={500}
                    >
                        <div className="grid hover:bg-[#8874AC] active:bg-[#655288] h-16 w-32"> 
                            <p className="text-xl text-[#FFFFFF] m-auto">Home</p>
                        </div>
                    </Link>
                    <Link 
                        to="projects" 
                        smooth={true} 
                        duration={500}
                    >
                        <div className="grid hover:bg-[#8874AC] active:bg-[#655288] h-16 w-32"> 
                            <p className="text-xl text-[#FFFFFF] m-auto">Projects</p>
                        </div>
                    </Link>
                    <Link 
                        to="aboutme" 
                        smooth={true} 
                        duration={500}
                    >
                        <div className="grid hover:bg-[#8874AC] active:bg-[#655288] h-16 w-32"> 
                            <p className="text-xl text-[#FFFFFF] m-auto">About Me</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-span-4 col-start-9">
                <div className="flex flex-row justify-end">
                    <Link 
                        to="contact" 
                        smooth={true} 
                        duration={500}
                    >
                        <div className="grid hover:bg-[#8874AC] active:bg-[#655288] h-16 w-32"> 
                            <p className="text-xl text-[#FFFFFF] m-auto">Contact</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
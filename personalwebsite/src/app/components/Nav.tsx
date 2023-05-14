export default function Nav() {
    return (
        <>
        <nav className="grid grid-cols-12 bg-[#917FB3] items-center">
            <div className="grid hover:bg-[#8874AC] active:bg-[#655288] h-16 col-span-1">
                <a className="text-xl text-[#FFFFFF] m-auto" href="/">Home</a>
            </div>
            <div className="grid hover:bg-[#8874AC] active:bg-[#655288] h-16 col-span-1">
                <a className="text-xl text-[#FFFFFF] m-auto" href="/projects">Projects</a>
            </div>
            <div className="grid hover:bg-[#8874AC] active:bg-[#655288] h-16 col-span-1">
                <a className="text-xl text-[#FFFFFF] m-auto" href="/blogs">Blogs</a>
            </div>
            <div className="grid hover:bg-[#8874AC] active:bg-[#655288] h-16 col-span-1">
                <a className="text-xl text-[#FFFFFF] m-auto" href="/aboutme">About Me</a>
            </div>
            <div className="grid hover:bg-[#8874AC] active:bg-[#655288] h-16 col-span-1 col-start-12">
                <a className="text-xl text-[#FFFFFF] m-auto" href="/contact">Contact</a>
            </div>
        </nav>
        </>
    )
}
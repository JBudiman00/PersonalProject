export default function About () {
    return(
        <div className="animate-fade-up">
            <div className="h-6"></div>
            <div className="grid grid-cols-5 h-16">
                <div className="flex items-center justify-center col-start-3 col-span-1 text-2xl text-[#2A2F4F] bg-[#E5BEEC] text-center rounded-lg font-bold">
                    <p>Contact</p>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-32 pt-10">
                <a href="https://www.linkedin.com/in/jonathan-budiman-3a75201b8/" target="_blank">
                    <img src="/LinkedIn.png" className="w-16"/>
                </a>
                <a href="https://www.linkedin.com/in/jonathan-budiman-3a75201b8/" target="_blank">
                    <img src="/githubicon.png" className="w-16"/>
                </a>
                <a href="mailto:jbudiman@purdue.edu">
                    <img src="/mail.png" className="w-16"/>
                </a>
            </div>
        </div>
    );
}
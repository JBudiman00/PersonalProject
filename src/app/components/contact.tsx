export default function About () {
    return(
        <div className="animate-fade-up bg-[#917FB3]" id="contact">
            <div className="h-6"></div>
            <div className="flex flex-row justify-center items-center gap-32 pt-5">
                <a href="https://www.linkedin.com/in/jonathan-budiman-3a75201b8/" target="_blank">
                    <img src="/LinkedIn.png" className="w-16"/>
                </a>
                <a href="https://github.com/jbudiman00" target="_blank">
                    <img src="/githubicon.png" className="w-16"/>
                </a>
                <a href="mailto:jbudiman@purdue.edu">
                    <img src="/mail.png" className="w-16"/>
                </a>
            </div>
            <div className="h-12"></div>
            <p className="text-center">&copy; Copyright 2023. All rights reserved.</p>
            <div className="h-6"></div>
        </div>
    );
}
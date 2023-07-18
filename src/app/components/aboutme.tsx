export default function About () {
    const profile=`Jonathan Budiman is a rising senior at Purdue University majoring in Industrial Engineering
    with minors in Statistics and Management. He's grown passion for computationa optimization as a result
    of his studies in class. He took one unique class, IE 332, that changed his out look on programmming.
    Through this class, he worked on a full-stack webdev project with machine learning capabilities. 
    using PHP, R and MySQL. These outlets rapidly introduced him to new fields that struck resounded within him.
    Today, he's seeking opportunities in the software space as a project manager or software developer. `;
    
    return(
        <div className="animate-fade-up" id="aboutme">
            <div className="h-6"></div>
            <div className="grid grid-cols-5 h-16">
                <div className="flex items-center justify-center col-start-3 col-span-1 text-2xl text-[#2A2F4F] bg-[#E5BEEC] text-center rounded-lg font-bold">
                    <p>About Me</p>
                </div>
            </div>
            <div className="flex justify-center">
                <img src="/profile.jfif" className="w-1/4 rounded-lg my-3"/>
            </div>
            <div className="flex justify-center" >
                <div className="bg-[#E5BEEC] text-left rounded-lg w-2/3 px-2 pb-2">
                    {profile}
                </div>
            </div>
        </div>
    );
}
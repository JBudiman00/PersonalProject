export default function About () {
    const profile=``;

    const block = (content: string) => {
        return (
            <div className="bg-[#2A2F4F] rounded-xl py-1 px-2 mb-2">
                {content}
            </div>
        );
    }
    
    return(
        <div className="animate-fade-up" id="aboutme">
            <div className="h-6"></div>
            <div className="grid grid-cols-5 h-16">
                <div className="flex items-center justify-center col-start-3 col-span-1 text-2xl text-[#2A2F4F] bg-[#E5BEEC] text-center rounded-lg font-bold">
                    <p>About Me</p>
                </div>
            </div>
            <div className="h-6"></div>
            <div className="flex justify-center">
                <img src="/profile.jfif" className="w-1/4 rounded-lg"/>
            </div>
            <div className="h-6"></div>
            <div className="flex justify-center" >
                <div className="flex flex-col items-center bg-[#E5BEEC] rounded-lg w-2/3 p-2">
                    <div className="bg-[#917FB3] text-[#FDE2F3] w-2/3 rounded-lg p-2">
                        <div className="flex flex-row justify-around  text-xl pt-2 text-left">
                            <div className="flex flex-col">
                                {block('Name: Jonathan Budiman')}
                                {block('Major: Industrial Engineering')}
                                {block('Minor(s): Statistics + Management')}
                            </div>
                            <div className="w-4"></div>
                            <div className="flex flex-col">
                                {block('Expected Graduation: Dec 2023')}
                                {block('Purdue University - West Lafayette')}
                                {block('GPA: 3.91')}
                            </div>
                        </div>
                    </div>
                    <div className="h-3"></div>
                    <div className="bg-[#917FB3] text-[#FDE2F3] w-2/3 rounded-lg py-2 px-4 text-lg">
                    &emsp;As an Industrial Engineering major at Purdue University, my major involves breadth rather than depth. 
                    There are many fields and paths Industrial Engineerings can partake, with efficiency and optimization as a core principal for the major.
                    In fall of 2022, I took one unique class, IE 332, that changed my entire outlook on programmming.
                    <br></br>&emsp;In this class, I worked on a full-stack web development project with machine learning capabilities. 
                    Essentially, the project was to create stock portfolio fantasy game. On the frontend, I had to create user authentication so that 
                    unique users and players could look at a list of stocks pulled from the yahoo API and make informed decisions on purchases.
                    At the end of each week, the end user balance of their stocks would be measured against other players within the league and points would be assigned,
                    similar to any other fantasy type game. I learned the basics of frontend, utilizing CSS, Javascript and PHP to build it.
                    From the backend, PHP was also utilized to extract information from a MySQL database. As a side component, our project had to include a stock portfolio
                    recommendation system. 
                    <br></br>&emsp;Using logistic regression, I designed a ML model that could accurately predict whether a stock's variance would be either positive or negative 
                    with ~65% accuracyy. The Markowitz mean-variance portfolio algorithm ingested the stocks that were percieved to have a high chance of continually high variance and
                    would diversify the portfolio to reduce the overall risk associated. This machine model was developed and deployed within R.  
                    <br></br>&emsp;Through this experience, I learned to love software development. The entire process from designing to documentation to scaling to building for production presented
                    challenges I loved facing. It lead me to take on software development in my free time and learn more about the web development ecosystem. 
                    Today, I continue to get better at the craft and am seeking opportunities in the software space as a software developer, devops and other technical-facing roles.
                    </div>
                </div>
            </div>
            <div className="h-6"></div>
        </div>
    );
}
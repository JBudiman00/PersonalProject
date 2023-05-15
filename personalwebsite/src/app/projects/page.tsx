import ProjectContent from '../components/Project';

export default function Project () {
    const content0=`For this personal website I built, I wanted to strengthen my frontend development skills. I used Figma to design
    the prototype for the website before building it. It really helps with the organization and structure. I used Next.JS, which is built on 
    top of React.JS and handles a lot of the tedius frontend web configurations and used Tailwind to customize each CSS component. Overall,
    building projects using CSS is difficult, but also highly rewarding. `;

    const content1=`For the Movie Review website, the goal was to experiment and create a full stack project from scratch. 
    I had already worked on projects with React.JS and MySQL before but had never worked on a project with Express.JS.
    Using ChatGPT generated data, the website displays movie titles and basic info in component cards and allows users to add comments.
    These comments are updated dynmaically and stored in a basic MySQL database. Due to cost constraints, I wanted to use a free server to host my backend.
    The best solution I found was render, but it has to npm build the backend script each time the web app is loaded and is slow, so movies may not populate
    right away if you click on the website link. The frontend is hosted through firebase.`;

    const content2 =`For the Pokemon website, the goal was to learn the React.JS framework. Data is pulled from PokeAPI
    and shows basic pokemon information. Because there are so many pokemon, data is pulled in sets of 10. In addition, users
    can select pokemon and add them to their deck for up to 6 total pokemon. This data was stored in a basic Firebase real-time NoSQL database. 
    The website was hosted using firebase.`;
    
    return (
        <>
        <div className="h-6"></div>
        <div className="grid grid-cols-5 h-16 animate-fade">
            <div className="flex items-center justify-center col-start-3 col-span-1 text-2xl text-[#2A2F4F] bg-[#E5BEEC] text-center rounded-lg font-bold">
                <p>Projects</p>
            </div>
        </div>
        <div className="h-6"></div>
        <div className="flex flex-col items-center gap-10">
            <ProjectContent content={content0} framework={["Next.JS", "Tailwind CSS"]} languages={["HTML", "TypeScript", "CSS"]} git="https://github.com/JBudiman00/PersonalProject" website="tbd" title="Personal Website"/>
            <ProjectContent content={content1} framework={["React.JS", "Express.JS", "MySQL"]} languages={["HTML", "JavaScript", "CSS","SQL"]} git="https://github.com/JBudiman00/MovieReview" website="https://moviereviewfrontend.web.app/" title="Movie Review"/>
            <ProjectContent content={content2} framework={["React.JS"]} languages={["HTML", "JavaScript", "CSS"]} git="https://github.com/JBudiman00/PokemonWebDev" website="https://pokemonvisual-73748.web.app/" title="Pokemon Selection"/>
        </div>
        <div className="h-6"></div>
        </>
    );
}
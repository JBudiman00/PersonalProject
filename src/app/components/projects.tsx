import ProjectContent from './block';

export default function Project () {
    const content0=`For this personal website I built, I wanted to strengthen my frontend dewsign and development skills. I used Figma to design
    the prototype layout for the website. It really helped with the organization and structure of the project. Because the website I was build was rather generic,
    I used Next.JS to handle a lot of the tedius frontend web configurations. In addition, I used Tailwind for standard and utility-size CSS components. Taking the
    designs I made in Figma to reality proved tougher than I thought. But it helped shape my understanding of CSS and how to position and structure items
    based off it's unique logic. `;

    const content1=`For the Movie Review website, the goal was to experiment and create a full stack project from scratch. 
    I had already worked on projects with React.JS and MySQL before but had never worked on a project with Express.JS.
    Using ChatGPT generated dummy data, the website displays movie titles and basic info in component cards and allows users to add comments.
    These comments are updated dynmaically and stored in a basic MySQL database. Due to cost constraints, a free but slow server hosts my backend.
    Render is the solution for this case, but it has to run an npm buildscript each time the web app is loaded. This leads to slow initial load times, 
    so movies may not populate right away if you click on the website link. The frontend is hosted in firebase.`;

    const content2 =`For the Pokemon website, the goal was to learn the React.JS framework. Data is pulled from PokeAPI
    and shows basic pokemon information. Because there are so many pokemon, data is pulled in sets of 10. In addition, users
    can select pokemon and add them to their deck for up to 6 total pokemon. This data was stored in a basic Firebase real-time NoSQL database. 
    The website was hosted using firebase.`;

    const content3 =`I created a blog website to share the adventures of my girlfrieand I. Using a basic CRUD application, I accessed a MySQL database
    that held article information and key login information for administrative access. For general users on the website, there's a UI featuring different articles,
    a section where blogs can be searched by category and the blog pages themselves. The difficult part was creating the UI for the administrative portion.
    Admin users have access to create, update and delete blogs. A separate and special UI was created to allow admins to have this connectivity from the web.
    JWT authentication tokens were used to create and verify admin identification through http-only cookies. The security portion and logistics was the hardest
    part of this website. Although live and active, this project continues to be a work-in-progress development. The website backend and frontend are served separtely
    on Vercel. Serverless functions run the backend because the API is simple and light in nature; it is best suited for this use-case.`;

    const content4 =`I was commissioned for a project to create what was essentially a google photos clone without the use of a google photos email. 
    Security was the essence of this website, as the client did not want users to need a google email to access the photos nor did he want 
    a google cloud provider to host the images. This website was made for private purposes, so the link cannot be shared, though the github is available
    to follow along. Beyond the login/sign up page, users can view their photo gallery, create and update photo albums, add users to their photo albums
    and view albums that have been shared with them. Given the complex nature between photo ownership and viewship a complex backend solution was developed
    to minimize server load and render times. JWT authentication http-only tokens are utilized for a high-level of security protection and for the difficulty
    associated with decryption this type of token. Designing a complex backend and frontend proved difficult for this project, it was like switching between
    two different mindsets and having to keep track of the restraints and requirements for each. `;
    
    return (
        <div id="projects">
            <div className="h-6"></div>
            <div className="grid grid-cols-5 h-16 animate-fade">
                <div className="flex items-center justify-center col-start-3 col-span-1 text-2xl text-[#2A2F4F] bg-[#E5BEEC] text-center rounded-lg font-bold">
                    <p>Projects</p>
                </div>
            </div>
            <div className="h-6"></div>
            <div className="flex flex-col items-center gap-10">
                <ProjectContent 
                    content={content3} 
                    framework={["Next.JS", "Tailwind CSS", "Express.JS", "Prisma", "MySQL"]} 
                    languages={["TypeScript", "CSS", "SQL"]} 
                    git="https://github.com/JBudiman00/BlogSite" 
                    website="https://chloe-nathan-blog-site.vercel.app/" 
                    title="Blog Website"
                />
                <ProjectContent 
                    content={content4} 
                    framework={["Next.JS", "Tailwind CSS", "Express.JS", "Prisma", "MySQL"]} 
                    languages={["TypeScript", "CSS", "SQL"]} 
                    git="https://github.com/JBudiman00/PhotoDrive" 
                    website="" 
                    title="PhotoDrive"
                />
                <ProjectContent 
                    content={content0} 
                    framework={["Next.JS", "Tailwind CSS"]} 
                    languages={["TypeScript", "CSS"]} 
                    git="https://github.com/JBudiman00/PersonalProject" 
                    website="https://jonathan-budiman-portfolio.vercel.app/" 
                    title="Personal Website"
                />
                <ProjectContent 
                    content={content1} 
                    framework={["React.JS", "Express.JS", "MySQL"]} 
                    languages={["JavaScript", "CSS","SQL"]} 
                    git="https://github.com/JBudiman00/MovieReview" 
                    website="https://moviereviewfrontend.web.app/" 
                    title="Movie Review"
                />
                <ProjectContent 
                    content={content2} 
                    framework={["React.JS"]} 
                    languages={["JavaScript", "CSS"]} 
                    git="https://github.com/JBudiman00/PokemonWebDev" 
                    website="https://pokemonvisual-73748.web.app/" 
                    title="Pokemon Selection"
                />
            </div>
            <div className="h-6"></div>
        </div>
    );
}
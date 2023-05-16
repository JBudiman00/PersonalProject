import Blog from '../components/blog';

export default function BlogContent () {
    const content0 = `Using an airfryer can leave surprisngly good results for cooking braised pork belly. 
    My goal was to make porkbelly with a thick, crunchy crust. Using this recipe: https://airfryanytime.com/air-fryer-pork-belly/
    I was able to easily achieve this goal in a matter under 2 hours. `;
    const content1 = `During winter break of 2022, I visited San Antonio, Dallas, Austin and Texas.
    Here are my takeways:
    1. It's extremely hot, even in the winter
    2. The tech scene is booming in Austin! So many different tech companies have setup headquarters here. 
    This does lead to a more crowded environment however. 
    3. The food is AMAZING. Texas barbeque, TexMex and even the asian food there all tasted wonderful.`;
    const content2 = `As a PurdueTHINK consultant, I had the opportunity to work on two different projects.
    These projects focused on marketing and operations strategy, along with a digital transformation implementation.
    In Fall 2022, I worked on a project with the Purdue College of Pharmacy to develop a forecasting, product mix, location
    and branding strategy for their vending machines that supplied sexual health necessities. In Spring 2023, I stepped up
    and became a Project Manager. My team of 7 worked with Purdue Libraries and Occuspace to develop a marketing strategy and implemented 
    a digital transformation to track student occupancy at libraries. We found student insights to help garner effective marketing
    and used a React.JS framework to interact with the Occuspace API and show Purdue-specific dashboard insights.`;
    
    return(
        <>
            <div className="h-6"></div>
            <div className="grid grid-cols-5 h-16 animate-fade-up">
                <div className="flex items-center justify-center col-start-3 col-span-1 text-2xl text-[#2A2F4F] bg-[#E5BEEC] text-center rounded-lg font-bold">
                    <p>Blogs</p>
                </div>
            </div>
            <div className="h-6"></div>
            <div className="flex flex-row justify-center gap-12">
                <Blog title="Cooking Braised Pork Belly with an Air Fryer" content={content0} />
                <Blog title="Texas: A trip for the ages" content={content1} />
                <Blog title="PurdueTHINK Project" content={content2} />
            </div>
        </>
    );
}
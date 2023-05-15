import Blog from '../components/blog';

export default function BlogContent () {
    const content1 = `During winter break of 2022, I visited San Antonio, Dallas, Austin and Texas.
    Here are my takeways.`;
    const content2 = `As a PurdueTHINK consultant, I had the opportunity to work on two different projects.
    These projects focused on marketing and operations strategy, along with a digital transformation implementation.
    Find out more here.`;
    
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
                <Blog title="Cooking Braised Pork Belly with an Air Fryer" content="Find out how I made braised pork belly here" />
                <Blog title="Texas: A trip for the ages" content={content1} />
                <Blog title="PurdueTHINK Project" content={content2} />
            </div>
        </>
    );
}
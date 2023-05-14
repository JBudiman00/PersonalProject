interface Content {
    content: string;
    framework: Array<String>;
    languages: Array<String>;
    git: string;
    website: string;
    title: string;
}

export default function ProjectContent(props: Content) {
    const content = props.content;
    const framework = props.framework;
    const languages = props.languages;
    const git = props.git;
    const website = props.website;
    const title = props.title;

    const list = (title: String, arr: Array<String>) => {
        return (
            <div className="flex flex-col content-start bg-[#917FB3] rounded-lg items-center pb-3">
                <p className="text-[#FDE2F3] pt-2">{title}</p>
                {arr.map((item) => {
                    return (
                        <div className="flex bg-[#2A2F4F] text-[#FDE2F3] w-5/6 mt-2 rounded-xl h-8 items-center justify-center">
                            <p>{item}</p>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="bg-[#E5BEEC] w-4/5 text-center rounded-lg pl-3 pr-3 pb-3">
            <div className="grid grid-cols-5">
                <p className="col-start-3 text-xl text-[#E5BEEC] pt-2 pb-2 bg-[#917FB3] rounded-lg items-center my-2">
                    {title}
                </p>
            </div>
            <div className="flex flex-col content-start bg-[#917FB3] rounded-lg items-center pb-3">
                <p className="text-[#E5BEEC] mx-2 mt-1">{content}</p>
            </div>
            <div className="h-8"></div>
            <div className="flex flex gap-x-32 justify-center">
                <div className="flex flex-col w-1/5">
                    {list('Frameworks', framework)}
                    <a href={git} target="_blank">
                        <img className="h-10 w-10 mx-auto mt-2" src="/githubicon.png" />
                    </a>
                </div>
                <div className="flex flex-col w-1/5">
                    {list('Languages', languages)}
                    <a href={website} target="_blank">
                        <img className="h-10 w-10 mx-auto mt-2" src="/link.png" />
                    </a>
                </div>
            </div>
        </div>
    );
}
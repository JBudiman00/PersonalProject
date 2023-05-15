interface Content {
    title: string;
    content: string;
}

export default function BlogContent(props: Content) {
    const content = props.content;
    const title = props.title;

    return (
        <div className="bg-[#E5BEEC] rounded-lg w-1/4 px-2">
            <p className="text-xl text-center">{title}</p>
            <p>{content}</p>
        </div>
    );
}
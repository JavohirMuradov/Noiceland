interface Props {
    image: string;
    text: string;
    h1: string;
    author: string;
}

export const CardSection3 = ({ image, text, h1, author }: Props) => {
    return (
        <div className="w-full lg:w-72 flex flex-col gap-3">
            <div className="h-1/2 w-96 lg:w-72">
                <img src={image} className="w-full lg:w-max"/>
            </div>
            <div className="h-1/2 w-96 lg:w-72">
                <span className="text-gray-400 uppercase text-xs">{text}</span>
                <h1 className="text-xl">{h1}</h1>
                <span className="text-xs font-bold uppercase">{author}</span>
            </div>
        </div>
    )
}

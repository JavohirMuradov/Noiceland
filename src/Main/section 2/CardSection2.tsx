interface Props {
    image: string;
    text: string;
    h1: string;
    author: string;
}

export const CardSection2 = ({image,text,h1,author}:Props) => {
    return (
        <div className="w-96 flex flex-col gap-6">
            <div>
                <img src={image} />
            </div>
            <div className="flex flex-col gap-5">
                <span className="text-gray-400 uppercase text-xs">{text}</span>
                <h1 className="text-xl uppercase">{h1}</h1>
                <span className="text-xs font-bold uppercase">{author}</span>
            </div>
        </div>
    )
}

interface Props {
    image: string;
    text: string;
    h1: string;
    author: string;
}

export const CardSection4 = ({ image, text, h1, author }: Props) => {
    return (
        <div>
            <div>
                <img src={image} />
            </div>
            <div>
                <span className="text-gray-400 uppercase text-xs">{text}</span>
                <h1 className="text-2xl w-96">{h1}
                </h1>
                <span className="text-xs font-bold uppercase">{author}</span>
            </div>
        </div>
    )
}

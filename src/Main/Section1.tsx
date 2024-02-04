import image1 from "./images/IMAGE (1).jpg";

export const Section1 = () => {
    return (
        <section>
            <div className="max-w-[1200px] m-auto">
                <div className="flex justify-between pt-32 gap-12 max-w-[1200px]">
                    <div>
                        <img src={image1} />
                    </div>
                    <div className="w-[429px] flex flex-col gap-7">
                        <span className="text-gray-400 uppercase text-xs">Illustration</span>
                        <h1 className="text-4xl">Japan House opens in mountainside to foster peak creativity.</h1>
                        <p className="text-base text-gray-500">Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad
                            timeam accusata, hinc justo falli
                            id
                            eum, ferri novum molestie eos cu.</p>
                        <span className="text-xs font-bold">BY RETA TORPHY</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

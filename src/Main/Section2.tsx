import image from './images/images section2/IMAGE.jpg';
import image1 from './images/images section2/IMAGE-1.jpg';
import image2 from './images/images section2/IMAGE-2.jpg';
import image3 from './images/images section2/IMAGE-3.jpg';
import image4 from './images/images section2/IMAGE-4.jpg';
import image5 from './images/images section2/IMAGE-5.jpg';

export const Section2 = () => {
    return (
        <section>
            <div className="max-w-[1200px] m-auto">
                <div className="pt-16 flex flex-col pb-36 gap-20 border-b-2 border-gray-600">
                    <div className="flex gap-5">
                        <div className="w-96 flex flex-col gap-6">
                            <div>
                                <img src={image} />
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="text-gray-400 uppercase text-xs">Photography</span>
                                <h1 className="text-xl uppercase">Helmut Lang celebrates taxi drivers worldwide in latest
                                    campaign</h1>
                                <span className="text-xs font-bold uppercase">BY ALESSANDRA ORTIZ</span>
                            </div>
                        </div>
                        <div className="w-96 flex flex-col gap-6">
                            <div>
                                <img src={image1} />
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="text-gray-400 uppercase text-xs">Photography</span>
                                <h1 className="text-xl uppercase">Bowlcut launch a new summer collection that pays homage to
                                    “UK legends”</h1>
                                <span className="text-xs font-bold uppercase">BY Rosanna Ondricka</span>
                            </div>
                        </div>
                        <div className="w-96 flex flex-col gap-6">
                            <div>
                                <img src={image2} />
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="text-gray-400 uppercase text-xs">Photography</span>
                                <h1 className="text-xl uppercase">Thousands of previously unseen photographs by Andy Warhol
                                    will be made public this
                                    Autumn
                                </h1>
                                <span className="text-xs font-bold uppercase">BY Annie Lueilwitz</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-96 flex flex-col gap-6">
                            <div>
                                <img src={image3} />
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="text-gray-400 uppercase text-xs">Interactive design</span>
                                <h1 className="text-xl">London-based Yinka Ilori's storytelling furniture</h1>
                                <span className="text-xs font-bold uppercase">BY Annie Lueilwitz</span>
                            </div>
                        </div>
                        <div className="w-96 flex flex-col gap-6">
                            <div>
                                <img src={image4} />
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="text-gray-400 uppercase text-xs">Graphic design</span>
                                <h1 className="text-xl uppercase">Anonymous Israeli art collective Broken Fingaz direct
                                    music video for U2 and Beck
                                </h1>
                                <span className="text-xs font-bold uppercase">BY Simeon Brekke</span>
                            </div>
                        </div>
                        <div className="w-96 flex flex-col gap-6">
                            <div>
                                <img src={image5} />
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="text-gray-400 uppercase text-xs">Architecture</span>
                                <h1 className="text-xl uppercase">Suzanne Saroff's meticulously arranged photographs alter
                                    perceptions</h1>
                                <span className="text-xs font-bold uppercase">BY Reta Torphy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import image1 from "./images/images section4/IMAGE.jpg"
import image2 from "./images/images section4/IMAGE-2.jpg"
import image3 from "./images/images section4/IMAGE-2.jpg"
import image4 from "./images/images section4/IMAGE-3.jpg"

export const Section4 = () => {
    return (
        <section>
            <div className="max-w-[1200px] m-auto pt-24 flex flex-col gap-5">
                <h1 className="uppercase text-gray-600 text-xs">
                    Featured Posts
                </h1>
                <div className="flex flex-wrap gap-5">
                    <div>
                        <div>
                            <img src={image1} />
                        </div>
                        <div>
                            <span className="text-gray-400 uppercase text-xs">Graphic Design</span>
                            <h1 className="text-2xl w-96">A Brief History of the FIFA World Cup Logo
                            </h1>
                            <span className="text-xs font-bold uppercase">BY Leo Bartell</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={image2} />
                        </div>
                        <div>
                            <span className="text-gray-400 uppercase text-xs">Graphic Design</span>
                            <h1 className="text-2xl w-96">Need a guide to LA's graphic design scene? Shoplifters' new issue
                                has got your back
                            </h1>
                            <span className="text-xs font-bold uppercase">BY Leo Bartell</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={image3} />
                        </div>
                        <div>
                            <span className="text-gray-400 uppercase text-xs">Graphic Design</span>
                            <h1 className="text-2xl w-96">Fred Rowson directs film for Years and Years
                            </h1>
                            <span className="text-xs font-bold uppercase">BY Leo Bartell</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={image4} />
                        </div>
                        <div>
                            <span className="text-gray-400 uppercase text-xs">Graphic Design</span>
                            <h1 className="text-2xl w-96">M&C Saatchi and Fontsmith collaborate on font collection for House
                                of St Barnabas
                            </h1>
                            <span className="text-xs font-bold uppercase">BY Leo Bartell</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

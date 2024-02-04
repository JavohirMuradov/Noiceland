import image from "./images/images section3/IMAGE.jpg"
import image1 from "./images/images section3/IMAGE-1.jpg"
import image2 from "./images/images section3/IMAGE-2.jpg"
import image3 from "./images/images section3/IMAGE-3.jpg"
import image4 from "./images/images section3/IMAGE-4.jpg"
import image5 from "./images/images section3/IMAGE-5.jpg"
import image6 from "./images/images section3/IMAGE-6.jpg"
import image7 from "./images/images section3/IMAGE-7.jpg"

export const Section3 = () => {
    return (
        <section>
            <div className="max-w-[1200px] m-auto flex items-center flex-col gap-24 border-b-2 border-gray-600 pb-24">
                <div className="flex flex-wrap mt-24 gap-8 ">
                    <h1 className="text-xs text-gray-400 uppercase">Latest Posts</h1>
                    <div className="flex gap-5">
                        <div className="w-72">
                            <div>
                                <img src={image} />
                            </div>
                            <div>
                                <span className="text-gray-400 uppercase text-xs">Illustration</span>
                                <h1 className="text-xl">Japan House opens in mountainside to foster peak creativity.</h1>
                                <span className="text-xs font-bold uppercase">BY RETA TORPHY</span>
                            </div>
                        </div>
                        <div className="w-72">
                            <div>
                                <img src={image1} />
                            </div>
                            <div>
                                <span className="text-gray-400 uppercase text-xs">Photography</span>
                                <h1 className="text-xl">Helmut Lang celebrates taxi drivers worldwide in latest campaign
                                </h1>
                                <span className="text-xs font-bold uppercase">BY ALESSANDRA ORTIZ</span>
                            </div>
                        </div>
                        <div className="w-72">
                            <div>
                                <img src={image2} />
                            </div>
                            <div>
                                <span className="text-gray-400 uppercase text-xs">Photography</span>
                                <h1 className="text-xl">Bowlcut launch a new summer collection that pays homage to “UK
                                    legends”</h1>
                                <span className="text-xs font-bold uppercase">BY Rosanna Ondricka</span>
                            </div>
                        </div>
                        <div className="w-72">
                            <div>
                                <img src={image3} />
                            </div>
                            <div>
                                <span className="text-gray-400 uppercase text-xs">Photography</span>
                                <h1 className="text-xl">Thousands of previously unseen photographs by Andy Warhol will be
                                    made public this
                                    Autumn
                                </h1>
                                <span className="text-xs font-bold uppercase">BY Annie Lueilwitz</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-72">
                            <div>
                                <img src={image4} />
                            </div>
                            <div>
                                <span className="text-gray-400 uppercase text-xs">Interactive design</span>
                                <h1 className="text-xl">London-based Yinka Ilori's storytelling furniture</h1>
                                <span className="text-xs font-bold uppercase">BY Annie Lueilwitz</span>
                            </div>
                        </div>
                        <div className="w-72">
                            <div>
                                <img src={image5} />
                            </div>
                            <div>
                                <span className="text-gray-400 uppercase text-xs">Graphic design</span>
                                <h1 className="text-xl">Anonymous Israeli art collective Broken Fingaz direct music video
                                    for U2 and Beck
                                </h1>
                                <span className="text-xs font-bold uppercase">BY Simeon Brekke</span>
                            </div>
                        </div>
                        <div className="w-72">
                            <div>
                                <img src={image6} />
                            </div>
                            <div>
                                <span className="text-gray-400 uppercase text-xs">Illustration</span>
                                <h1 className="text-xl">Japan House opens in mountainside to foster peak creativity.</h1>
                                <span className="text-xs font-bold uppercase">BY RETA TORPHY</span>
                            </div>
                        </div>
                        <div className="w-72">
                            <div>
                                <img src={image7} />
                            </div>
                            <div>
                                <span className="text-gray-400 uppercase text-xs">Graphic Design</span>
                                <h1 className="text-xl">Anu Ambasna's playful illustrations celebrate club culture, brown
                                    bodies and perfect
                                    paunches
                                </h1>
                                <span className="text-xs font-bold uppercase">BY Leo Bartell</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="border-solid border-black border-2 px-7 py-5 uppercase text-xs hover:bg-black hover:text-white duration-500">
                    view all latest posts
                </button>
            </div>
        </section>
    )
}

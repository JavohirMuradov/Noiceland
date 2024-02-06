import image from "./images section3/IMAGE.jpg"
import image1 from "./images section3/IMAGE-1.jpg"
import image2 from "./images section3/IMAGE-2.jpg"
import image3 from "./images section3/IMAGE-3.jpg"
import image4 from "./images section3/IMAGE-4.jpg"
import image5 from "./images section3/IMAGE-5.jpg"
import image6 from "./images section3/IMAGE-6.jpg"
import image7 from "./images section3/IMAGE-7.jpg"
import { CardSection3 } from "./CardSection3"

export const Section3 = () => {
    return (
        <section>
            <div className="container flex items-center flex-col gap-24">
                <div className="w-full flex flex-col items-center text-center lg:text-start flex-wrap mt-10 gap-8 border-b-2 border-gray-600 pb-24">
                    <h1 className="text-xs text-gray-400 uppercase">Latest Posts</h1>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:w-full">
                        <CardSection3 image={image} text="Illustration"
                            h1="Japan House opens in mountainside to foster peak creativity." author="BY ALESSANDRA ORTIZ" />
                        <CardSection3 image={image1} text="Photography"
                            h1="Helmut Lang celebrates taxi drivers worldwide in latest campaign." author="BY RETA TORPHY" />
                        <CardSection3 image={image2} text="Photography"
                            h1="Bowlcut launch a new summer collection that pays homage to “UK legends”" author="BY Rosanna Ondricka" />
                        <CardSection3 image={image3} text="Photography"
                            h1="Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn" author="BY Annie Lueilwitz" />

                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:w-full">
                        <CardSection3 image={image4} text="Interactive design"
                            h1="London-based Yinka Ilori's storytelling furniture" author="BY Annie Lueilwitz" />
                        <CardSection3 image={image5} text="Graphic design"
                            h1="Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck" author="BY Simeon Brekke" />
                        <CardSection3 image={image6} text="Illustration"
                            h1="Japan House opens in mountainside to foster peak creativity." author="BY RETA TORPHY" />
                        <CardSection3 image={image7} text="Graphic Design"
                            h1="Anu Ambasna's playful illustrations celebrate club culture, brown
                            bodies and perfect paunches" author="BY Leo Bartell" />
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

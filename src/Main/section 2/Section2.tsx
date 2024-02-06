import image from './images section2/IMAGE.jpg';
import image1 from './images section2/IMAGE-1.jpg';
import image2 from './images section2/IMAGE-2.jpg';
import image3 from './images section2/IMAGE-3.jpg';
import image4 from './images section2/IMAGE-4.jpg';
import image5 from './images section2/IMAGE-5.jpg';
import { CardSection2 } from "./CardSection2";

export const Section2 = () => {
    return (
        <section>
            <div className="container">
                <div className="pt-10 flex flex-col gap-10 border-b-2 pb-10 border-gray-600">
                    <div className="flex text-center lg:flex-row gap-5 lg:gap-10 justify-center flex-col items-center lg:items-start">
                        <CardSection2 image={image} text="Photography"
                            h1="Helmut Lang celebrates taxi drivers worldwide in latest campaign"
                            author="BY Reta Torphy" />
                        <CardSection2 image={image1} text="Photography"
                            h1="Bowlcut launch a new summer collection that pays homage to “UK legends”"
                            author="BY Rosanna Ondricka" />
                        <CardSection2 image={image2} text="Photography"
                            h1="Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn"
                            author="BY Annie Lueilwitz" />
                    </div>
                    <div className="flex text-center lg:flex-row gap-5 lg:gap-10 justify-center flex-col items-center lg:items-start">
                        <CardSection2 image={image3} text="Interactive design"
                            h1="London-based Yinka Ilori's storytelling furniture"
                            author="BY Annie Lueilwitz" />
                        <CardSection2 image={image4} text="Graphic design"
                            h1="Anonymous Israeli art collective Broken Fingaz direct
                            music video for U2 and Beck"
                            author="BY Simeon Brekke" />
                        <CardSection2 image={image5} text="Architecture"
                            h1="Suzanne Saroff's meticulously arranged photographs alter
                            perceptions"
                            author="BY Reta Torphy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

import image1 from "./images section4/IMAGE.jpg"
import image2 from "./images section4/IMAGE-1.jpg"
import image3 from "./images section4/IMAGE-2.jpg"
import image4 from "./images section4/IMAGE-3.jpg"
import { CardSection4 } from "./CardSection4"

export const Section4 = () => {
    return (
        <section>
            <div className="container pt-24 flex items-center flex-col gap-5">
                <h1 className="uppercase text-gray-600 text-xs">
                    Featured Posts
                </h1>
                <div className="flex flex-col justify-center md:justify-start gap-5">
                    <div className="flex gap-5 flex-col lg:flex-row">
                        <CardSection4 image={image1} text="Graphic Design"
                            h1="A Brief History of the FIFA World Cup Logo" author="BY Leo Bartell" />
                        <CardSection4 image={image2} text="Graphic Design"
                            h1="Need a guide to LA's graphic design scene? Shoplifters' new issue has got your back" author="BY Leo Bartell" />
                    </div>
                    <div className="flex gap-5 flex-col lg:flex-row">
                        <CardSection4 image={image3} text="Graphic Design"
                            h1="Fred Rowson directs film for Years and Years" author="BY Leo Bartell" />
                        <CardSection4 image={image4} text="Graphic Design"
                            h1="M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas" author="BY Leo Bartell" />
                    </div>

                </div>
            </div>
        </section>
    )
}

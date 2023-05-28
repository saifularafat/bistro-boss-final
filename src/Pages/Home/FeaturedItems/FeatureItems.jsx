import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featureImage from './../../../assets/home/featured.jpg';
import './Feature.css'

const FeatureItems = () => {
    return (
        <div className="feature_background bg-fixed md:my-28 my-8">
            <div className="bg-titleColor bg-opacity-50 pt-6">
                <SectionTitle
                    heading={
                        <span className="text-white">
                            Featured Items</span>
                    }
                    subHeading='Check it out'
                ></SectionTitle>

                <div className="md:flex justify-between items-center py-20 md:px-32">
                    <div>
                        <img src={featureImage} alt="" className="rounded" />
                    </div>
                    <div className="md:pl-12 pl-4 text-white space-y-1 ">
                        <h5 className="font-Inter font-normal text-2xl text-white pt-4">March 20, 2023
                        </h5>
                        <h2 className="font-Inter font-normal text-2xl text-white">WHERE CAN I GET SOME?
                        </h2>
                        <p className="font-Inter text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="feature_btn">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeatureItems;
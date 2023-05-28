import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

import img1 from './../../../assets/home/slide1.jpg'

const ChefReCommends = () => {
    const chefReCommendItems = [
        <>
            <div className="card md:w-96 bg-[#F3F3F3] shadow-xl " >
                {/* <figure> */}
                    <img src={img1} alt="Salad" className="md:h-72 md:w-96" />
                {/* </figure> */}
                <div className="card-body text-center">
                    <h2 className="font-Inter font-semibold text-2xl text-titleColor">Caeser Salad</h2>
                    <p className="font-Inter font-normal text-base text-titleColor">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center mt-2">
                        <button className="chef_btn">add to cart</button>
                    </div>
                </div>
            </div >
        </>
    ]
    return (
        <div>
            <SectionTitle
                heading='CHEF RECOMMENDS'
                subHeading='should try'>
            </SectionTitle>

            <div className="mt-12">
                <div className="grid md:grid-cols-3 gap-12 mx-2">
                    {chefReCommendItems}
                    {chefReCommendItems}
                    {chefReCommendItems}
                </div>
            </div>
        </div>
    );
};

export default ChefReCommends;
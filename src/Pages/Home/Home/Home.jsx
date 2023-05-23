import Banner from "../Banner/Banner";
import Call from "../CallSection/Call";
import CategorySwiper from "../Category/CategorySwiper";
import ChefReCommends from "../ChefReCommends/ChefReCommends";
import FeatureItems from "../FeaturedItems/FeatureItems";
import PopularMenu from "../PopularMenu/PopularMenu";
import ServiceBg from "../Service/ServiceBg";

const Home = () => {
    return (
        <div> 
            <Banner />
            <div className="max-w-6xl mx-auto">
                <CategorySwiper />
                <ServiceBg />
                <PopularMenu />
                <Call />
                <ChefReCommends />
                <FeatureItems />
            </div>
        </div>
    );
};

export default Home;
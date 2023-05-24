import { Helmet } from "react-helmet-async";
import Cover from "../../../Component/Cover/Cover";

import menuImg from "./../../../assets/menu/banner3.jpg";
import menuImg1 from "./../../../assets/menu/dessert-bg.jpeg";
import menuImg2 from "./../../../assets/menu/pizza-bg.jpg";
import menuImg3 from "./../../../assets/menu/salad-bg.jpg";
import menuImg4 from "./../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../Component/useMenu/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import Button from "../../../Component/Button/Button";
import { Link } from "react-router-dom";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>

            {/* Main Cover */}
            <Cover img={menuImg}
                title={
                    <span
                        className="uppercase font-Cinzel font-bold text-6xl text-white">
                        OUR MENU
                    </span>}
                description={
                    <span className="uppercase">
                        Would you Link to try A dish?
                    </span>
                }
            ></Cover>
            <div className="max-w-6xl mx-auto">
                {/* offered menu items */}
                <SectionTitle
                    heading="TODAY'S OFFER"
                    subHeading="Don't miss"
                ></SectionTitle>
                <MenuCategory items={offered}>
                </MenuCategory>
                <div className="text-center my-10">
                    <Link to={`/orderFood`}>
                        <Button buttonName="ORDER YOUR FAVORITE FOOD">
                        </Button>
                    </Link>
                </div>
            </div>
            {/* dessert menu items */}
            <Cover img={menuImg1}
                title={
                    <span
                        className="uppercase font-Cinzel font-bold text-6xl text-white">
                        dessert
                    </span>}
                description={
                    <span className="uppercase">
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </span>
                }
            ></Cover>
            <div className="max-w-6xl mx-auto">
                <MenuCategory items={dessert}></MenuCategory>
                <div className="text-center my-10">
                <Link to='/orderFood'>
                        <Button buttonName="ORDER YOUR FAVORITE FOOD">
                        </Button>
                    </Link>
                </div>
            </div>
            {/* pizza menu  items */}
            <Cover img={menuImg2}
                title={
                    <span
                        className="uppercase font-Cinzel font-bold text-6xl text-white">
                        pizza
                    </span>}
                description={
                    <span className="uppercase">
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </span>
                }
            ></Cover>
            <div className="max-w-6xl mx-auto">
                <MenuCategory items={pizza}></MenuCategory>
                <div className="text-center my-10">
                <Link to='/orderFood'>
                        <Button buttonName="ORDER YOUR FAVORITE FOOD">
                        </Button>
                    </Link>
                </div>
            </div>
            {/* salad menu  items */}
            <Cover img={menuImg3}
                title={
                    <span
                        className="uppercase font-Cinzel font-bold text-6xl text-white">
                        salad
                    </span>}
                description={
                    <span className="uppercase">
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </span>
                }
            ></Cover>
            <div className="max-w-6xl mx-auto">
                <MenuCategory items={salad}></MenuCategory>
                <div className="text-center my-10">
                <Link to='/orderFood'>
                        <Button buttonName="ORDER YOUR FAVORITE FOOD">
                        </Button>
                    </Link>
                </div>
            </div>
            {/* soup menu  items */}
            <Cover img={menuImg4}
                title={
                    <span
                        className="uppercase font-Cinzel font-bold text-6xl text-white">
                        soup
                    </span>}
                description={
                    <span className="uppercase">
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </span>
                }
            ></Cover>
            <div className="max-w-6xl mx-auto">
                <MenuCategory items={soup}></MenuCategory>
                <div className="text-center my-10">
                <Link to='/orderFood'>
                        <Button buttonName="ORDER YOUR FAVORITE FOOD">
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;
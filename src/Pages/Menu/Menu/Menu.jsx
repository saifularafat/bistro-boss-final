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

                {/* offered menu items */}
                <SectionTitle
                    heading="TODAY'S OFFER"
                    subHeading="Don't miss"
                ></SectionTitle>
                <MenuCategory items={offered}>
                </MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
                items={dessert}
                title= 'dessert'
                description= " Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img={menuImg1}
            ></MenuCategory>
            {/* pizza menu  items */}
            <MenuCategory
                items={pizza}
                img={menuImg2}
                title= 'pizza'
                description=" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>
            {/* salad menu  items */}
            <MenuCategory
                items={salad}
                img={menuImg3}
                title= 'salad'
                description=" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>
            {/* soup menu  items */}
            <MenuCategory
                items={soup}
                img={menuImg4}
                title= 'soup'
                description=" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>
        </div>
    );
};

export default Menu;
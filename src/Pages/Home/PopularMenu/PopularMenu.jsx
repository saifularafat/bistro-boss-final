import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Share/MenuItems/MenuItem";
import Button from "../../../Component/Button/Button";
import useMenu from "../../../Component/useMenu/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    console.log(menu);
    const Popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-20">
            <SectionTitle
                subHeading="Check it out"
                heading="From Our Menu">

            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-7 mt-12 mb-10">
                {
                    Popular.map(items => <MenuItem
                        key={items._id}
                        items={items}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to='/menu'>
                    <Button
                        buttonName={'View Full  Menu'}></Button>
                </Link>
            </div>

        </section>
    );
};

export default PopularMenu;
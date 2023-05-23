import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Share/MenuItems/MenuItem";
import Button from "../../../Component/Button/Button";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(item => item.category == 'popular');
                setMenu(PopularItems)
            })
    }, [])
    return (
        <section className="mb-20">
            <SectionTitle
                subHeading="Check it out"
                heading="From Our Menu">

            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-7 mt-12 mb-10">
                {
                    menu.map(items => <MenuItem
                        key={items._id}
                        items={items}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Button
                buttonName={'View Full  Menu'}></Button>
            </div>

        </section>
    );
};

export default PopularMenu;
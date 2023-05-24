// import Cover from "../../../Component/Cover/Cover";
import MenuItem from "../../Share/MenuItems/MenuItem";

// const MenuCategory = ({ items, title, img, description }) => {
const MenuCategory = ({ items}) => {
    return (
        <div>
            {/* amra ekta bitore r ekta bebohar korte pare 
            module-74,,3 number video  dekhe ai beboher ta dekte 
            pari and clear o hote pari */}
            {/* {
                title &&
                <Cover
                    img={img}
                    title={title}
                    description={description}>
                </Cover>
            } */}
            <div className="grid md:grid-cols-2 gap-7 mt-12 mb-10">
                {
                    items.map(items => <MenuItem
                        key={items._id}
                        items={items}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;
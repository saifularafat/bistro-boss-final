
const MenuItem = ({ items }) => {
    const { name, image, price, recipe } = items
    return (
        <div className="flex space-y-3">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[104px]" src={image} alt="" />
            <div className="pl-8">
                <h2 className="menu_title">{ name }----------</h2>
                <p className="recipe_style">{ recipe }</p>
            </div>
                <p className="price_style">{ '$' + price }</p>
        </div>
    );
};

export default MenuItem;

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    const handlerAddToCart = item => {
        console.log('This is a Items', item );
    }
    return (
        <div className="card md:w-96 bg-slate-100 shadow-2xl mx-3">
            {/* <figure> */}
                <img src={image} alt="Shoes" />
            {/* </figure> */}
            <p className="absolute right-0 mr-4 top-5 py-1 px-2 bg-titleColor text-white font-Inter rounded">{'$' +price}</p>
            <div className="card-body">
                <h2 className="menu_title">{name}</h2>
                <p className="recipe_style">{recipe}</p>
                <div className="text-center">
                    <button 
                    onClick={() => handlerAddToCart(item)}
                    className="chef_btn bg-slate-100">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
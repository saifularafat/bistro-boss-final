import FoodCard from "../../../Component/FoodCard/FoodCard";

const OrderCard = ({ items }) => {
    return (
        <div className=" grid md:grid-cols-3 gap-12 mt-12">
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}>
                </FoodCard>)
            }

        </div>
    );
};

export default OrderCard;
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../../Component/hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_upload_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                const imgURL = imgRes.data.display_url
                const { name, price, category, recipe } = data;
                const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.insertedId) {
                            reset(); 
                           Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'New Item added successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })

        console.log(data);
    };

    return (
        <div className="w-full px-5">
            <Helmet>
                <title> Bistro Boss || Add Item</title>
            </Helmet>
            <SectionTitle
                heading='Add an Item'
                subHeading="What's New?" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-10 bg-[#F3F3F3] rounded-md">
                    <label className="label">
                        <span className="label-text text-3xl font-Cinzel font-semibold">Recipe Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full text-xl" />
                    <div className="md:flex items-center mt-3 space-x-3">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text text-3xl font-Cinzel font-semibold">Category*</span>
                            </label>
                            <select {...register("category", { required: true })}
                                className="input input-bordered  text-xl w-full pl-2">
                                <option value="pizza">Pick one</option>
                                <option value="pizza">Pizza</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="dessert">Deshi</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span
                                    className="label-text text-3xl font-Cinzel font-semibold">Price*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Recipe name"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full text-xl" />
                        </div>
                    </div>
                    <label className="label">
                        <span className="label-text text-3xl font-Cinzel font-semibold mt-1">Recipe Details*</span>
                    </label>
                    <textarea
                        {...register("recipe", { required: true })}
                        className="textarea w-full h-32 mt-2 text-xl"
                        placeholder="Recipe Details"></textarea>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl font-Cinzel font-semibold">Item Image *</span>
                        </label>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs" />

                    </div>
                    {/* <input type="submit" value= {`Add Item ${<FaUtensils />}`} /> */}
                    <div className="">
                        <button className="flex items-center py-2 px-6 bg-[#835D23] text-white text-2xl font-Cinzel font-semibold rounded-lg mt-3">
                            Add Item <FaUtensils className="pl-4 w-9 h-9" />
                        </button>
                    </div>

                </div>


            </form>
        </div>
    );
};

export default AddItem;
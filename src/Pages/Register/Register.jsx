import { Link, useNavigate } from "react-router-dom";
import Social from "../Share/Social/Social";
import { Helmet } from "react-helmet-async";
import img from './../../assets/others/authentication(1).png'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { CreateUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        CreateUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User Profile Updated');
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your Register Successful',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        navigate('/login')
                        reset();
                    })
                    .catch(error => {
                        console.log(error.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${error.message}`,
                        })
                    })

            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    };
    // const handlerSignUp = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name, email, password);
    // }
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Register
                </title>
            </Helmet>

            <div className="bg-login_img  min-h-screen ">
                <div className="max-w-6xl mx-auto pt-3">
                    <div className="hero bg-login_img shadow-2xl shadow-slate-700 rounded-md px-16 py-1">
                        <div className="hero-content md:h-6/12 flex-col lg:flex-row-reverse ">
                            <div className="text-center lg:text-left w-1/2">
                                <img src={img} alt="login image" />
                            </div>
                            <div
                                className="card flex-shrink-0 w-full max-w-sm ">
                                <h2 className="text-titleColor font-Inter font-bold text-4xl text-center py-1">Sign Up</h2>
                                {/* Register form  */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="input_label">Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                {...register("name", { required: true })}
                                                placeholder="Your name"
                                                className="input input-bordered w-full"
                                            />
                                            {errors.name && <span className="text-red-700 mt-1">Name is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="input_label">Photo URL</span>
                                            </label>
                                            <input
                                                type="url"
                                                name="photoURL"
                                                {...register("photoURL", { required: true })}
                                                placeholder="Your Photo URL"
                                                className="input input-bordered w-full"
                                            />
                                            {errors.photoURL && <span className="text-red-700 mt-1">Photo URL is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="input_label">Email</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                {...register("email", { required: true })}
                                                placeholder="email"
                                                className="input input-bordered w-full"
                                            />
                                            {errors.email && <p className="text-red-600 mt-1">Email is required</p>}
                                        </div>
                                        <div
                                            className="form-control">
                                            <label className="label">
                                                <span className="input_label">Password</span>
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                {...register("password",
                                                    {
                                                        required: true,
                                                        minLength: 6,
                                                        maxLength: 20,
                                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/
                                                    })}
                                                placeholder="password"
                                                className="input input-bordered"
                                            />
                                            {errors.password?.type === 'required' &&
                                                <p className="text-red-600 mt-1">Password is required</p>
                                            }
                                            {errors.password?.type === 'minLength' &&
                                                <p className="text-red-600 mt-1">Password must be 6 character</p>
                                            }
                                            {errors.password?.type === 'maxLength' &&
                                                <p className="text-red-600 mt-1">Password must be 20 character</p>
                                            }
                                            {errors.password?.type === 'pattern' &&
                                                <p className="text-red-600 mt-1">Password must have one Uppercase
                                                    two lowercase one number and special character</p>
                                            }
                                        </div>
                                        <div className="form-control mt-6">
                                            <input
                                                type="submit"
                                                value="Sign Up"
                                                className="login_submit_btn" />
                                        </div>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <p className=" text-login_btn text-xl font-Inter font-semibold">
                                        <small>Already registered?
                                            <Link to='/login' className="font-extrabold"> Go to log in</Link>
                                        </small>
                                    </p>
                                    <p className="mt-3 font-Inter font-semibold text-xl text-descColor"><small>Or sign in with</small></p>
                                </div>

                                {/* Social site login */}
                                <Social />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;
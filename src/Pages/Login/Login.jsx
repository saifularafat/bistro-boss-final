import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img from './../../assets/others/authentication(1).png'
import Social from "../Share/Social/Social";

const Login = () => {
    const [disabled, setDisabled] = useState(true);

    const { logIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handlerLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }

    const handlerValidationCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
            return Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Captcha Match',
                showConfirmButton: false,
                timer: 1000
            })
        }
        else {
            setDisabled(true)
          return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Don't Macing Captcha code.!",
            })
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Login
                </title>
            </Helmet>

            <div className="bg-login_img  min-h-screen ">
                <div className="max-w-6xl mx-auto pt-3">
                    <div className="hero bg-login_img shadow-2xl shadow-slate-700 rounded-md px-16 py-0">
                        <div className="hero-content md:h-6/12 flex-col lg:flex-row-reverse">
                            <div
                                className="card flex-shrink-0 w-full max-w-sm ">
                                <h2 className="text-titleColor font-Inter font-bold text-4xl text-center py-1">Login</h2>
                                <form onSubmit={handlerLogin}>
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="input_label">Email</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="email"
                                                className="input input-bordered w-full"
                                            />
                                        </div>
                                        <div
                                            className="form-control">
                                            <label className="label">
                                                <span className="input_label">Password</span>
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                required
                                                placeholder="password"
                                                className="input input-bordered"
                                            />
                                        </div>
                                        <div
                                            className="form-control">
                                            <label className="label">
                                                <LoadCanvasTemplate />
                                            </label>
                                            <input 
                                            onBlur={handlerValidationCaptcha}
                                                type="text"
                                                name="captcha"
                                                required
                                                placeholder="type the captcha above"
                                                className="input input-bordered"
                                            />
                                        </div>

                                        <div className="form-control mt-6">
                                            <input
                                                disabled={disabled}
                                                type="submit"
                                                value="Login"
                                                className="btn btn-primary" />
                                                {/* className="login_submit_btn" /> */}
                                        </div>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <p className=" text-login_btn text-xl font-Inter font-semibold">
                                        <small>New here?
                                            <Link to='/register' className="font-extrabold"> Create a New Account</Link>
                                        </small>
                                    </p>
                                    <p className="mt-3 font-Inter font-semibold text-xl text-descColor"><small>Or sign in with</small></p>
                                </div>

                                {/* Social site login */}
                                <Social />

                            </div>

                            <div className="text-center lg:text-left w-1/2">
                                <img src={img} alt="login image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;
import { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Social = () => {
    const { googleAndGithub } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handlerGoogle = () => {
        googleAndGithub(provider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div className="text-center flex items-center justify-center mt-2">
            <Link>
                <FaFacebookF className="social_btn" />
            </Link>
            <Link>
                <FaGoogle
                    onClick={handlerGoogle}
                    className="social_btn mx-6" />
            </Link>
            <Link>
                <FaGithub className="social_btn" />
            </Link>
        </div>
    );
};

export default Social;
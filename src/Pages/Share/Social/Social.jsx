import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Social = () => {
    return (
        <div className="text-center flex items-center justify-center mt-2">
        <Link>
            <FaFacebookF className="social_btn" />
        </Link>
        <Link>
            <FaGoogle className="social_btn mx-6" />
        </Link>
        <Link>
            <FaGithub className="social_btn" />
        </Link>
    </div>
    );
};

export default Social;
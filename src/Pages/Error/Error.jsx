
import { Link } from 'react-router-dom';
import errorImg from './../../assets/404.gif';
const Error = () => {
    return (
        <div className='text-center'>
            <img src={errorImg} alt="" className='max-w-6xl mx-auto'/>
            <Link to='/'>
                <button className='text-xl font-Cinzel font-semibold border-2 border-btn_color rounded-lg py-2 px-5 bg-login_btn'>Go Back</button>
            </Link>
        </div>
    );
};

export default Error;
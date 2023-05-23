import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className="w-full mx-auto flex text-white">
                <div className="w-1/2 p-10 bg-[#1F2937]">
                    <div className="md:w-[500px] text-center">
                        <h2>CONTACT US</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="w-1/2 p-10 bg-[#111827]">
                    <div className="md:w-[500px]">
                        <span className=" md:ml-20">Follow US</span>
                        <p className=' md:ml-20'>Join us on social media</p>
                        <div className='flex mt-3  md:ml-20'>
                            <FaFacebookF className='w-8 h-8' />
                            <FaInstagram className='w-8 h-8 md:mx-4' />
                            <FaTwitter className='w-8 h-8' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[#151515] text-white ">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
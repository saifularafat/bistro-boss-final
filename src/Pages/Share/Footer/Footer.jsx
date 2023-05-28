import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className="w-full mx-auto md:flex text-white">
                <div className="md:w-1/2 p-10 bg-[#1F2937]">
                    <div className="md:w-[500px] text-center">
                        <h2 className='footer_title'>CONTACT US</h2>
                        <p className='footer_desc'>123 ABS Street, Uni 21, Bangladesh</p>
                        <p className='footer_desc'>+88 123456789</p>
                        <p className='footer_desc'>Mon - Fri: 08:00 - 22:00</p>
                        <p className='footer_desc'>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="md:w-1/2 p-10 bg-[#111827] text-center">
                    <div className="md:w-[500px]">
                        <p className=" md:ml-20 footer_title">Follow US</p>
                        <p className=' md:ml-20 footer_desc'>Join us on social media</p>
                        <div className='flex mt-3 justify-center md:ml-20'>
                            <FaFacebookF className='w-8 h-8' />
                            <FaInstagram className='w-8 h-8 mx-4' />
                            <FaTwitter className='w-8 h-8' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[#151515] text-white ">
                <div>
                    <p className='font-Inter font-medium text-xl'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
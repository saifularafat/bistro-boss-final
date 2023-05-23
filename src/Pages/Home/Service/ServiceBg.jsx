import img from './../../../assets/home/chef-service.jpg'

const ServiceBg = () => {
    return (
        <div className='my-24'>
            <div className="h-full w-full relative">
                <img src={img} alt=""
                />
                <div
                    className="absolute md:pt-16 md:pb-10 md:p-40 p-5 md:w-[772px] mx-auto bg-white  translate-x-1/4 md:top-12 top-2 text-center">
                    <h1
                        className="text-titleColor font-normal md:text-4xl text-2xl uppercase font-Cinzel pb-2"> Bistro Boss </h1>
                    <p
                        className="text-titleColor font-Inter text-base md:block hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
            {/* <div className=''>
                <img
                    src={img}
                    alt="Home Chef service"
                    className='relative'
                />
            </div>
            <div className='md:w-96 w-72 mx-auto absolute translate-x-0 bottom-0'>
                <div className='bg-white text-center p-10'>
                    <h2></h2>
                    <p></p>
                </div>
            </div> */}
        </div>
    );
};

export default ServiceBg;
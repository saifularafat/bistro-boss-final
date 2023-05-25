import { Parallax } from 'react-parallax';


const Cover = ({ img, title, description }) => {

    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="The Menu"
                strength={-200}
            >
                <div className="hero h-[600px]">
                    <div className="hero-overlay 
                    bg-black md:w-[700px] w-[500px] 
                    h-52 md:h-72 bg-opacity-50"></div>

                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="uppercase font-Cinzel font-bold text-6xl text-white">
                                {title}
                            </h1>
                            <p className="font-Inter">{description}</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;
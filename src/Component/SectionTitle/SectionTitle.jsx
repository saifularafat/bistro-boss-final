
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-5/12 md:mx-auto mx-2 text-center mt-20 mb-8">
            <p className="section_subTitle">--- {subHeading} ---</p>
            <h2 className="section_title">{heading}</h2>
            
        </div>
    );
};

export default SectionTitle;
import "./style.scss"

const SvgImages = ({ icon, alt, classname }) => {
    return (
        <img
            src={icon}
            alt={alt}
            className={classname}
        />
    );
};

export default SvgImages;

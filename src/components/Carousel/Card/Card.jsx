import { useState } from "react";
import "./style.scss";

const Card = ({ title, image, className }) => {
    const [isActive, setIsActive] = useState(false);

    const handleImage = (event) => {
        const img = document.getElementById("img");
        const srcImage = event.target.src;

        img.setAttribute("src", srcImage);
        setIsActive(!isActive);
    };

    let classActive = isActive ? "active" : "";

    return (
        <div className={className}>
            <div className="container-img">
                <img
                    src={image}
                    className={classActive}
                    onClick={handleImage}
                />
            </div>
            <p className={classActive}>{title}</p>
        </div>
    );
};

export default Card;

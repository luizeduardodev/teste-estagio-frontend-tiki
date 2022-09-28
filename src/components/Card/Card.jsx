import "./style.scss";

const Card = ({ title, image, className }) => {
    const handleImage = (event) => {
        const img = document.getElementById("img");
        const srcImage = event.target.src;

        const lock = "http://127.0.0.1:5173/src/assets/svg/lock.svg";

        return srcImage == undefined || srcImage == lock ?  alert("Evento ainda não disponivel!") : img.setAttribute("src", srcImage);
    };

    return (
        <div className={className} onClick={handleImage}>
            <div className="container-img">
                <img src={image} />
            </div>
            <p>{title}</p>
        </div>
    );
};

export default Card;

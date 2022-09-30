import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import SvgImages from "../Carousel/SvgImages/SvgImages";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

import titleTwo from "../../assets/svg/tittle2.svg";
import iconYellow from "../../assets/svg/icon-yellow.svg";

import "./style.scss";

const mainContent = () => {
    return (
        <main id="main-content">
            <div className="wrapper">
                <Header />
                <Carousel />
                <SvgImages
                    icon={titleTwo}
                    alt="Imagem quero fazer parte"
                    classname="quero-fazer-parte"
                />
                <SvgImages
                    icon={iconYellow}
                    alt="Icone com vários + amarelos"
                    classname="icon-yelloww"
                />
                <Form />
                <Footer />
            </div>
        </main>
    );
};

export default mainContent;

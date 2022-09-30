import Carousel from "./components/Carousel/Carousel";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

import brand from "./assets/svg/logo-tiki.svg";
import titleTwo from "./assets/svg/tittle2.svg";
import iconYellow from "./assets/svg/icon-yellow.svg";

import "./styles/App.scss";

const App = () => {
    return (
        <>
            <section className="container-general">
                <div className="wrapper">
                    <header className="header">
                        <img src={brand} alt="Logo da Tiki" className="brand" />
                    </header>
                    <Carousel />
                    <img
                        src={titleTwo}
                        alt="Imagem quero fazer parte"
                        className="quero-fazer-parte"
                    />
                    <img
                        src={iconYellow}
                        alt="Icone com vários + amarelos"
                        className="icon-yelloww"
                    />
                    <Form />
                    <Footer />
                </div>
            </section>
        </>
    );
};

export default App;

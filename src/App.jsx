import Carousel from "./components/Carousel/Carousel";
import Form from "./components/Form/Form";

import brand from "./assets/svg/logo-tiki.svg";
import titleTwo from "./assets/svg/tittle2.svg";
import iconYellow from "./assets/svg/icon-yellow.svg";

import "./styles/App.scss";

const App = () => {
    return (
        <div className="container-general">
            <div className="wrapper">
                <img src={brand} alt="Logo Tiki" className="brand" />
                <Carousel />
                <img src={titleTwo} alt="" />
                <img src={iconYellow} alt="" />
                <Form />

                <footer className="container-footer">
                    <h3>Texto Legal</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A, enim repudiandae! Quos nostrum voluptate laborum
                        impedit magnam ut! Veniam deleniti in fuga, ad
                        dignissimos ipsum doloremque quisquam omnis quos nemo?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A, enim repudiandae! Quos nostrum voluptate laborum
                        impedit magnam ut! Veniam deleniti in fuga, ad
                        dignissimos ipsum doloremque quisquam omnis quos nemo?
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default App;

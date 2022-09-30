import brand from "../../assets/svg/logo-tiki.svg";

import "./styles.scss";

const Header = () => {
    return (
        <header id="header">
            <img src={brand} alt="Logo da Tiki" className="brand" />
        </header>
    );
};

export default Header;

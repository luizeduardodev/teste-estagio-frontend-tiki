import { useState } from "react";
import Loading from "../Loading/Loading";

import "./style.scss";

const Form = () => {
    const [button, setButton] = useState(false);
    const [valueInputText, setValueInputText] = useState("");
    const [valueInputEmail, setValueInputEmail] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const clickCheckbox =() => {
        setCheckbox(!checkbox);
    }

    const handleButton = (e) => {
        e.preventDefault();

        setButton(!button);

        setTimeout(() => {
            setButton(button);
            setCheckbox(!checkbox);
            setValueInputText("");
            setValueInputEmail("");
        }, 800);
    };

    const clearInputText = (e) => {
        setValueInputText(e.target.value);
    };

    const clearInputsEmail = (e) => {
        setValueInputEmail(e.target.value);
    };

    return (
        <section id="form">
            <form className="container-form" onSubmit={handleButton}>
                <h2>Cadastre-se e fique por dentro das novidades</h2>

                <input
                    type="text"
                    placeholder="Nome"
                    className="design-input"
                    onChange={clearInputText}
                    value={valueInputText}
                />

                <input
                    type="email"
                    placeholder="meuemail@gmail.com"
                    className="design-input"
                    onChange={clearInputsEmail}
                    value={valueInputEmail}
                    disabled={valueInputText === "" && true}
                />

                <div className="container-checkbox">
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            id="privacy-policy"
                            required
                            onClick={clickCheckbox}
                            disabled={valueInputEmail == false && true}
                            checked={!checkbox == false && true}
                        />

                        <label htmlFor="privacy-policy">
                            Declaro que li e aceito a política de privacidade
                        </label>
                    </div>
                </div>

                <button type="submit" disabled={!checkbox}>
                    {button ? <Loading /> : "Enviar"}
                </button>
            </form>
        </section>
    );
};

export default Form;

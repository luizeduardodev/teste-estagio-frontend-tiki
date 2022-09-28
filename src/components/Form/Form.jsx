const Form = () => {
    return (
        <div className="container-general">
            <h2>Cadastre-se e fique por dentro das novidades</h2>

            <form className="container-form">
                <input
                    type="text"
                    placeholder="Nome"
                    className="design-input"
                />
                <input
                    type="email"
                    placeholder="meuemail@gmail.com"
                    className="design-input"
                />

                <div className="container-checkbox">
                    <input type="checkbox" id="privacyPolicy" />
                    <label htmlFor="privacyPolicy">
                        Declaro que li e aceito a política de privacidade
                    </label>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;

import loading from "../../assets/loading.gif";

import "./style.scss";

const Loading = () => {
    return (
        <div className="img">
            <img src={loading} alt="Loading" />
        </div>
    );
};

export default Loading;

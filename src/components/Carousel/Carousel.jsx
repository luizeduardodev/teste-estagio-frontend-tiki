import CarouselElastic, { consts } from "react-elastic-carousel";

import Card from "../Card/Card";
import Arrows from "./Arrows";

import iconYellow from "../../assets/svg/icon-yellow.svg";
import titleOne from "../../assets/svg/tittle1.svg";
import arrowDown from "../../assets/svg/arrow down.svg";
import facebook from "../../assets/svg/facebook.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import twitter from "../../assets/svg/twitter.svg";

import lock from "../../assets/svg/lock.svg";

import imageCard from "../../assets/images/imagem.jpg";
import imageCard2 from "../../assets/images/imagem-card-2.png";
import imageCard3 from "../../assets/images/imagem-card-3.png";
import imageCard4 from "../../assets/images/imagem-card-1.png";

import "./style.scss";

const Carousel = () => {
    const cards = [
        <Card title="16 de março" image={imageCard} className="card" />,
        <Card title="17 de março" image={imageCard2} className="card" />,

        <Card title="18 de março" image={imageCard3} className="card" />,
        <Card title="22 de março" image={imageCard4} className="card" />,

        <Card title="23 de março" image={imageCard} className="card" />,
        <Card title="24 de março" image={lock} className="lock" />,

        <Card title="25 de março" image={imageCard} className="card" />,
        <Card title="26 de março" image={imageCard} className="card" />
    ];

    const myArrow = ({ type, onClick }) => {
        const pointer =
            type === consts.PREV ? (
                <Arrows
                    svg={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.657"
                            height="14.71"
                            viewBox="0 0 12.657 14.71"
                        >
                            <path
                                id="arrow-left"
                                d="M7.355,0,14.71,12.657H0Z"
                                transform="translate(0 14.71) rotate(-90)"
                                fill="#fff"
                            />
                        </svg>
                    }
                />
            ) : (
                <Arrows
                    svg={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.657"
                            height="14.71"
                            viewBox="0 0 12.657 14.71"
                        >
                            <path
                                id="arrow-right"
                                d="M7.355,0,14.71,12.657H0Z"
                                transform="translate(12.657) rotate(90)"
                                fill="#fff"
                            />
                        </svg>
                    }
                />
            );

        return (
            <div className="container-arrow" onClick={onClick}>
                {pointer}
            </div>
        );
    };

    return (
        <div className="container-geral">
            <h2 className="component-title">
                Cuidado, ao rolar pode conter...
            </h2>

            <img
                src={iconYellow}
                alt="Icone com vários + amarelos"
                className="icon-yellow"
            />
            <img
                src={titleOne}
                alt="Imagem com nome Spoilers"
                className="image-spoilers"
            />
            <img
                src={arrowDown}
                alt="Icone de Seta para baixo"
                className="icon-arrow-down"
            />

            <p className="card-title">Você já estava sabendo?</p>

            <div className="container-image-out">
                <img
                    src={imageCard}
                    alt="Imagem atual do carousel"
                    className="image-carousel"
                    id="img"
                />

                <div className="container-share-hover">
                    <div className="container">
                        <span className="share-title">
                            Espalhe este SPOILER:
                        </span>

                        <a href="#">
                            <img src={facebook} alt="Icone do Facebook" />
                        </a>
                        <a href="#">
                            <img src={linkedin} alt="Icone do Linkedin" />
                        </a>
                        <a href="#">
                            <img src={whatsapp} alt="Icone do Whatsapp" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="Icone do Twitter" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-carousel">
                <p className="carousel-title">
                    Confira o que já saiu e o que está por vir!
                </p>

                <div className="carousel-cards">
                    <CarouselElastic
                        itemsToShow={4}
                        itemsToScroll={4}
                        renderArrow={myArrow}
                    >
                        {cards.map((card) => card)}
                    </CarouselElastic>
                </div>
            </div>
        </div>
    );
};

export default Carousel;

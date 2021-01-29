import styled from "styled-components";
import { fadeIn } from "../../StylesGlobal/animation";

export const VotingTableBackground = styled.img`
  ${fadeIn({ time: "2s" })}
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  @media (max-width: 1025px) {
    background: black;
  }
`;
export const ContainerText = styled.div`
  ${fadeIn({ time: "2s" })}
  padding: 50px;
  color: white;
`;

export const TextOpinion = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 0;
  font-weight: 300;
  @media (max-width: 1025px) {
    font-size: 13px;
  }
`;

export const TextTitleCard = styled.h1`
  font-size: 60px;
  color: white;
  margin-top: -10px;
  margin-bottom: 10px;
  @media (max-width: 1025px) {
    font-size: 34px;
    line-height: 40px;
  }
`;

export const TextReseña = styled.p`
  color: white;
  font-size: 21px;
  font-weight: 300;
  @media (max-width: 1025px) {
    font-size: 14px;
  }
`;

export const TextMasInfo = styled.p`
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 300;
  text-decoration: underline;
  margin: 0;
  @media (max-width: 1025px) {
    font-size: 13px;
  }
`;
export const ImageWiki = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;

export const ContainerMasInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const TextVotar = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
  @media (max-width: 1025px) {
    font-size: 16px;
  }
`;

export const ContainerBarra = styled.div`
  background: #ffad1d;
`;

export const Barra = styled.div`
  ${fadeIn({ time: "2s" })}
  width: ${(props) => props.percent}%;
  background: #1cbbb4;
  height: 40px;
  opacity: 80%;
`;

export const TextPercent = styled.p`
  text-align: right;
  font-size: 20px;
  margin: 5px 5px;
  width: auto;
`;
export const TextPercentInv = styled.p`
  text-align: left;
  font-size: 20px;
  margin: 5px 5px;
`;
export const BarraInv = styled.div`
  ${fadeIn({ time: "2s" })}
  width: ${(props) => props.percentInv}%;
  background: #ffad1d;
  height: 40px;
  opacity: 80%;
`;

export const ContainerLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextVotoRegistrado = styled.h2`
  font-size: 35px;
  color: white;
  margin: 0;
  margin-left: 20px;
  font-weight: bold;
  line-height: 40px;
  @media (max-width: 1025px) {
    font-size: 25px;
    line-height: 25px;
  }
  @media (max-width: 415px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

export const BackgroundBoton = styled.button`
  background: ${(props) => props.back};
  width: 100px;
  text-align: center;
  font-size: 50px;
  border: none;
`;

export const ButtonLike = styled.button`
  ${fadeIn({ time: "2s" })}
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 60px;
  background: ${(props) => props.backgroun};
  @media (max-width: 1025px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const ButtonVolverVotar = styled.button`
  background: transparent;
  cursor: pointer;
  margin: 30px 0;

  border: 1px solid white;
  height: 50px;
  padding: 0 30px;
  @media (min-width: 1840px) {
    margin-bottom: 16px;
  }
  @media (max-width: 1340px) {
    margin-bottom: 47px;
  }
  @media (max-width: 1025px) {
    margin-bottom: 0px;
  }
  @media (max-width: 769px) {
    margin-top: 7px;
    margin-bottom: -5px;
  }
  @media (max-width: 415px) {
    margin-bottom: 21px;
  }
  @media (max-width: 376px) {
    margin-bottom: 7px;
  }
`;

export const ImageGustar = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 541px) {
    width: 60px;
    height: 60px;
  }
`;

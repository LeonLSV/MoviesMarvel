import styled from "styled-components";
import { fadeIn } from "../../StylesGlobal/animation";

export const ImageMid = styled.img`
  width: 100%;
`;

export const TitleSuperHeroes = styled.h1`
  margin-top: 50px;
  font-size: 50px;
  @media (max-width: 540px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

export const TextTitle = styled.h1`
  color: white;
  font-size: 40px;
  margin: 0 10px;
`;

export const ButtonDetails = styled.button`
  background: transparent;
  border: 2px solid white;
  font-weight: 300;
  height: 38px;
  width: 140px;
  margin-left: 50px;
  cursor: pointer;
`;

export const ContainerButton = styled.div`
  ${fadeIn({ time: "3s" })}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DescriptionCard = styled.p`
  ${fadeIn({ time: "3s" })}
  padding: 0 50px;
`;

export const ImageLikeCard = styled.img`
  width: 36px;
`;

export const ContainerTitle = styled.div`
  ${fadeIn({ time: "3s" })}
  display: flex;
  align-items: center;
`;

export const TextTimeCard = styled.p`
  margin-right: 20px;
  margin-bottom: 0;
  font-size: 12px;
`;

export const ImgVoting = styled.img`
  ${fadeIn({ time: "3s" })}
  width: 100%;
  margin-top: 30px;
`;

export const ImageFondo = styled.img`
  ${fadeIn({ time: "3s" })}
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 550px;
`;

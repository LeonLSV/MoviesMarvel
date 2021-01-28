import styled from "styled-components";

export const VotingTableBackground = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  @media (max-width: 768px) {
    background: black;
  }
`;
export const ContainerText = styled.div`
  padding: 50px;
  color: white;
`;

export const TextOpinion = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 0;
  font-weight: 300;
  @media (max-width: 414px) {
    font-size: 13px;
  }
`;

export const TextIroman = styled.h1`
  font-size: 60px;
  color: white;
  margin-top: -10px;
  margin-bottom: 10px;
  @media (max-width: 414px) {
    font-size: 40px;
  }
`;

export const TextReseña = styled.p`
  color: white;
  font-size: 21px;
  font-weight: 300;
  @media (max-width: 414px) {
    font-size: 15px;
  }
`;

export const TextMasInfo = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 300;
  text-decoration: underline;
  @media (max-width: 414px) {
    font-size: 13px;
  }
`;
export const TextVotar = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
  @media (max-width: 414px) {
    font-size: 16px;
  }
`;

export const ContainerBarra = styled.div`
  background: #ffad1d;
`;

export const Barra = styled.div`
  width: ${(props) => props.percent}%;
  background: #1cbbb4;
  height: 40px;
  opacity: 80%;
`;

export const TextPercent = styled.p`
  text-align: right;
  font-size: 20px;
  margin: 5px 5px;
`;
export const TextPercentInv = styled.p`
  text-align: left;
  font-size: 20px;
  margin: 5px 5px;
`;
export const BarraInv = styled.div`
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
`;

export const ButtonLike = styled.button`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
`;

export const ButtonVolverVotar = styled.button`
  background: transparent;
  cursor: pointer;
  margin: 30px 0;
  margin-bottom: 25px;
  border: 1px solid white;
  height: 50px;
  padding: 0 30px;
`;

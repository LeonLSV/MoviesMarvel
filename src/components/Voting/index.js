import React, { useState } from "react";
import votingTable from "../../images/VotingTable.png";
import wiki from "../../images/Wiki.png";
import { Row, Col, Tooltip } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import {
  VotingTableBackground,
  TextOpinion,
  ContainerText,
  TextTitleCard,
  TextReseña,
  TextMasInfo,
  TextVotar,
  Barra,
  BarraInv,
  ButtonLike,
  TextPercent,
  ContainerLike,
  TextVotoRegistrado,
  TextPercentInv,
  ButtonVolverVotar,
  ImageGustar,
  ContainerMasInfo,
  ImageWiki,
} from "./styled";
import megusta from "../../images/megusta.png";
import nomegusta from "../../images/nomegusta.png";

function Voting() {
  const [percent, updatePercent] = useState(
    window.localStorage.getItem("percent")
  );
  const [percentInv, updatePercentInv] = useState(100);
  const [voted, updateVoted] = useState(false);
  const [like, updateLike] = useState(true);

  const setLocalStorage = (value) => {
    try {
      updatePercent(value);
      window.localStorage.setItem("percent", JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  //Me gusta

  const increase = () => {
    let porcentaje = percent + 10;
    let porcentajeInv = percentInv - 10;
    if (porcentaje > 100) {
      porcentaje = 100;
    }
    updatePercent(porcentaje);
    updatePercentInv(porcentajeInv);
    updateVoted(true);
    updateLike(true);
    setLocalStorage(porcentaje);
  };
  //No me gusta
  const decline = () => {
    let porcentaje = percent - 10;
    let porcentajeInv = percentInv + 10;
    if (porcentajeInv <= 0) {
      porcentajeInv = 0;
    }
    updatePercent(porcentaje);
    updatePercentInv(porcentajeInv);
    updateVoted(true);
    updateLike(false);
    setLocalStorage(porcentaje);
  };
  //Votar de nuevo
  const restart = () => {
    updateVoted(false);
    updateLike(true);
  };

  return (
    <>
      <Row
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
        }}>
        <Col lg={24}>
          <VotingTableBackground src={votingTable} alt="fondo" />

          {voted === false && like === true ? (
            <>
              <ContainerText>
                <TextOpinion>Dinos tu opinión sobre</TextOpinion>
                <TextTitleCard>Ironman?</TextTitleCard>
                <TextReseña>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </TextReseña>
                <ContainerMasInfo>
                  <ImageWiki src={wiki} alt="wikipedia" />
                  <Tooltip title="Más información">
                    <TextMasInfo>Más información</TextMasInfo>
                  </Tooltip>
                </ContainerMasInfo>
                <TextVotar>¿Cuál es tu voto?</TextVotar>
              </ContainerText>
              <Row justify="center" align="bottom">
                <Col
                  span={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}>
                  <Tooltip title="Me gusta">
                    <ButtonLike backgroun="#1cbbb4" onClick={increase}>
                      <LikeOutlined />
                    </ButtonLike>
                  </Tooltip>
                </Col>
                <Col
                  span={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}>
                  <Tooltip title="No me gusta">
                    <ButtonLike backgroun="#ffad1d" onClick={decline}>
                      <DislikeOutlined />
                    </ButtonLike>
                  </Tooltip>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <ContainerText>
                <TextTitleCard>
                  Marvel - <span>Ironman</span>
                </TextTitleCard>
                <ContainerLike>
                  {like ? (
                    <ImageGustar src={megusta} alt="me gusta" />
                  ) : (
                    <ImageGustar src={nomegusta} alt="no me gusta" />
                  )}

                  <TextVotoRegistrado>
                    Tu voto
                    <br /> ha sido registrado
                  </TextVotoRegistrado>
                </ContainerLike>
                <TextReseña>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 150.
                </TextReseña>
                <Tooltip title="Votar de nuevo">
                  <ButtonVolverVotar onClick={restart}>
                    Volver a votar
                  </ButtonVolverVotar>
                </Tooltip>
              </ContainerText>
            </>
          )}
        </Col>
      </Row>

      <Row justify="flex-end" align="bottom">
        <Col span={24} style={{ display: "flex", flexDirection: "row" }}>
          <Barra percent={percent}>
            <TextPercent>{percent}%</TextPercent>
          </Barra>
          <BarraInv percentInv={percentInv}>
            <TextPercentInv>{percentInv}%</TextPercentInv>
          </BarraInv>
        </Col>
      </Row>
    </>
  );
}

export default Voting;

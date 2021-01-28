import React, { useState, useEffect } from "react";
import votingTable from "../../images/VotingTable.png";
import { Row, Col, Tooltip, Button, Modal } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import {
  VotingTableBackground,
  TextOpinion,
  ContainerText,
  TextIroman,
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
} from "./styled";

function Voting() {
  const [percent, updatePercent] = useState(50);
  const [percentInv, updatePercentInv] = useState(50);
  const [voted, updateVoted] = useState(false);
  const [like, updateLike] = useState(true);

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
  };
  //No me gusta
  const decline = () => {
    let porcentaje = percent - 10;
    let porcentajeInv = percentInv + 10;
    if (porcentaje < 0) {
      porcentaje = 0;
    }
    updatePercent(porcentaje);
    updatePercentInv(porcentajeInv);
    updateVoted(true);
    updateLike(false);
  };
  //Votar de nuevo
  const restart = () => {
    updateVoted(false);
    updateLike(true);
  };

  console.log("like=", like);
  console.log("voted=", voted);
  console.log("percent=", percent);

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
                <TextIroman>Ironman?</TextIroman>
                <TextReseña>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </TextReseña>
                <TextMasInfo>Más información</TextMasInfo>
                <TextVotar>¿Cuál es tu voto?</TextVotar>
              </ContainerText>
              <Row justify="center" align="bottom">
                <Col
                  span={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#1cbbb4",
                    fontSize: "60px",
                    height: "100px",
                    width: "100px",
                    cursor: "pointer",
                  }}>
                  <Tooltip title="Me gusta">
                    <ButtonLike onClick={increase}>
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
                    background: "#ffad1d",
                    fontSize: "60px",
                    height: "100px",
                    width: "100px",
                    cursor: "pointer",
                  }}>
                  <Tooltip title="No me gusta">
                    <ButtonLike onClick={decline}>
                      <DislikeOutlined />
                    </ButtonLike>
                  </Tooltip>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <ContainerText>
                <TextIroman>Marvel - Ironman</TextIroman>
                <ContainerLike>
                  {like ? (
                    <LikeOutlined
                      style={{
                        height: "130px",
                        width: "130px",
                        textAlign: "center",
                        fontSize: "60px",
                        padding: "30px",
                        background: "#1cbbb4",
                      }}
                    />
                  ) : (
                    <DislikeOutlined
                      style={{
                        height: "130px",
                        width: "130px",
                        textAlign: "center",
                        fontSize: "60px",
                        padding: "30px",
                        background: "#ffad1d",
                      }}
                    />
                  )}
                  {/* <Liked  /> */}
                  {/* <img src={megusta} alt="me gusta" /> */}
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

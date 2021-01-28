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
import Voting from "../VotingTwo";

class VotingTable extends React.Component {
  state = {
    percent: 50,
    percentInv: 50,
    voted: false,
    like: true,
  };

  increase = () => {
    let percent = this.state.percent + 1;
    let percentInv = this.state.percentInv - 1;
    if (percent > 100) {
      percent = 100;
    }

    this.setState({ percent });
    this.setState({ percentInv });
    this.setState({ voted: true });
    this.setState({ like: true });
  };

  decline = () => {
    let percentInv = this.state.percentInv + 1;
    let percent = this.state.percent - 1;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
    this.setState({ percentInv });
    console.log(percent);
    console.log(percentInv);
    this.setState({ voted: true });
    this.setState({ like: false });
  };

  restart = () => {
    this.setState({ voted: false });
    this.setState({ like: true });
  };

  render() {
    const counter = this.state.percent;
    const voted = this.state.voted;
    const like = this.state.like;

    // const Liked = like ? LikeOutlined : DislikeOutlined;

    console.log("like=", like);
    console.log("voted=", voted);
    console.log("counter=", counter);

    return (
      <>
        <Button onClick={this.ShowModal}>Modal</Button>
        <Modal title="Basic Modal" visible={this.modalVisible}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
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
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
                      <ButtonLike onClick={this.increase}>
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
                      <ButtonLike onClick={this.decline}>
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
                    <ButtonVolverVotar onClick={this.restart}>
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
            <Barra percent={this.state.percent}>
              <TextPercent>{this.state.percent}%</TextPercent>
            </Barra>
            <BarraInv percentInv={this.state.percentInv}>
              <TextPercentInv>{this.state.percentInv}%</TextPercentInv>
            </BarraInv>
          </Col>
        </Row>

        <Voting />
      </>
    );
  }
}
export default VotingTable;

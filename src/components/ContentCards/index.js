import React from "react";
import { Row, Col } from "antd";
import {
  TitleSuperHeroes,
  TextTitle,
  ButtonDetails,
  ContainerButton,
  ImageLikeCard,
  ContainerTitle,
  DescriptionCard,
  TextTimeCard,
  ImgVoting,
} from "./styled";
import "./index.css";
import megusta from "../../images/megusta.png";
import nomegusta from "../../images/nomegusta.png";
import votingSuperman from "../../images/voting.png";

export const ContentCards = () => {
  return (
    <>
      <Row className="RowCardTitle">
        <Col md={2} xs={0}></Col>
        <Col>
          <TitleSuperHeroes>Super Héroes anteriores</TitleSuperHeroes>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="CardImage" md={9} style={{ display: "flex" }}>
          <ContainerTitle>
            <ImageLikeCard src={megusta} />
            <TextTitle>Superman</TextTitle>
          </ContainerTitle>
          <DescriptionCard>
            Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
            eu velit libero.
          </DescriptionCard>
          <ContainerButton>
            <ButtonDetails>Ver detalle</ButtonDetails>
            <TextTimeCard>
              1 mes atrás
              <br />
              en lorem dolor
            </TextTimeCard>
          </ContainerButton>
          <ImgVoting src={votingSuperman} alt="votación" />
        </Col>
        <Col md={2} xs={0}></Col>
        <Col className="CardImageThor" md={9} style={{ display: "flex" }}>
          <ContainerTitle>
            <ImageLikeCard src={nomegusta} />
            <TextTitle>Thor</TextTitle>
          </ContainerTitle>
          <DescriptionCard>
            Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
            eu velit libero.
          </DescriptionCard>
          <ContainerButton>
            <ButtonDetails>Ver detalle</ButtonDetails>
            <TextTimeCard>
              1 mes atrás
              <br />
              en lorem dolor
            </TextTimeCard>
          </ContainerButton>
          <ImgVoting src={votingSuperman} alt="votación" />
        </Col>
      </Row>
      <Row justify="center">
        <Col className="CardImageBatman" md={9} style={{ display: "flex" }}>
          <ContainerTitle>
            <ImageLikeCard src={nomegusta} />
            <TextTitle>Batman</TextTitle>
          </ContainerTitle>
          <DescriptionCard>
            Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
            eu velit libero.
          </DescriptionCard>
          <ContainerButton>
            <ButtonDetails>Ver detalle</ButtonDetails>
            <TextTimeCard>
              2 meses atrás
              <br />
              en lorem dolor
            </TextTimeCard>
          </ContainerButton>
          <ImgVoting src={votingSuperman} alt="votación" />
        </Col>
        <Col md={2} xs={0}></Col>
        <Col className="CardImageSpiderman" md={9} style={{ display: "flex" }}>
          <ContainerTitle>
            <ImageLikeCard src={megusta} />
            <TextTitle>Spiderman</TextTitle>
          </ContainerTitle>
          <DescriptionCard>
            Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
            eu velit libero.
          </DescriptionCard>
          <ContainerButton>
            <ButtonDetails>Ver detalle</ButtonDetails>
            <TextTimeCard>
              3 meses atrás
              <br />
              en lorem dolor
            </TextTimeCard>
          </ContainerButton>
          <ImgVoting src={votingSuperman} alt="votación" />
        </Col>
      </Row>
    </>
  );
};

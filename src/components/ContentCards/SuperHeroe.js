import { Col } from "antd";

import {
  TextTitle,
  ButtonDetails,
  ContainerButton,
  ImageLikeCard,
  ContainerTitle,
  DescriptionCard,
  TextTimeCard,
  ImgVoting,
  ImageFondo,
} from "./styled";
import "./index.css";

const SuperHeroe = (props) => {
  return (
    <>
      <Col md={1} xs={0}></Col>
      <Col className="CardImage" md={8} style={{ display: "flex" }}>
        <ImageFondo src={props.image} alt={props.superheroe} />
        <ContainerTitle>
          <ImageLikeCard src={props.megusta} />
          <TextTitle>{props.superheroe}</TextTitle>
        </ContainerTitle>
        <DescriptionCard>{props.description}</DescriptionCard>
        <ContainerButton>
          <ButtonDetails>Ver detalle</ButtonDetails>
          <TextTimeCard>{props.last_date}</TextTimeCard>
        </ContainerButton>
        <ImgVoting src={props.votingImg} alt="votación" />
      </Col>
      <Col md={1} xs={0}></Col>
    </>
  );
};

export default SuperHeroe;

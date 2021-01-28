import React from "react";
import { FondoFotoHeader, TextNavbar, Logo } from "./styled";
import header from "../../images/header.png";
import logo from "../../images/logo.png";
import { SearchOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import Voting from "../Voting";
import "./index.css";

const AlineacionNavBar = {
  displa: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const NavBar = () => {
  return (
    <>
      <FondoFotoHeader src={header} alt="Fondo header" />
      <Row style={AlineacionNavBar}>
        <Col lg={2} xs={0}></Col>
        <Col lg={10} xs={24} className="logo">
          <Logo src={logo} alt="Logo Heroes" />
        </Col>
        <Col
          lg={12}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "30px",
          }}>
          <TextNavbar>Heroes Anteriores</TextNavbar>
          <TextNavbar>¿Cómo funciona?</TextNavbar>
          <TextNavbar>Iniciar Sesión</TextNavbar>
          <SearchOutlined
            style={{ color: "white", fontSize: "20px", marginLeft: "20px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={2} xs={0}></Col>
        <Col xl={10} lg={10} xs={24}>
          <Voting />
        </Col>
      </Row>
    </>
  );
};

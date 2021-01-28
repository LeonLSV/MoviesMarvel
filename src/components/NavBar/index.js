import React, { useState } from "react";
import { FondoFotoHeader, TextNavbar, Logo, HideContainer } from "./styled";
import header from "../../images/header.png";
import logo from "../../images/logo.png";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { Row, Col, Drawer, Button } from "antd";
import Voting from "../Voting";

const AlineacionNavBar = {
  displa: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const NavBar = () => {
  //Menú
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <FondoFotoHeader src={header} alt="Fondo header" />
      <HideContainer display="none" display991="flex">
        <Row style={AlineacionNavBar}>
          <Col lg={2} xs={0}></Col>
          <Col lg={10} xs={24} style={{ marginTop: "30px" }}>
            <Logo src={logo} alt="Logo Heroes" />
          </Col>
          <Col
            lg={12}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "30px",
            }}>
            <Button
              type="primary"
              style={{ background: "#1cbbb4", border: "#1cbbb4" }}
              onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              title="Menú"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}>
              <TextNavbar color="black">Heroes Anteriores</TextNavbar>
              <TextNavbar color="black">¿Cómo funciona?</TextNavbar>
              <TextNavbar color="black">Iniciar Sesión</TextNavbar>
              <SearchOutlined style={{ color: "white", fontSize: "20px" }} />
            </Drawer>
          </Col>
        </Row>
      </HideContainer>
      <HideContainer display="flex" display991="none">
        <Row style={AlineacionNavBar}>
          <Col lg={2} xs={0}></Col>
          <Col lg={10} xs={24} style={{ marginTop: "30px" }}>
            <Logo src={logo} alt="Logo Heroes" />
          </Col>
          <Col
            lg={10}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "30px",
            }}>
            <TextNavbar>Heroes Anteriores</TextNavbar>
            <TextNavbar>¿Cómo funciona?</TextNavbar>
            <TextNavbar>Iniciar Sesión</TextNavbar>
            <SearchOutlined style={{ color: "white", fontSize: "20px" }} />
          </Col>
          <Col lg={2} xs={0}></Col>
        </Row>
      </HideContainer>
      <Row>
        <Col lg={2} xs={0}></Col>
        <Col xl={10} lg={10} xs={24}>
          <Voting />
        </Col>
      </Row>
    </>
  );
};

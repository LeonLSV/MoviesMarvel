import React from "react";
import { Row, Col } from "antd";
import { TextFooter, ContainerLeft, ContainerRight } from "./styled";
import { FacebookFilled, TwitterOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <>
      <Row align="middle">
        <Col md={2} xs={0}></Col>
        <Col md={10} xs={24}>
          <ContainerLeft>
            <TextFooter>Términos y condiciones</TextFooter>
            <TextFooter>Politica de tratamiento de datos</TextFooter>
            <TextFooter>Contactenos</TextFooter>
          </ContainerLeft>
        </Col>

        <Col
          md={10}
          xs={24}
          styled={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <ContainerRight>
            <TextFooter>Siguenos</TextFooter>
            <FacebookFilled
              style={{
                marginRight: "20px",
                fontSize: "25px",
                color: "#333333",
              }}
            />
            <TwitterOutlined style={{ fontSize: "25px", color: "#333333" }} />
          </ContainerRight>
        </Col>
        <Col md={2} xs={0}></Col>
      </Row>
    </>
  );
};

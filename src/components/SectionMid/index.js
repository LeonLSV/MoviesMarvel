import React from "react";
import "./index.css";
import { TextoDescription, TextTitle } from "./styled";
import { Row, Col } from "antd";

export const SectionMid = () => {
  return (
    <>
      <Row justify="center" align="middle" className="Row-MidSection">
        <Col
          span={20}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "20px",
            alignItems: "center",
            background: "#ebebeb",
          }}>
          <Col lg={6}>
            <TextTitle size="25px">Lorem ipsum. Dolor</TextTitle>
            <TextTitle size="37px" weight="bold" margintop="-10px">
              IP Lorem ip.
            </TextTitle>
          </Col>
          <Col lg={16}>
            <TextoDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              fringilla nisi. Suspendisse vel nulla non ipsum volutpat fermentum
              et a velit. Nullam nunc massa, ultricies sed purus viverra, congue
              tristique diam.
            </TextoDescription>
          </Col>
        </Col>
      </Row>
    </>
  );
};

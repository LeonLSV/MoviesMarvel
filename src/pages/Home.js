import React from "react";
import { Row, Col } from "antd";
import { NavBar } from "../components/NavBar";
import Voting from "../components/Voting";
import { SectionMid } from "../components/SectionMid";
import { ContentCards } from "../components/ContentCards";

export const Home = () => {
  return (
    <>
      <NavBar />
      {/* <Row>
        <Col lg={2} xs={0}></Col>
        <Col xl={10} lg={10} xs={24}>
          <Voting />
        </Col>
      </Row> */}

      <SectionMid />
      <ContentCards />
    </>
  );
};

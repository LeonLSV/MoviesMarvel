import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import { TitleSuperHeroes } from "./styled";
import "./index.css";
import megusta from "../../images/megusta.png";
// import nomegusta from "../../images/nomegusta.png";
import votingSuperman from "../../images/voting.png";
import SuperHeroe from "./SuperHeroe";

const DATA = require("../../Data/heroes.json");

export const ContentCards = () => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(
    function () {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          console.log("Si");
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
      console.log(element.current);
    },
    [element]
  );

  console.log(DATA[0].image);
  return (
    <>
      <Row className="RowCardTitle">
        <Col md={2} xs={0}></Col>
        <Col>
          <TitleSuperHeroes>Super Héroes anteriores</TitleSuperHeroes>
        </Col>
      </Row>
      <Row justify="center" ref={element}>
        {show && (
          <>
            {DATA.map((element) => {
              return (
                <SuperHeroe
                  key={element.movie}
                  megusta={megusta}
                  superheroe={element.movie}
                  description={element.description}
                  last_date={element.last_date}
                  votingImg={votingSuperman}
                  image={element.image}
                />
              );
            })}
          </>
        )}
      </Row>
    </>
  );
};

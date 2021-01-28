import React from "react";
import { NavBar } from "../components/NavBar";
import { SectionMid } from "../components/SectionMid";
import { ContentCards } from "../components/ContentCards";

export const Home = () => {
  return (
    <>
      <NavBar />
      <SectionMid />
      <ContentCards />
    </>
  );
};

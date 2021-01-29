import React from "react";
import { NavBar } from "../components/NavBar";
import { SectionMid } from "../components/SectionMid";
import { ContentCards } from "../components/ContentCards";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <SectionMid />
      <ContentCards />
      <Footer />
    </>
  );
};

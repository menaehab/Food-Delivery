import React from "react";
import "../../styles/Header.css";
import Layout from "../../assets/components/layouts/Layout";
import Hero from "../Home/Hero";
import Explore from "./Explore";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Explore />
      </Layout>
    </>
  );
}

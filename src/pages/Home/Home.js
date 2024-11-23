import React from "react";
import "../../styles/Header.css";
import Layout from "../../assets/components/layouts/Layout";
import Hero from "../Home/Hero";
import Explore from "./Explore";
import Menu from "./Menu";
import Promotion from "./Promotion";
import Shop from "./Shop";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Explore />
        <Menu />
        <Promotion />
        <Shop />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
}

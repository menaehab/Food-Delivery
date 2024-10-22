import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function layout({ childern }) {
  return (
    <>
      <Header />
      <main>{childern}</main>
      <Footer />
    </>
  );
}

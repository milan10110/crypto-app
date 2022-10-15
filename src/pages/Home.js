import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingComponent from "../components/HomePageComponents/LandingComponent";
function Home({ themeChanger }) {
  return (
    <div>
      <Header themeChanger={themeChanger} />
      <LandingComponent />
      <Footer />
    </div>
  );
}

export default Home;

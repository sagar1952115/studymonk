import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HomepageHeader from "../../components/homepage-header/HomepageHeader";
import Procedure from "../../components/procedure/Procedure";
import Testimonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HomepageHeader />
      <Procedure />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;

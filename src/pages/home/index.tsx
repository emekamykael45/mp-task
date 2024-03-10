import { useEffect } from "react";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import Analytics from "./analytics";
import CTA from "./cta";
import Efficiency from "./efficiency";
import FullControl from "./full-control";
import Hero from "./hero";
import RealActions from "./real-actions";

const HomePage = () => {
  useEffect(() => {
    setTimeout(() => window.scroll(0, 0), 200);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="homepage_container">
      <Navbar />

      <Hero />
      <Analytics />
      <Efficiency />
      <RealActions />
      <FullControl />
      <CTA />

      <Footer />
    </div>
  );
};

export default HomePage;

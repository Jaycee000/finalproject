import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About/About";
import Blog from "../src/components/Blog/Blog";
import Contact from "../src/components/Contact/Contact";
import HeroContent from "../src/components/HeroContent";
import Layout from "../src/layouts/Layout";
import SectionContainer from "../src/layouts/SectionContainer";

const PortfolioIsotope = dynamic(
  () => import("../src/components/Portfolio/PortfolioIsotope"),
  {
    ssr: false,
  }
);

export default function IndexAnimatedDark() {
  useEffect(() => {
    document.querySelector("body").classList.add("index", "dark", "loaded");
  }, []);

  return (
    <Layout>
      <SectionContainer sectionName={"home"}>
        <div className="home-content">
          {/* Animated Background Starts */}
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          {/* Animated Background Ends */}
          {/* Background Dotted Pattern Starts */}
          <div className="right-dotted-shape" />
          {/* Background Dotted Pattern Ends */}
          {/* Home Main Content Starts */}
          <HeroContent />
          {/* Home Contact Ends */}
        </div>
      </SectionContainer>
      {/* About Section Starts */}
      <SectionContainer sectionName={"about"}>
        <About />
      </SectionContainer>
      {/* About Section Ends */}
      {/* Portfolio Section Starts */}
      <SectionContainer sectionName="work">
        <div id="work-content">
          {/* Heading Starts */}
          <div className="heading text-left text-md-center">
            <h2>
              my <span>portfolio</span>
            </h2>
          </div>
          <PortfolioIsotope />
        </div>
      </SectionContainer>
      {/* Portfolio Section Ends */}
      {/* Contact Section Starts */}
      <SectionContainer sectionName="contact">
        <Contact />
      </SectionContainer>
      {/* Contact Section Ends */}
      {/* Blog Section Starts */}
      <SectionContainer sectionName="blog">
        <Blog />
      </SectionContainer>
    </Layout>
  );
}

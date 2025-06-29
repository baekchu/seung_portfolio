import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Home from "@/modules/home";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Portfolio`,
  alternates: {
    canonical: process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || "https://seung-portfolio-gzw3.vercel.app",
  },
};

const HomePage = () => {
  return (
    <Container data-aos="fade-up">
      <Home />
    </Container>
  );
};

export default HomePage;

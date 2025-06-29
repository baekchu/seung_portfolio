import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Home from "@/modules/home";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Portfolio`,
  alternates: {
    canonical: "https://seung-portfolio.vercel.app",
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

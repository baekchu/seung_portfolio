const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '';
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.DOMAIN || "https://seung-portfolio-gzw3.vercel.app";
};

export const METADATA = {
  creator: "S.H Baek",
  description: "portfolio",
  keyword: "s.h baek",
  authors: {
    name: "S.H Baek",
    url: getBaseUrl(),
  },
  openGraph: {
    url: getBaseUrl(),
    siteName: "S.H Baek",
    locale: "ko-KR",
  },
  exTitle: "| S.H Baek",
  profile: "/images/satria.jpg",
};

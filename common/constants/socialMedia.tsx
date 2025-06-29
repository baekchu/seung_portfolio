import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
} from "react-icons/bs";
import { SiGmail, SiNaver, SiKakaotalk } from "react-icons/si";

import { SocialMediaProps } from "../types/socialMedia";

const iconSize = 35;
const backgroundIconSize = 275;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "Stay in Touch",
    description: "Reach out via email for any inquiries or collaborations.",
    name: "gmail",
    href: "mailto:tmd848@gmail.com",
    icon: <SiGmail size={iconSize} />,
    backgroundIcon: <SiGmail size={backgroundIconSize} />,
    textColor: "text-blue-400",
    backgroundColor: "bg-blue-400",
    borderColor: "border-blue-400",
    backgroundGradientColor: "bg-gradient-to-b from-blue-500 to-blue-700",
    colSpan: "md:col-span-2",
    isShow: true,
  },
  {
    title: "Follow My Journey",
    description: "Stay updated with my latest posts and stories on Instagram.",
    name: "instagram",
    href: "https://www.instagram.com/asterpiece_official/",
    icon: <InstagramIcon size={iconSize} />,
    backgroundIcon: <InstagramIcon size={backgroundIconSize} />,
    textColor: "text-purple-200",
    backgroundColor: "bg-purple-200",
    borderColor: "border-purple-200",
    backgroundGradientColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
    colSpan: "md:col-span-1",
    isShow: true,
  },
  {
    title: "Visit My Blog",
    description: "Check out my latest articles and insights on Naver Blog.",
    name: "naver",
    href: "mailto:tmd848@naver.com",
    icon: <SiNaver size={iconSize} />,
    backgroundIcon: <SiNaver size={backgroundIconSize} />,
    textColor: "text-green-400",
    backgroundColor: "bg-green-400",
    borderColor: "border-green-400",
    backgroundGradientColor: "bg-gradient-to-b from-green-600 to-green-800",
    colSpan: "md:col-span-1",
    isShow: true,
  },
  {
    title: "Chat with Me",
    description: "Connect with me quickly and conveniently via KakaoTalk.",
    name: "kakaotalk",
    href: "mailto:tmd848@naver.com",
    icon: <SiKakaotalk size={iconSize} />,
    backgroundIcon: <SiKakaotalk size={backgroundIconSize} />,
    textColor: "text-yellow-400",
    backgroundColor: "bg-yellow-400",
    borderColor: "border-yellow-400",
    backgroundGradientColor: "bg-gradient-to-b from-yellow-500 to-yellow-700",
    colSpan: "md:col-span-1",
    isShow: true,
  },
  {
    title: "Explore the Code",
    description: "Explore the source code for all my projects on GitHub.",
    name: "github",
    href: "https://github.com/baekchu",
    icon: <GithubIcon size={iconSize} />,
    backgroundIcon: <GithubIcon size={backgroundIconSize} />,
    textColor: "text-slate-400",
    backgroundColor: "bg-slate-400",
    borderColor: "border-slate-400",
    backgroundGradientColor: "bg-gradient-to-b from-slate-900 to-slate-950",
    isShow: true,
  },
];

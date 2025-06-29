import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm } from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiRedux,
  SiFirebase,
  SiReactrouter,
  SiReacthookform,
  SiReacttable,
  SiMongodb,
  SiBun,
  SiYarn,
  SiNestjs,
  SiSupabase,
  SiDocker,
  SiFlutter,
  SiDart,
  SiCsharp,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
export type SkillProps = {
  [key: string]: JSX.Element;
};

const iconSize = 22;

export const STACKS: SkillProps = {
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-violet-600" />
  ),
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-400" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  Zustand: <RiBearSmileFill size={iconSize} className="text-orange-600" />,
  "React.js": <SiReact size={iconSize} className="text-cyan-400" />,
  "React Table": <SiReacttable size={iconSize} className="text-rose-600" />,
  "React Hook Form": (
    <SiReacthookform size={iconSize} className="text-pink-500" />
  ),
  "React Router": <SiReactrouter size={iconSize} className="text-red-500" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  "Framer Motion": (
    <TbBrandFramerMotion size={iconSize} className="text-fuchsia-500" />
  ),
  Redux: <SiRedux size={iconSize} className="text-violet-500" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "Node.js": <SiNodedotjs size={iconSize} className="text-green-500" />,
  "Express.js": <SiExpress size={iconSize} />,
  "Nest.js": <SiNestjs size={iconSize} className="text-pink-700" />,
  Flutter: <SiFlutter size={iconSize} className="text-blue-400" />,
  Dart: <SiDart size={iconSize} className="text-blue-600" />,
  Provider: <SiFlutter size={iconSize} className="text-indigo-500" />,
  "C#": <SiCsharp size={iconSize} className="text-purple-600" />,
  WPF: <SiCsharp size={iconSize} className="text-blue-700" />,
  ".NET Framework": <SiCsharp size={iconSize} className="text-violet-600" />,
  SQL: <DiMsqlServer size={iconSize} className="text-blue-800" />,
  "Entity Framework": <SiCsharp size={iconSize} className="text-orange-700" />,
  PHP: <SiPhp size={iconSize} className="text-indigo-600" />,
  MySQL: <SiMysql size={iconSize} className="text-orange-600" />,
  MongoDb: <SiMongodb size={iconSize} className="text-green-600" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  Supabase: <SiSupabase size={iconSize} className="text-emerald-500" />,
  Docker: <SiDocker size={iconSize} className="text-blue-500" />,
  Npm: <FaNpm size={iconSize} className="text-red-500" />,
  Yarn: <SiYarn size={iconSize} className="text-sky-400" />,
  Github: <SiGithub size={iconSize} />,
};

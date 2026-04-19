"use client";

import { useMemo } from "react";
import { BiCodeAlt as SkillsIcon } from "react-icons/bi";
import { useTranslations } from "next-intl";

import SkillCard from "./SkillCard";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { STACKS } from "@/common/constants/stacks";
import MarqueeElement from "@/common/components/elements/MarqueeElement";

const shuffleArray = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const SkillList = () => {
  const t = useTranslations("HomePage");

  const stacksInArray: Array<[string, JSX.Element]> = useMemo(
    () => shuffleArray(Object.entries(STACKS)),
    [],
  );

  const rows = useMemo(
    () => [shuffleArray(stacksInArray), shuffleArray(stacksInArray)],
    [stacksInArray],
  );

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t("skills.title")} icon={<SkillsIcon />} />
        <SectionSubHeading>
          <p>{t("skills.sub_title")}</p>
        </SectionSubHeading>
      </div>

      <div className="flex flex-col space-y-1 overflow-x-hidden">
        {rows.map((slider, index) => (
          <MarqueeElement
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            {slider.map(([name, icon], i) => (
              <SkillCard key={i} name={name} icon={icon} />
            ))}
          </MarqueeElement>
        ))}
      </div>
    </section>
  );
};

export default SkillList;

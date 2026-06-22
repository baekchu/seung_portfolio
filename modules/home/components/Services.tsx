"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  HiShieldCheck as CTAIcon,
  HiBriefcase as ServiceIcon,
  HiLightBulb as IdeaIcon
} from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { FaShieldAlt, FaSearch, FaBug, FaNetworkWired } from "react-icons/fa";

import Button from "@/common/components/elements/Button";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const Services = () => {
  const t = useTranslations("HomePage.services");
  const router = useRouter();

  const skillCards = [
    {
      icon: <FaBug size={20} />,
      title: t("skills.pentest.title"),
      description: t("skills.pentest.description"),
      iconColor: "text-rose-500 dark:text-rose-400",
    },
    {
      icon: <FaNetworkWired size={20} />,
      title: t("skills.network.title"),
      description: t("skills.network.description"),
      iconColor: "text-teal-500 dark:text-teal-400",
    },
  ];

  const stats = [
    { icon: <FaSearch size={18} />, value: "10+", label: t("stats.projects"), color: "text-rose-500 dark:text-rose-400" },
    { icon: <FaShieldAlt size={18} />, value: "100%", label: t("stats.teamwork"), color: "text-teal-500 dark:text-teal-400" },
    { icon: <IdeaIcon size={18} />, value: "24/7", label: t("stats.learning"), color: "text-amber-500 dark:text-amber-400" },
  ];

  return (
    <section className="space-y-10">
      <div className="space-y-2">
        <SectionHeading title={t("title")} icon={<ServiceIcon size={20} />} />
        <SectionSubHeading>{t("sub_title")}</SectionSubHeading>
      </div>

      {/* Main CTA Card */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-7">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-3 shrink-0">
            <CTAIcon size={22} className="text-neutral-700 dark:text-neutral-300" />
          </div>
          <div className="space-y-3 flex-1">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              {t("main_card.title")}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t("main_card.description")}
            </p>
            <div className="flex flex-wrap gap-2">
              {["main_card.tags.pentest", "main_card.tags.linux", "main_card.tags.network", "main_card.tags.growth", "main_card.tags.react", "main_card.tags.csharp", "main_card.tags.flutter"].map((key) => (
                <span key={key} className="px-2.5 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full">
                  {t(key)}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Button
          className="mt-6 w-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-200"
          onClick={() => router.push("/contact")}
        >
          <span className="flex items-center justify-center gap-2 text-sm font-medium">
            {t("main_card.button_text")}
            <FiArrowRight size={14} />
          </span>
        </Button>
      </div>

      {/* Skill Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {skillCards.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 space-y-3"
          >
            <div className={`${skill.iconColor}`}>{skill.icon}</div>
            <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
              {skill.title}
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-5 px-3 text-center"
          >
            <div className={stat.color}>{stat.icon}</div>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
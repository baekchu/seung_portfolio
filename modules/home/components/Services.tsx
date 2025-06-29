"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
  HiUserGroup as CTAIcon,
  HiBriefcase as ServiceIcon,
  HiLightBulb as IdeaIcon
} from "react-icons/hi";
import { FiArrowRight, FiZap, FiMonitor } from "react-icons/fi";
import { RiTeamLine, RiCodeSSlashLine } from "react-icons/ri";

import Card from "@/common/components/elements/Card";
import Button from "@/common/components/elements/Button";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const Services = () => {
  const t = useTranslations("HomePage.services");
  const router = useRouter();

  const skillCards = [
    {
      icon: <FiMonitor size={24} />,
      title: t("skills.frontend.title"),
      description: t("skills.frontend.description"),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/10",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <FiZap size={24} />,
      title: t("skills.performance.title"),
      description: t("skills.performance.description"),
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    }
  ];

  return (
    <section className="space-y-12">
      <div className="space-y-3 text-center">
        <SectionHeading title={t("title")} icon={<ServiceIcon size={24} />} />
        <SectionSubHeading>{t("sub_title")}</SectionSubHeading>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Main CTA Card */}
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-[2px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl lg:col-span-2 h-full">
          <div className="h-full rounded-lg bg-white p-8 dark:bg-neutral-900 flex flex-col justify-between">
            <div className="space-y-6 flex-1">
              <div className="flex items-center gap-4">
                <motion.div
                  className="relative rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-4"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <CTAIcon size={28} className="text-white" />
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-pink-400 animate-pulse"></div>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                    {t("main_card.title")}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
                </div>
              </div>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t("main_card.description")}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                  {t("main_card.tags.react")}
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
                  {t("main_card.tags.typescript")}
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 rounded-full">
                  {t("main_card.tags.teamwork")}
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full">
                  {t("main_card.tags.growth")}
                </span>
              </div>
            </div>
            
            <Button
              className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-lg px-6 py-3 w-full mt-4"
              onClick={() => router.push("/contact")}
            >
              <span className="flex items-center justify-center gap-2 font-medium">
                {t("main_card.button_text")}
                <FiArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
            </Button>
          </div>
        </Card>

        {/* Skill Cards */}
        <div className="space-y-6">
          {skillCards.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-l-transparent hover:border-l-blue-500">
                <div className="p-6 space-y-4">
                  <div className={`rounded-xl ${skill.bgColor} p-3 w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`${skill.iconColor} text-2xl`}>
                      {skill.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience & Goals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="group text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 hover:shadow-lg transition-all duration-300"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
            <RiCodeSSlashLine size={24} className="text-white" />
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
            4+
          </div>
          <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {t("stats.projects")}
          </div>
        </motion.div>
        
        <motion.div 
          className="group text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 hover:shadow-lg transition-all duration-300"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-4 group-hover:scale-110 transition-transform duration-300">
            <RiTeamLine size={24} className="text-white" />
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
            100%
          </div>
          <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {t("stats.teamwork")}
          </div>
        </motion.div>
        
        <motion.div 
          className="group text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 hover:shadow-lg transition-all duration-300"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
            <IdeaIcon size={24} className="text-white" />
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-1">
            24/7
          </div>
          <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {t("stats.learning")}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
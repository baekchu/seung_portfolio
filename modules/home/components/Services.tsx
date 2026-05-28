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

import Card from "@/common/components/elements/Card";
import Button from "@/common/components/elements/Button";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const Services = () => {
  const t = useTranslations("HomePage.services");
  const router = useRouter();

  const skillCards = [
    {
      icon: <FaBug size={24} />,
      title: t("skills.pentest.title"),
      description: t("skills.pentest.description"),
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50 dark:bg-red-900/10",
      iconColor: "text-red-600 dark:text-red-400"
    },
    {
      icon: <FaNetworkWired size={24} />,
      title: t("skills.network.title"),
      description: t("skills.network.description"),
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
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-red-600 via-rose-600 to-orange-600 p-[2px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl lg:col-span-2 h-full">
          <div className="h-full rounded-lg bg-white p-8 dark:bg-neutral-900 flex flex-col justify-between">
            <div className="space-y-6 flex-1">
              <div className="flex items-center gap-4">
                <motion.div
                  className="relative rounded-xl bg-gradient-to-r from-red-500 to-rose-500 p-4"
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
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-orange-400 animate-pulse"></div>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                    {t("main_card.title")}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-full mt-1"></div>
                </div>
              </div>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t("main_card.description")}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 rounded-full">
                  {t("main_card.tags.pentest")}
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 rounded-full">
                  {t("main_card.tags.linux")}
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 rounded-full">
                  {t("main_card.tags.network")}
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 rounded-full">
                  {t("main_card.tags.growth")}
                </span>
              </div>
            </div>
            
            <Button
              className="group/btn relative overflow-hidden bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 text-white transition-all duration-300 hover:from-rose-500 hover:to-orange-500 hover:shadow-lg px-6 py-3 w-full mt-4"
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
              <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-l-transparent hover:border-l-red-500">
                <div className="p-6 space-y-4">
                  <div className={`rounded-xl ${skill.bgColor} p-3 w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`${skill.iconColor} text-2xl`}>
                      {skill.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
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
          className="group text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/10 dark:to-rose-900/10 hover:shadow-lg transition-all duration-300"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-rose-500 mb-4 group-hover:scale-110 transition-transform duration-300">
            <FaSearch size={24} className="text-white" />
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-1">
          7+
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
            <FaShieldAlt size={24} className="text-white" />
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
"use client";

import Image from "next/image";
import { BsBuildings as CompanyIcon } from "react-icons/bs";
import { HiAcademicCap, HiLocationMarker, HiCalendar, HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

import Card from "@/common/components/elements/Card";
import { EducationProps } from "@/common/types/education";
import { useTranslations } from "next-intl";

const EducationCard = ({
  school,
  major,
  logo,
  degree,
  start_year,
  end_year,
  link,
  location,
}: EducationProps) => {
  const t = useTranslations("AboutPage.education");

  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 p-[1px] transition-all duration-300 hover:shadow-xl">
      <div className="h-full rounded-lg bg-white dark:bg-neutral-900 p-6">
        <div className="flex items-start gap-6">
          {/* Logo Section */}
          <motion.div 
            className="relative flex-shrink-0"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-2 shadow-md">
              {logo ? (
                <Image 
                  width={60} 
                  height={60} 
                  src={logo} 
                  alt={school}
                  className="h-full w-full object-contain rounded-lg"
                />
              ) : (
                <CompanyIcon 
                  size={60} 
                  className="h-full w-full text-neutral-400 dark:text-neutral-500"
                />
              )}
              {/* Decorative ring */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 space-y-3">
            {/* School Name with Link */}
            <div className="space-y-1">
              {link ? (
                <motion.a 
                  href={link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-lg font-bold text-neutral-900 dark:text-neutral-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{school}</span>
                  <HiExternalLink 
                    size={16} 
                    className="opacity-0 group-hover/link:opacity-100 transition-opacity" 
                  />
                </motion.a>
              ) : (
                <motion.h3 
                  className="text-lg font-bold text-neutral-900 dark:text-neutral-50"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {school}
                </motion.h3>
              )}
              
              {/* Decorative underline - only show on hover if there's a link */}
              <div className={`h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                link ? "group-hover:w-full" : ""
              }`}></div>
            </div>

            {/* Degree and Major */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <div className="flex items-center gap-2">
                  <HiAcademicCap size={16} className="text-blue-500" />
                  <span className="font-medium">{degree}</span>
                </div>
                <span className="text-neutral-300 dark:text-neutral-600">•</span>
                <span className="text-sm">{major}</span>
              </div>

              {/* Date and Location */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <HiCalendar size={14} className="text-green-500" />
                  <span className="font-mono">{start_year} - {end_year}</span>
                </div>
                
                <span className="hidden text-neutral-300 dark:text-neutral-600 sm:block">•</span>
                
                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <HiLocationMarker size={14} className="text-red-500" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center">
              <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                String(end_year) === "Present" || String(end_year) === "현재"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              }`}>
                <div className={`h-1.5 w-1.5 rounded-full ${
                  String(end_year) === "Present" || String(end_year) === "현재"
                    ? "bg-green-500 animate-pulse"
                    : "bg-blue-500"
                }`}></div>
                {String(end_year) === "Present" || String(end_year) === "현재" ? "재학중" : "졸업"}
              </span>
            </div>
          </div>

          {/* Hover Effect Decoration */}
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
            <div className="absolute top-4 right-4 h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
            <div className="absolute bottom-4 right-8 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
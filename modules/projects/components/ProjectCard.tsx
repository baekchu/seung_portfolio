"use client";

import { useRouter } from "next/navigation";
import Image from "@/common/components/elements/Image";
import { HiStar } from "react-icons/hi";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaFilePowerpoint, FaExternalLinkAlt } from "react-icons/fa";

import Card from "@/common/components/elements/Card";
import { STACKS } from "@/common/constants/stacks";
import { ProjectItem } from "@/common/types/projects";

const ProjectCard = ({
  title,
  slug,
  description,
  image,
  stacks,
  is_featured,
  link_demo,
}: ProjectItem) => {
  const t = useTranslations("ProjectsPage");
  const router = useRouter();

  const trimmedContent =
    description.slice(0, 100) + (description.length > 100 ? "..." : "");

  const isPptLink = link_demo?.includes("docs.google.com/presentation");
  const isDemoLink = link_demo && !isPptLink;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full cursor-pointer"
      onClick={() => router.push(`/projects/${slug}`)}
    >
      <Card className="group relative h-full flex flex-col overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 border-0 shadow-md hover:shadow-xl transition-all duration-300">
        {/* Featured Badge */}
        {is_featured && (
          <div className="absolute right-0 top-0 z-20 flex items-center gap-1 rounded-bl-xl rounded-tr-xl bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-2 text-xs font-bold text-white shadow-lg">
            <HiStar size={12} />
            <span>Featured</span>
          </div>
        )}

        {/* Image Section */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={450}
            height={200}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t("view_project")}</span>
                <FaExternalLinkAlt size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1 line-clamp-3">
            {trimmedContent}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-200 dark:border-neutral-700">
            {stacks.slice(0, 5).map((stack: string, index: number) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                title={stack}
              >
                {STACKS[stack]}
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 hidden sm:inline">
                  {stack.length > 8 ? stack.slice(0, 8) + "..." : stack}
                </span>
              </motion.div>
            ))}
            {stacks.length > 5 && (
              <span className="text-xs text-neutral-500 font-medium">
                +{stacks.length - 5}
              </span>
            )}
          </div>

          {/* PPT Link */}
          {isPptLink && (
            <a
              href={link_demo!}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 w-fit rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 px-3 py-2 text-xs font-semibold text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors duration-200"
            >
              <FaFilePowerpoint size={14} />
              발표자료 보기
            </a>
          )}

          {/* Demo Link (non-PPT) */}
          {isDemoLink && (
            <a
              href={link_demo!}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 w-fit rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-3 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors duration-200"
            >
              <FaExternalLinkAlt size={12} />
              사이트 바로가기
            </a>
          )}
        </div>

        {/* Bottom Gradient Line */}
        <div className="h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

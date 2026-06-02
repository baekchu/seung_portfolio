"use client";

import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { HiStar } from "react-icons/hi";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaFilePowerpoint, FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub as GithubIcon } from "react-icons/bs";

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
  link_github,
}: ProjectItem) => {
  const t = useTranslations("ProjectsPage");
  const router = useRouter();

  const trimmedContent =
    description.slice(0, 100) + (description.length > 100 ? "..." : "");

  const isPptLink = link_demo?.includes("docs.google.com/presentation");
  const isDemoLink = link_demo && !isPptLink;
  const hasLinks = isPptLink || isDemoLink || link_github;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group h-full cursor-pointer"
      onClick={() => router.push(`/projects/${slug}`)}
    >
      <div className="relative h-full flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-black/30">
        {/* Featured Badge */}
        {is_featured && (
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700/50 px-2.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
            <HiStar size={11} />
            Featured
          </div>
        )}

        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <NextImage
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 leading-snug line-clamp-2">
            {title}
          </h3>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1 line-clamp-3">
            {trimmedContent}
          </p>

          {/* Stack icons */}
          <div className="flex flex-wrap items-center gap-2">
            {stacks.slice(0, 7).map((stack: string, index: number) => (
              <div
                key={index}
                title={stack}
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-150"
              >
                {STACKS[stack]}
              </div>
            ))}
            {stacks.length > 7 && (
              <span className="text-xs text-neutral-400 dark:text-neutral-500">
                +{stacks.length - 7}
              </span>
            )}
          </div>

          {/* Links */}
          {hasLinks && (
            <div className="flex items-center gap-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              {isPptLink && (
                <a
                  href={link_demo!}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
                >
                  <FaFilePowerpoint size={12} />
                  발표자료
                </a>
              )}
              {isDemoLink && (
                <a
                  href={link_demo!}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                >
                  <FaExternalLinkAlt size={11} />
                  사이트
                </a>
              )}
              {link_github && (
                <a
                  href={link_github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors ml-auto"
                >
                  <GithubIcon size={13} />
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

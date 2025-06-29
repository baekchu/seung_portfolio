import Link from "next/link";
import Image from "@/common/components/elements/Image";
import { HiOutlineArrowSmRight as ViewIcon, HiStar } from "react-icons/hi";
import { useTranslations } from "next-intl";
import { TbPinnedFilled as PinIcon } from "react-icons/tb";
import { motion } from "framer-motion";

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
}: ProjectItem) => {
  const t = useTranslations("ProjectsPage");

  const trimmedContent =
    description.slice(0, 100) + (description.length > 100 ? "..." : "");

  return (
    <Link href={`/projects/${slug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full"
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
                  <ViewIcon size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Gradient Border */}
            <div className="absolute inset-0 border-2 border-transparent bg-[#ffff] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-t-xl -m-[2px]"></div>
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
                    {stack.length > 8 ? stack.slice(0, 8) + '...' : stack}
                  </span>
                </motion.div>
              ))}
              {stacks.length > 5 && (
                <span className="text-xs text-neutral-500 font-medium">
                  +{stacks.length - 5}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Gradient Line */}
          <div className="h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;

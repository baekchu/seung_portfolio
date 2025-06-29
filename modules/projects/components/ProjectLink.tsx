"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FiExternalLink as LinkIcon } from "react-icons/fi";

interface ProjectLinkProps {
  title?: string;
  link_github?: string | null;
  link_demo?: string | null;
}

interface LinkComponentProps {
  url: string;
  text: string;
  icon: JSX.Element;
}

const LinkComponent = ({ url, text, icon }: LinkComponentProps) => {
  return (
    <Link href={url} target="_blank">
      <div className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300">
        <i>{icon}</i>
        <p className="text-sm transition-all duration-300 dark:text-teal-500 hover:dark:text-teal-400">
          {text}
        </p>
      </div>
    </Link>
  );
};

const ProjectLink = ({ title, link_github, link_demo }: ProjectLinkProps) => {
  const t = useTranslations("ProjectsPage");

  const isValidUrl = (url?: string | null): boolean => {
    if (!url || url.trim() === '') return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const hasValidGithub = isValidUrl(link_github);
  const hasValidDemo = isValidUrl(link_demo);

  return (
    <div className="flex gap-4">
      {hasValidGithub ? (
        <LinkComponent
          url={link_github!}
          text={t("source_code_text")}
          icon={<GithubIcon size={22} />}
        />
      ) : null}
      {hasValidGithub && hasValidDemo ? (
        <span className="text-neutral-400 dark:text-neutral-600">|</span>
      ) : null}
      {hasValidDemo ? (
        <LinkComponent
          url={link_demo!}
          text={t("live_demo_text")}
          icon={<LinkIcon size={22} />}
        />
      ) : null}
    </div>
  );
};

export default ProjectLink;

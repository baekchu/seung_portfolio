import { PROJECTS } from "@/common/constants/projects";
import { getTranslations } from "next-intl/server";

export const getProjectsData = async (locale?: string) => {
  if (!locale) {
    return PROJECTS;
  }
  
  const t = await getTranslations({ locale, namespace: 'ProjectsData' });
  
  // 번역된 프로젝트 데이터 반환
  return PROJECTS.map(project => ({
    ...project,
    title: t(`${project.id}.title`),
    description: t(`${project.id}.description`),
    content: t(`${project.id}.content`)
  }));
};

export const getProjectsDataBySlug = async (slug: string, locale?: string) => {
  const projects = await getProjectsData(locale);
  const project = projects.find(project => project.slug === slug);
  return project || null;
};

import { PROJECTS } from "@/common/constants/projects";
import { ProjectItem } from "@/common/types/projects";
import { getTranslations } from "next-intl/server";

export const getProjectsData = async (locale?: string): Promise<ProjectItem[]> => {
  if (!locale) {
    return PROJECTS;
  }
  
  try {
    const t = await getTranslations({ locale, namespace: 'ProjectsData' });
    
    // 번역된 프로젝트 데이터 반환
    return PROJECTS.map((project: ProjectItem) => ({
      ...project,
      title: t(`${project.id}.title`) || project.title,
      description: t(`${project.id}.description`) || project.description,
      content: t(`${project.id}.content`) || project.content
    }));
  } catch (error) {
    // 번역 실패 시 원본 데이터 반환
    console.warn('Translation failed, returning original data:', error);
    return PROJECTS;
  }
};

export const getProjectsDataBySlug = async (slug: string, locale?: string): Promise<ProjectItem | null> => {
  const projects = await getProjectsData(locale);
  const project = projects.find((project: ProjectItem) => project.slug === slug);
  return project || null;
};

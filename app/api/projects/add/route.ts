import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

// Only allow in development
const isDev = process.env.NODE_ENV === "development";

export const POST = async (request: NextRequest) => {
  if (!isDev) {
    return NextResponse.json(
      { message: "This endpoint is only available in development mode." },
      { status: 403 },
    );
  }

  try {
    const body = await request.json();
    const {
      title,
      slug,
      description,
      image,
      link_demo,
      link_github,
      stacks,
      content,
      is_show,
      is_featured,
    } = body;

    if (!title || !slug || !description) {
      return NextResponse.json(
        { message: "title, slug, description은 필수 항목입니다." },
        { status: 400 },
      );
    }

    const projectsFilePath = path.join(
      process.cwd(),
      "common",
      "constants",
      "projects.ts",
    );
    const fileContent = fs.readFileSync(projectsFilePath, "utf-8");

    // Extract current PROJECTS array to determine next ID
    const idMatches = fileContent.match(/id:\s*(\d+)/g) || [];
    const maxId = idMatches.reduce((max, match) => {
      const id = parseInt(match.replace(/id:\s*/, ""));
      return id > max ? id : max;
    }, 0);
    const newId = maxId + 1;

    // Sanitize slug to prevent path traversal
    const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");

    const newProject = {
      id: newId,
      title,
      slug: safeSlug,
      description,
      image: image || `/images/projects/${safeSlug}.jpg`,
      link_demo: link_demo || undefined,
      link_github: link_github || undefined,
      stacks: Array.isArray(stacks) ? stacks : [],
      content: content || "",
      is_show: is_show !== false,
      is_featured: is_featured === true,
    };

    const newProjectStr = `  {
    id: ${newProject.id},
    title: "${newProject.title.replace(/"/g, '\\"')}",
    slug: "${newProject.slug}",
    description: "${newProject.description.replace(/"/g, '\\"')}",
    image: "${newProject.image}",
    link_demo: ${newProject.link_demo ? `"${newProject.link_demo}"` : "undefined"},
    link_github: ${newProject.link_github ? `"${newProject.link_github}"` : "undefined"},
    stacks: [${newProject.stacks.map((s: string) => `"${s.replace(/"/g, '\\"')}"`).join(", ")}],
    content: "${(newProject.content ?? "").replace(/"/g, '\\"')}",
    is_show: ${newProject.is_show},
    is_featured: ${newProject.is_featured}
  }`;

    // Insert before the closing bracket of the PROJECTS array
    const updatedContent = fileContent.replace(
      /(\];\s*$)/m,
      `,\n${newProjectStr}\n];`,
    );

    fs.writeFileSync(projectsFilePath, updatedContent, "utf-8");

    return NextResponse.json(
      { message: "프로젝트가 성공적으로 추가되었습니다.", project: newProject },
      { status: 201 },
    );
  } catch (error) {
    console.error("프로젝트 추가 실패:", error);
    return NextResponse.json(
      { message: "프로젝트 추가 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
};

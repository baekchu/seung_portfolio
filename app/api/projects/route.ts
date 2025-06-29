import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { getProjectsData } from "@/services/projects";

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || undefined;
    
    const data = await getProjectsData(locale);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

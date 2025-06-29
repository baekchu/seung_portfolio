import { ProjectItem } from "@/common/types/projects";

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "디자인 공유 및 커뮤니티  웹사이트",
    slug: "design-community-portfolio",
    description: "디자이너들을 위한 작품 공유 및 커뮤니티 플랫폼입니다. 포트폴리오 업로드, 좋아요, 댓글 기능과 실시간 채팅을 통한 소통이 가능합니다. Firebase를 활용한 실시간 데이터베이스와 Zustand를 통한 상태 관리로 원활한 사용자 경험을 제공합니다.",
    image: "/images/projects/design-community.jpg",
    link_demo: "https://www.asterpiece.com",
    link_github: "https://github.com/baekchu/project",
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "Firebase", "Zustand"],
    content: "디자이너들을 위한 종합 플랫폼으로 작품 공유, 커뮤니티, 포트폴리오 기능을 통합한 웹사이트입니다.",
    is_show: true,
    is_featured: true
  },
  {
    id: 2,
    title: "개인 포트폴리오 웹사이트",
    slug: "personal-portfolio",
    description: "개발자를 위한 현대적이고 반응형인 개인 포트폴리오 웹사이트입니다. 다크모드, 다국어 지원, 애니메이션 효과가 적용되어 있으며, 프로젝트 쇼케이스와 기술 스택을 효과적으로 보여줍니다.",
    image: "/images/projects/personal-portfolio.jpg",
    link_demo: "https://your-portfolio.vercel.app",
    link_github: "https://github.com/baekchu/seung_portfolio",
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    content: "개발자의 역량과 프로젝트를 효과적으로 보여주는 포트폴리오 웹사이트입니다.",
    is_show: true,
    is_featured: true
  },
  {
    id: 3,
    title: "학교 수강신청 앱 UI/UX 리디자인",
    slug: "course-registration-app",
    description: "기존 학교 수강신청 시스템의 복잡한 UI를 사용자 친화적으로 개선한 모바일 애플리케이션입니다. Flutter를 사용하여 크로스 플랫폼 지원과 직관적인 인터페이스를 구현했습니다. 시간표 시각화, 검색 필터링, 즐겨찾기 기능 등을 포함합니다.",
    image: "/images/projects/course-registration.jpg",
    link_demo: undefined,
    link_github: "https://github.com/baekchu/flutter_project",
    stacks: ["Flutter", "Dart", "Provider"],
    content: "학생들의 수강신청 경험을 개선하기 위한 모바일 앱 리디자인 프로젝트입니다.",
    is_show: true,
    is_featured: false
  },
  {
    id: 4,
    title: "이커머스 쇼핑몰",
    slug: "first-ecommerce-shop",
    description: "처음으로 개발한 전자상거래 웹사이트로, PHP와 MySQL을 활용하여 구축했습니다. 상품 관리, 장바구니, 주문 시스템, 회원 관리 등 쇼핑몰의 기본 기능들을 구현했습니다. 관리자 패널과 결제 시스템(PayPal, 신용카드)도 포함되어 있습니다.",
    image: "/images/projects/first-ecommerce.jpg",
    link_demo: undefined,
    link_github: "https://github.com/baekchu/ecommerce",
    stacks: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    content: "전자상거래의 기본 개념을 학습하며 개발한 첫 번째 쇼핑몰 프로젝트입니다.",
    is_show: true,
    is_featured: false
  },
  {
    id: 5,
    title: "데이터베이스 백업 프로그램",
    slug: "database-backup-program",
    description: "기업용 데이터베이스의 자동 백업 및 복원을 담당하는 데스크톱 애플리케이션입니다. C#과 .NET Framework를 사용하여 개발했으며, 스케줄링, 압축, 암호화 기능을 포함합니다. 다양한 데이터베이스(MySQL, SQL Server, PostgreSQL)를 지원합니다.",
    image: "/images/projects/database-backup.jpg",
    link_demo: undefined,
    link_github: "https://github.com/baekchu/databackup",
    stacks: ["C#", ".NET Framework", "WPF", "Entity Framework", "SQL"],
    content: "기업 데이터의 안전한 백업과 복원을 위한 전문 도구입니다.",
    is_show: true,
    is_featured: false
  }
];

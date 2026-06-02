  <h1>seung-portfolio</h1>
  <p>🔐 Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Firebase — focused on cybersecurity & infrastructure</p>

[![GitHub Repo stars](https://img.shields.io/github/stars/baekchu/seung_portfolio)](https://github.com/baekchu/seung_portfolio/stargazers)
[![Last Update](https://img.shields.io/badge/deps%20update-periodic-blue.svg)](https://shields.io/)

</div>
<br />

## Introduction

안녕하세요, 백승학입니다.

한림대학교 컴퓨터공학과 출신으로, 웹 보안과 모의해킹에 깊은 열정을 가지고 있으며 사이버보안 분야에서의 커리어를 목표로 성장하고 있습니다.

네트워크 보안, 취약점 분석, 서버 인프라 구축 등을 중점적으로 공부하고 있으며, Kali Linux / Ubuntu / Rocky Linux 환경에서 Wireshark, Nmap, Metasploit 등의 도구를 활용한 보안 점검 경험을 보유하고 있습니다.

이 포트폴리오는 제가 진행한 프로젝트, 학습 통계, 그리고 저에 대한 정보를 한곳에서 확인할 수 있도록 직접 제작한 웹사이트입니다.

궁금한 점이 있으시면 언제든지 연락해 주세요! 🧑‍💻

🌐 **Live:** [seung-portfolio.vercel.app](https://seung-portfolio.vercel.app)
<br /><br />

## Key Projects

### 🏗️ 재해복구를 위한 고가용성 인프라 구축

> 엔터프라이즈급 HA 인프라 설계 및 구축

본사와 지사를 VPN으로 연결하고, 장애 상황에서도 서비스 연속성을 보장하는 고가용성 인프라를 설계·구현한 프로젝트입니다.

**핵심 구현 내용**
- **OSPF 기반 계층적 라우팅** — 멀티 사이트 간 동적 라우팅 구성
- **HSRP 게이트웨이 이중화** — Active/Standby 구조로 단일 장애점(SPOF) 제거
- **MySQL Master-Slave 복제** — DB 장애 시 자동 페일오버 구성
- **IPsec VPN 터널** — 본사↔지사 안전한 사설 네트워크 연결

**사용 기술:** Rocky Linux · MySQL · OSPF/HSRP · IPsec VPN · VirtualBox

📄 [발표 자료 보기](https://docs.google.com/presentation/d/1DyaGdw2dTsF5a47-xq5357gQAp5U2KOp/edit?usp=sharing)

---

### ☁️ 가상화 기반 VM 아카데미 인프라 및 보안 구축

> 멀티사이트 하이브리드 클라우드 인프라 설계·구축

KVM, Hyper-V, VMware(ESXi), Docker, Kubernetes, AWS를 통합하여 서울 본사·영등포·인천·경기 4개 거점을 연결한 하이브리드 클라우드 인프라 프로젝트입니다.

**핵심 구현 내용**
- **멀티사이트 VPN** — 4개 거점 간 사이트-투-사이트 VPN 구성
- **온프레미스 + AWS 통합** — 멀티 VPC 연동 및 하이브리드 운영
- **HAProxy 로드밸런싱** — 서비스 트래픽 분산 및 고가용성 확보
- **AD / DNS / DHCP** — 각 지사별 디렉토리 서비스 구성
- **Auto Scaling** — AWS 부하에 따른 자동 확장 구성
- **컨테이너 오케스트레이션** — Docker + Kubernetes 기반 서비스 배포

**사용 기술:** Docker · Kubernetes · AWS · Rocky Linux · Amazon Linux · KVM · VMware ESXi

📄 [발표 자료 보기](https://docs.google.com/presentation/d/1gDWPScFEgBlIvnRZqyxNlaptdar_qSIp/edit?usp=sharing)

---

### 🎨 디자인 공유 및 커뮤니티 웹사이트

> 디자이너를 위한 포트폴리오 공유 플랫폼

디자이너들이 작품을 공유하고 소통할 수 있는 커뮤니티 플랫폼입니다. Firebase 실시간 DB를 기반으로 좋아요, 댓글, 실시간 채팅 기능을 제공합니다.

**핵심 구현 내용**
- **실시간 데이터 동기화** — Firebase Firestore 기반 실시간 피드 구현
- **이미지 업로드 / 포트폴리오 관리** — Cloudinary 연동
- **실시간 채팅** — Firebase Realtime Database 활용
- **전역 상태 관리** — Zustand 기반 클라이언트 상태 설계

**사용 기술:** Next.js · TypeScript · TailwindCSS · Firebase · Zustand

🌐 [라이브 데모](https://www.asterpiece.com) · 🐙 [GitHub](https://github.com/baekchu/project)

<br /><br />

## Tech Stack

This website is built using these technologies:

- ◼️ Next.js 14
- ⚛️ React
- 🔰 TypeScript
- 💠 Tailwind CSS 3
- 🔥 Firebase (Firestore)
- 🗄️ Supabase
- 🦫 Zustand
- 〰️ SWR
- ➰ Framer Motion
- 💢 React Icons
- 🌐 Next-Intl (한국어 / English)
- 🧿 Absolute Import and Path Alias
- 📏 ESLint
- ✨ Prettier

<br />

## Features

- ### 🗳 Projects

  프로젝트 데이터는 Supabase DB와 연동되어 관리되며, Firebase Firestore를 통해 실시간으로 조회됩니다.

- ### 📊 Dashboard

  GitHub, Wakatime, Codewars, Monkeytype 등 다양한 플랫폼의 통계를 각 API를 통해 불러와 대시보드에 표시합니다.

- ### 🌍 다국어 지원

  next-intl을 사용하여 한국어와 영어를 지원합니다.

- ### 📬 Contact

  Nodemailer를 통한 이메일 문의 기능을 제공합니다.

<br /><br />

## Getting Started

로컬 환경에서 실행하려면 아래 단계를 따르세요. `.env.example`을 `.env`로 복사한 뒤 각 값을 채워주세요.

### 1. Clone

```bash
git clone https://github.com/baekchu/seung_portfolio
```

### 2. Install dependencies

```bash
bun install
```

### 3. Config .env

```
NODEMAILER_PW=
NODEMAILER_EMAIL=

GITHUB_READ_USER_TOKEN_PERSONAL=

WAKATIME_API_ID=
WAKATIME_API_KEY=

MONKEYTYPE_API_KEY=

CODEWARS_USER_ID=

POSTGRES_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_URL_NO_SSL=
POSTGRES_PRISMA_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_HOST=
POSTGRES_DATABASE=
```

### 4. Run the development server

```bash
bun run dev
```

[http://localhost:3000](http://localhost:3000) 에서 결과를 확인하세요.
<br /><br />

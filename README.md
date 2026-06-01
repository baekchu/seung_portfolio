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

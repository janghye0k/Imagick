# Imagick — 프로젝트 개요

## 목적

브라우저에서 이미지를 리사이즈·변환·압축·필터 등으로 처리하는 **클라이언트 전용** 온라인 이미지 도구 사이트.

## 핵심 제약

- **서버 없음**: 모든 처리는 브라우저(클라이언트)에서만 동작.
- **개인 프로젝트**: 단일 개발자, 유지보수 용이한 구조.

## 사이트 정보

- **이름**: Imagick
- **기본 정보**: `package.json`에 명시
- **에셋**: `base/public/favicons`, `base/public/images`, 로고용 폰트 `base/public/fonts` (예: Cafe24Behappy)
- **테마**: shadcn + `base/src/styles/tailwind.css` 테마 사용
- **SEO**: 완전 SEO는 목표가 아니며, 사이트 기본 메타·구조화 데이터 수준

## 기술 방향

- React 기반 SPA
- shadcn/ui, Tailwind CSS, PostCSS
- ESLint, Prettier, Stylelint, Husky, lint-staged 필수
- 테스트 환경 구성 필수

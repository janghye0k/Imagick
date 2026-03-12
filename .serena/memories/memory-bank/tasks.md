# Tasks — Imagick 온라인 이미지 사이트

## 복잡도

**Level 3** (Intermediate Feature)

## 태스크 요약

브라우저 전용 온라인 이미지 사이트 구축: resize, convert, compress, filter(및 crop, SVG 변환 등) 기능을 React + shadcn + Tailwind 기반 클라이언트 SPA로 제공. 필수 개발 환경(ESLint, Prettier, Stylelint, 테스트, PostCSS, Tailwind, Husky, lint-staged) 구성 포함.

---

# Level 3 구현 계획

## 1. 요구사항 정리

### 핵심 요구사항

- [ ] **클라이언트 전용**: 서버 없이 브라우저에서만 이미지 처리
- [ ] **React** 사용
- [ ] **기능**: resize, convert(포맷 변환), compress, filter 처리 (추가: crop, SVG 변환 등은 구조화 데이터/기획과 연계)
- [ ] **기본 SEO**: 메타 태그, 구조화 데이터(기존 `base/public/structured-data.json` 활용)
- [ ] **에셋**: `base/public/favicons`, `base/public/images`, 로고 폰트 `base/public/fonts` 사용
- [ ] **테마**: shadcn + `base/src/styles/tailwind.css` 테마 사용

### 기술 제약

- [ ] **필수 개발 환경**: ESLint, Prettier, Stylelint
- [ ] **테스트 환경** 구성
- [ ] **PostCSS, Tailwind** 사용
- [ ] **Husky, lint-staged** 사용

### 참고 에셋

- Feature 이미지: `base/public/images/features/` (resize, compress, convert-image, convert-svg, crop, sprite, transform 등)
- 로고: `base/public/images/logo.svg`, 폰트 `base/public/fonts/Cafe24Behappy.ttf`
- SEO: `base/public/structured-data.json`, `base/public/images/seo/op-image.png`

---

## 2. 컴포넌트·영역 분석

| 영역            | 설명                         | 변경/추가                                                                 |
| --------------- | ---------------------------- | ------------------------------------------------------------------------- |
| **빌드·진입점** | 프로젝트 루트                | Vite + React 설정, `scripts` 정의, HTML 진입점                            |
| **공통 UI**     | 레이아웃, 헤더, 로고, 네비   | shadcn 컴포넌트, `base` 경로의 스타일·에셋 연동                           |
| **라우팅**      | 도구별 페이지                | React Router (또는 유사) — /resize, /convert, /compress, /filter 등       |
| **이미지 처리** | 리사이즈/변환/압축/필터 로직 | Canvas API 또는 라이브러리(browser-image-compression 등), Web Worker 고려 |
| **개발 도구**   | 린트·포맷·테스트·Git 훅      | ESLint, Prettier, Stylelint, Vitest(또는 Jest), Husky, lint-staged 설정   |
| **SEO·메타**    | 메타 태그, 구조화 데이터     | index.html 메타, `structured-data.json` 로드/주입                         |

### 의존성

- UI: shadcn → Tailwind → PostCSS
- 이미지 처리: React 상태 + 파일 입력 → 처리 모듈 → 다운로드/미리보기
- 테스트: Vitest + React Testing Library (Vite 생태계 권장)

---

## 3. 설계 결정 (CREATIVE 반영)

### 아키텍처

- [ ] **SPA**: 단일 HTML, React 라우팅으로 도구별 화면 전환
- [ ] **진입점**: **프로젝트 루트를 Vite 루트**로 사용. `base/`에 있는 참고 파일(favicons, images, fonts, tailwind.css 등)은 **복사**하여 루트 구조에 반영 (base를 Vite root로 쓰지 않음)
- [ ] **이미지 처리**: 브라우저 전용. 라이브러리 선호하되 **Canvas가 더 적합하면 Canvas**; 그 외는 2025–2026 기준 평가 좋은 라이브러리. **Web Worker** 사용(큰 이미지)
- [ ] **상태**: **전역 업로드 상태** — 업로드된 파일 목록·총 용량을 전역으로 유지. 페이지 전환 시에도 파일 유지. 편집 무관 페이지(랜딩 등)에서 드롭 시 Convert로 자동 이동

### UI/UX (CREATIVE 확정)

- [ ] **첫 화면**: 랜딩(소개 + 도구 카드 그리드)
- [ ] **도구 순서**: Convert → Compress → Resize → Filter → Crop → Convert SVG → Transform → Sprite
- [ ] **네비**: 상단 헤더 + 푸터 링크. 로고 클릭 시 홈(/) 이동. 모바일: 햄버거 메뉴
- [ ] **다크 모드**: 제공. `tailwind.css`의 `.dark` 사용
- [ ] **로고**: 텍스트 "Imagick"(`base/public/fonts` 폰트) + `logo.svg` **조합**
- [ ] **파일 입력**: 모든 페이지에서 **드래그 앤 드롭 + 클릭**. 랜딩/비편집 페이지에서 업로드 시 **Convert로 자동 이동**, 파일 유지
- [ ] **다중 파일**: 지원. **최대 20개, 파일당 50MB, 전체 100MB** — 초과 시 업로드 불가·안내
- [ ] **미리보기·다운로드**: 데스크톱·모바일 각각 자연스럽게 배치(반응형)
- [ ] **Resize**: 가능한 모든 옵션(px, %, 비율 유지, 프리셋 등). **Convert**: PNG, JPG, GIF, WebP, AVIF 등. **Compress**: 슬라이더(0–100) + 단계(낮·중·높). **Filter**: 밝기·대비·채도·그레이스케일·블러·세피아 등 가능한 모두
- [ ] **문구**: 타이틀 `Imagick — Free Online Image Editor | Resize, Convert, Compress in Browser`. 홈 소개 `Edit images in your browser — no app, no sign-up. Resize, convert, compress, and more.` 도구명 영어만
- [ ] **도구 카드**: shadcn Card + feature 이미지. **스타일 가이드**: `memory-bank/style-guide.md` 준수
- [ ] **애니메이션**: 적극 권장. **Motion**(motion.dev, 패키지 `motion`) 사용 — 단순한 것은 CSS. **Animate UI**(animate-ui.com)의 Radix UI, Backgrounds, Buttons, Community 컴포넌트 활용 가능 시 활용

### 기술 스택 선택

- [ ] **번들러**: Vite (프로젝트 루트)
- [ ] **React**: 18+
- [ ] **스타일**: Tailwind CSS v4, PostCSS, shadcn/ui (base 테마 복사 반영)
- [ ] **린트/포맷**: ESLint, Prettier, Stylelint
- [ ] **테스트**: Vitest, React Testing Library
- [ ] **Git 훅**: Husky + lint-staged
- [ ] **이미지 처리**: Canvas 또는 2025+ 라이브러리. **Web Worker** 사용
- [ ] **애니메이션**: Motion (`motion`), Animate UI 참고

---

## 4. 구현 전략 (단계별)

### Phase 1: 프로젝트 기반 및 개발 환경 ✅

- [x] Vite + React + TypeScript를 **프로젝트 루트**에 구성
- [x] **base 참고 파일 복사**: favicons, images, fonts → `public/`; `base/src/styles/tailwind.css` → `src/styles/tailwind.css` (경로 조정)
- [x] `package.json` scripts: `dev`, `build`, `preview`, `lint`, `format`, `test`, `stylelint`; 의존성 최신 안정 버전(npm 기준) 반영
- [x] ESLint(flat config), Prettier, Stylelint 설정 (Tailwind 테마 파일은 stylelint ignore)
- [x] Tailwind v4 (`@tailwindcss/vite`) — 복사한 tailwind.css 엔트리 사용
- [x] Husky + lint-staged 연동 (`prepare` 스크립트)
- [x] Vitest + React Testing Library + jsdom 설정
- [x] **Motion** (`motion`) 패키지 추가 (애니메이션)
- [x] index.html 기본 메타·구조화 데이터 참조
- [x] 빌드·테스트·린트 통과 확인

### Phase 2: 공통 레이아웃·라우팅·전역 업로드·SEO

- [x] React Router 설정. 라우트: `/`, `/convert`, `/compress`, `/resize`, `/filter`, `/crop`, `/convert-svg`, `/transform`, `/sprite`
- [x] **전역 업로드 상태**: 파일 목록·총 용량. 제한(20개, 50MB/파일, 100MB 전체). 드래그 앤 드롭/클릭 시 모든 페이지에서 동일 동작; 랜딩·비편집 페이지에서 업로드 시 Convert로 자동 이동, 페이지 전환 시 파일 유지
- [x] 레이아웃: 헤더(로고+네비) + 푸터 링크. 모바일: 햄버거 메뉴. 로고 클릭 → 홈(/)
- [x] 로고: 텍스트 "Imagick"(폰트) + logo.svg 조합. 다크 모드(.dark) 지원
- [x] 랜딩: 소개 + 도구 카드 그리드(shadcn Card + feature 이미지). 도구 순서: Convert → Compress → Resize → Filter → Crop → Convert SVG → Transform → Sprite
- [x] 메타·OG·structured-data.json. 타이틀·한 줄 소개 문구 반영

**검증**

- `pnpm test` ✅ (`src/App.test.tsx`: 홈 드롭 시 `/convert` 이동 + 전역 파일 유지)
- `pnpm lint` ✅
- `pnpm build` ✅

### Phase 3: 이미지 처리 도구 구현 (8개 전부)

- [ ] **Convert**: PNG, JPG, GIF, WebP, AVIF 등 지원. 다중 파일·일괄/개별 다운로드
- [ ] **Compress**: 슬라이더(0–100) + 단계(낮·중·높). 미리보기·다운로드
- [ ] **Resize**: 너비/높이(px), 비율(%), 비율 유지, 프리셋 등 가능한 모든 옵션
- [ ] **Filter**: 밝기, 대비, 채도, 그레이스케일, 블러, 세피아 등 가능한 모두
- [ ] **Crop**: 크롭 영역 설정 → 결과 다운로드
- [ ] **Convert SVG**: SVG 변환 도구
- [ ] **Transform**: 이미지 변환(회전·플립 등)
- [ ] **Sprite**: CSS 스프라이트 생성
- [ ] 큰 이미지 처리 시 **Web Worker** 사용. Canvas 또는 2025+ 라이브러리 선택
- [ ] 미리보기·다운로드 UI는 데스크톱/모바일 반응형. **Motion**·Animate UI 활용

### Phase 4: 테스트·정리

- [ ] 도구별 핵심 플로우 또는 유틸 함수에 대한 단위/통합 테스트
- [ ] 린트/포맷/테스트 통과 확인
- [ ] 프로덕션 빌드 및 정적 배포 가능 여부 확인

---

## 5. 테스트 전략

- [ ] **단위**: 이미지 처리 유틸(리사이즈/압축/포맷 변환 등) 로직
- [ ] **컴포넌트**: 주요 UI 컴포넌트(파일 입력, 버튼, 미리보기) — React Testing Library
- [ ] **E2E**(선택): Playwright 등으로 업로드→다운로드 플로우
- [ ] **CI**: `npm run test`, `npm run lint` 실행 가능하도록 스크립트 정리

---

## 6. 문서화 계획

- [ ] **README**: 설치, 스크립트(dev/build/test), 환경 요구사항
- [ ] **코드**: 복잡한 이미지 처리 로직 주석 또는 간단 문서
- [ ] **Memory Bank**: `progress.md` 단계별 업데이트, 필요 시 `creative/`에 UI/플로우 결정 기록

---

## 7. Creative Phase — 완료

| 구분         | 상태    | 문서                                                                                            |
| ------------ | ------- | ----------------------------------------------------------------------------------------------- |
| **UI/UX**    | ✅ 완료 | `creative/creative-imagick-uiux.md` — 전역 업로드·도구 순서·제한·문구·Motion·Animate UI 등 반영 |
| **아키텍처** | 반영됨  | 프로젝트 루트 Vite, base 복사 방식, 전역 업로드 상태                                            |
| **알고리즘** | 낮음    | Canvas/라이브러리·Web Worker                                                                    |

**스타일 가이드**: `memory-bank/style-guide.md` (tailwind 테마·shadcn·로고 폰트 등).

---

## 8. 기술 검증 (VAN QA 전 확인 사항)

- [ ] **의존성**: React, Vite, Tailwind, shadcn, 이미지 처리 라이브러리 버전 호환
- [ ] **설정**: Vite가 `base` 또는 현재 구조와 맞는지, PostCSS/Tailwind 경로 일치
- [ ] **환경**: Node 버전, `npm install` 후 `npm run build`·`npm run test` 성공
- [ ] **최소 빌드**: Hello World 수준 React 앱이 빌드·실행되는지 확인

---

## 9. 다음 단계

- **Creative 단계**: ✅ 완료. 설계 반영 문서: `creative/creative-imagick-uiux.md`, `creative/creative-imagick-questions.md`, `style-guide.md`
- **다음**: **VAN QA**로 기술 검증 후 **BUILD** 모드에서 Phase 1부터 순서대로 구현

---

_계획 수립일: 2025-03-11 | Memory Bank: .serena/memories/memory-bank_

# Imagick Style Guide

**기준**: `base/src/styles/tailwind.css` (복사 반영 후 `src/styles/tailwind.css`)  
**UI**: shadcn/ui + Tailwind CSS. 도구 카드에는 feature 이미지 사용.

---

## 1. 색상 (Color Palette)

테마는 CSS 변수로 정의. Tailwind `@theme inline` 및 `bg-background`, `text-foreground` 등으로 사용.

### Light (`:root`)

| 용도                  | 변수                                     | 설명                          |
| --------------------- | ---------------------------------------- | ----------------------------- |
| 배경                  | `--background`                           | oklch(0.98 0 0)               |
| 전경(텍스트)          | `--foreground`                           | oklch(0.28 0.04 260.33)       |
| 카드                  | `--card` / `--card-foreground`           | #fff 계열                     |
| Primary               | `--primary` / `--primary-foreground`     | oklch(0.59 0.2 277.06) / 흰색 |
| Secondary             | `--secondary` / `--secondary-foreground` | 연한 보라·진한 텍스트         |
| Muted                 | `--muted` / `--muted-foreground`         | 배경·보조 텍스트              |
| Accent                | `--accent` / `--accent-foreground`       | 강조 영역                     |
| Destructive           | `--destructive`                          | oklch(0.64 0.21 25.39)        |
| Border / Input / Ring | `--border`, `--input`, `--ring`          | 테두리·입력·포커스 링         |

### Dark (`.dark`)

- `--background`: oklch(0.21 0.04 264.04) 등 어두운 톤.
- 나머지 토큰은 `tailwind.css`의 `.dark` 블록 참고.

**사용**: `bg-background`, `text-foreground`, `bg-primary text-primary-foreground`, `border-border` 등 Tailwind 유틸 클래스 사용.

---

## 2. 타이포그래피

| 용도  | 변수           | 기본값                    |
| ----- | -------------- | ------------------------- |
| Sans  | `--font-sans`  | Inter, sans-serif         |
| Serif | `--font-serif` | Merriweather, serif       |
| Mono  | `--font-mono`  | JetBrains Mono, monospace |

**로고 "Imagick"**: `base/public/fonts` 폰트 사용 (예: Cafe24Behappy). `@font-face`로 로드 후 해당 폰트 패밀리 적용.

---

## 3. 간격·라운드

- **기본 radius**: `--radius: 0.5rem`
- Tailwind: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl` (theme에 정의)
- 컴포넌트: `rounded-lg`, `rounded-md` 등으로 일관 사용.

---

## 4. 그림자

- `--shadow-2xs` ~ `--shadow-2xl` 정의됨. `shadow-sm`, `shadow-md` 등 Tailwind 클래스 사용.

---

## 5. 레이아웃

- **앱 최대 너비**: `--width-app: 1280px`, `--max-width-app: 1280px`
- 메인 콘텐츠는 `max-w-[var(--max-width-app)]` 또는 동일 값으로 중앙 정렬.

---

## 6. 컴포넌트 원칙

- **버튼**: shadcn Button. Primary는 `bg-primary text-primary-foreground`.
- **카드**: shadcn Card. 도구 카드는 feature 이미지 + 제목 + 짧은 설명.
- **입력**: shadcn Input, Slider, Select. `border-input`, `ring-ring` 유지.
- **다크 모드**: `class="dark"` 또는 `data-theme` 등으로 `.dark` 적용 시 전체 토큰 전환.

---

## 7. 애니메이션

- **Motion** (motion.dev, 패키지 `motion`): 페이지 전환, 리스트 등장, 호버 등. 단순한 것은 CSS transition.
- **일관성**: 진입/퇴장 방향·duration은 공통 상수로 두고 재사용.

---

_style-guide 반영일: 2025-03-11 | 기준: base/src/styles/tailwind.css_

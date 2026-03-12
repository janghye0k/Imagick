# Motion Primitives UI Components Guide

이 문서는 `motion-primitives` UI 컴포넌트의 기능을 **개발자와 AI Agent가 모두 이해하기 쉽게 설명**합니다.

각 항목 구조

- **Purpose**: 컴포넌트 목적
- **Behavior**: 동작 방식
- **Typical Use Cases**: 사용 사례
- **Key Idea**: 핵심 개념 (AI Agent 요약)

---

# Accordion

**Purpose**

여러 개의 콘텐츠 섹션을 접고 펼칠 수 있는 UI 컴포넌트

**Behavior**

- 제목(header)을 클릭하면 콘텐츠 expand / collapse
- 하나 또는 여러 섹션 동시 열기 가능

**Typical Use Cases**

- FAQ
- 설정 패널
- 문서 목록

**Key Idea**

Collapsible content container with animated expand/collapse.

---

# Animated Background

**Purpose**

배경에 동적인 애니메이션 효과를 적용하는 컴포넌트

**Behavior**

- animated gradient
- particle animation
- background motion

**Typical Use Cases**

- Landing page hero
- Marketing section
- Visual background

**Key Idea**

Decorative animated visual background layer.

---

# Animated Group

**Purpose**

여러 UI 요소를 그룹으로 묶어 애니메이션을 적용

**Behavior**

- stagger animation
- fade-in
- slide-in

**Typical Use Cases**

- 카드 리스트
- 메뉴 목록
- feature grid

**Key Idea**

Parent container that orchestrates animations for child elements.

---

# Animated Number

**Purpose**

숫자가 애니메이션으로 증가하거나 감소하는 컴포넌트

**Behavior**

- count up / count down animation
- easing transition

**Typical Use Cases**

- KPI 표시
- 통계 대시보드
- 방문자 수

**Key Idea**

Smooth animated numeric transitions.

---

# Border Trail

**Purpose**

요소의 테두리를 따라 움직이는 빛 효과

**Behavior**

- border highlight animation
- continuous movement

**Typical Use Cases**

- 버튼 강조
- 카드 hover 효과

**Key Idea**

Moving highlight effect along element borders.

---

# Carousel

**Purpose**

여러 콘텐츠를 슬라이드 형태로 보여주는 컴포넌트

**Behavior**

- horizontal sliding
- drag / swipe 지원
- autoplay 가능

**Typical Use Cases**

- 이미지 슬라이더
- testimonial
- feature showcase

**Key Idea**

Horizontal scrollable content slider.

---

# Dialog

**Purpose**

사용자 인터랙션을 위한 모달 창

**Behavior**

- overlay background
- focus trap
- keyboard close

**Typical Use Cases**

- 로그인 창
- 확인 메시지
- 폼 입력

**Key Idea**

Modal window displayed above the main interface.

---

# Glow Effect

**Purpose**

요소 주변에 빛나는 효과를 추가

**Behavior**

- hover glow
- animated lighting

**Typical Use Cases**

- CTA 버튼 강조
- 카드 hover

**Key Idea**

Visual glow highlight around elements.

---

# Image Comparison

**Purpose**

두 이미지를 슬라이더로 비교하는 컴포넌트

**Behavior**

- drag slider
- before / after view

**Typical Use Cases**

- 이미지 편집 비교
- 디자인 비교
- 제품 전후 비교

**Key Idea**

Interactive before/after image comparison.

---

# In View

**Purpose**

요소가 화면(viewport)에 들어오면 애니메이션 실행

**Behavior**

- IntersectionObserver 기반
- scroll trigger animation

**Typical Use Cases**

- 스크롤 reveal 애니메이션
- 콘텐츠 등장 효과

**Key Idea**

Trigger animations when element enters the viewport.

---

# Morphing Dialog

**Purpose**

요소가 모달 형태로 변형되며 열리는 UI

**Behavior**

- shared layout animation
- morph transition

**Typical Use Cases**

- 카드 → 상세 보기
- 이미지 → 상세 페이지

**Key Idea**

Element morphs into dialog with animated layout transition.

---

# Morphing Popover

**Purpose**

요소가 popover 형태로 변형되는 UI

**Behavior**

- trigger element에서 확장
- smooth morph animation

**Typical Use Cases**

- quick action menu
- contextual menu

**Key Idea**

Morphing transition from trigger element to popover.

---

# Scroll Progress

**Purpose**

페이지 스크롤 진행률을 표시

**Behavior**

- scroll position 기반
- progress bar 표시

**Typical Use Cases**

- 블로그
- 긴 문서 페이지

**Key Idea**

Visual indicator of page scroll progress.

---

# Sliding Number

**Purpose**

숫자가 슬롯머신처럼 슬라이드하며 변경

**Behavior**

- digit 단위 sliding animation

**Typical Use Cases**

- 가격 변경
- scoreboard
- 통계 표시

**Key Idea**

Digit-by-digit sliding numeric transition.

---

# Spotlight

**Purpose**

마우스 위치에 따라 조명이 움직이는 효과

**Behavior**

- radial gradient
- pointer tracking

**Typical Use Cases**

- 인터랙티브 landing page
- product showcase

**Key Idea**

Mouse-follow spotlight lighting effect.

---

# Text Effect

**Purpose**

텍스트에 다양한 애니메이션 효과 적용

**Behavior**

- fade
- slide
- reveal

**Typical Use Cases**

- hero headline
- section title animation

**Key Idea**

General animated typography component.

---

# Text Loop

**Purpose**

여러 텍스트를 순환하며 표시

**Behavior**

- 일정 시간마다 text 변경

**Typical Use Cases**

- 슬로건
- 키워드 강조

**Key Idea**

Rotating list of text phrases.

---

# Text Morph

**Purpose**

텍스트가 다른 텍스트로 부드럽게 변형

**Behavior**

- character interpolation
- blur transition

**Typical Use Cases**

- dynamic headline
- branding animation

**Key Idea**

Morphing transition between two text strings.

---

# Text Roll

**Purpose**

텍스트가 위/아래로 롤링하며 변경

**Behavior**

- vertical sliding animation

**Typical Use Cases**

- 뉴스 ticker
- 메시지 순환

**Key Idea**

Rolling text animation.

---

# Text Scramble

**Purpose**

텍스트가 랜덤 문자에서 실제 문자로 변환

**Behavior**

- random character animation
- hacker-style effect

**Typical Use Cases**

- hero animation
- loading text

**Key Idea**

Random character scramble resolving to final text.

---

# Text Shimmer

**Purpose**

텍스트 위로 빛이 지나가는 효과

**Behavior**

- gradient shimmer animation

**Typical Use Cases**

- 강조 텍스트
- skeleton loading

**Key Idea**

Shimmering light effect across text.

---

# Transition Panel

**Purpose**

패널 간 애니메이션 전환

**Behavior**

- panel switch animation
- smooth content transition

**Typical Use Cases**

- 탭 UI
- step wizard
- settings panel

**Key Idea**

Animated transitions between content panels.

---

# Summary

`motion-primitives`는 **React 애플리케이션에서 사용할 수 있는 애니메이션 중심 UI primitives 라이브러리**입니다.

특징

- framer-motion 기반 애니메이션
- composable UI 구조
- micro-interaction 중심 설계
- 인터랙티브 UI 제작에 적합

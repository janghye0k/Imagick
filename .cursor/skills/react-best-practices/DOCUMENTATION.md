# React Best Practices — 규칙 및 스킬 문서화

이 문서는 `react-best-practices` 폴더 내부의 **스킬(SKILL)** 정의, **규칙(rules)** 구조, **메타데이터**를 한곳에 정리한 참고 문서입니다.

---

## 1. 개요

| 항목 | 내용 |
|------|------|
| **스킬 이름** | vercel-react-best-practices |
| **버전** | 1.0.0 |
| **제작** | Vercel Engineering |
| **목적** | React/Next.js 성능 최적화 가이드 — 컴포넌트 작성·리뷰·리팩터링 시 참고 |
| **규칙 수** | 58개 (8개 카테고리) |
| **대상** | AI 에이전트·LLM 및 개발자 |

**적용 시점**

- 새 React 컴포넌트·Next.js 페이지 작성
- 데이터 페칭(클라이언트/서버) 구현
- 성능 이슈 코드 리뷰
- 기존 React/Next.js 리팩터링
- 번들 크기·로드 타임 최적화

---

## 2. 폴더 구조

```
react-best-practices/
├── SKILL.md           # 스킬 정의 (트리거, 카테고리, 규칙 요약)
├── README.md          # 구조·빌드·규칙 추가 방법
├── AGENTS.md          # 규칙 전체 컴파일 결과 (빌드 생성)
├── metadata.json      # 버전·조직·요약·참고 링크
├── DOCUMENTATION.md   # 본 문서 (규칙·스킬 정리)
└── rules/
    ├── _sections.md   # 섹션 메타데이터 (순서, 임팩트, 설명)
    ├── _template.md   # 새 규칙 작성 템플릿
    ├── async-*.md     # 1. Eliminating Waterfalls
    ├── bundle-*.md    # 2. Bundle Size Optimization
    ├── server-*.md    # 3. Server-Side Performance
    ├── client-*.md    # 4. Client-Side Data Fetching
    ├── rerender-*.md  # 5. Re-render Optimization
    ├── rendering-*.md # 6. Rendering Performance
    ├── js-*.md        # 7. JavaScript Performance
    └── advanced-*.md  # 8. Advanced Patterns
```

---

## 3. 카테고리별 요약 (우선순위·임팩트·접두사)

| 우선순위 | 카테고리 | 임팩트 | 파일 접두사 | 설명 |
|----------|----------|--------|-------------|------|
| 1 | Eliminating Waterfalls | CRITICAL | `async-` | 순차 await 제거, 워터폴 최소화 |
| 2 | Bundle Size Optimization | CRITICAL | `bundle-` | 초기 번들 축소, TTI·LCP 개선 |
| 3 | Server-Side Performance | HIGH | `server-` | 서버 렌더링·데이터 페칭 최적화 |
| 4 | Client-Side Data Fetching | MEDIUM-HIGH | `client-` | 클라이언트 요청 중복 제거·효율적 패턴 |
| 5 | Re-render Optimization | MEDIUM | `rerender-` | 불필요 리렌더 감소 |
| 6 | Rendering Performance | MEDIUM | `rendering-` | 렌더링 비용 감소 |
| 7 | JavaScript Performance | LOW-MEDIUM | `js-` | 핫 패스 마이크로 최적화 |
| 8 | Advanced Patterns | LOW | `advanced-` | 특수 케이스용 고급 패턴 |

---

## 4. 규칙 전체 목록 (파일명 · 제목 · 임팩트)

### 4.1 Eliminating Waterfalls (async-) — CRITICAL

| 파일명 | 제목 | 임팩트 |
|--------|------|--------|
| `async-defer-await.md` | Defer Await Until Needed | HIGH |
| `async-dependencies.md` | Dependency-Based Parallelization | CRITICAL |
| `async-api-routes.md` | Prevent Waterfall Chains in API Routes | CRITICAL |
| `async-parallel.md` | Promise.all() for Independent Operations | CRITICAL |
| `async-suspense-boundaries.md` | Strategic Suspense Boundaries | HIGH |

### 4.2 Bundle Size Optimization (bundle-) — CRITICAL

| 파일명 | 제목 | 임팩트 |
|--------|------|--------|
| `bundle-barrel-imports.md` | Avoid Barrel File Imports | CRITICAL |
| `bundle-conditional.md` | Conditional Module Loading | HIGH |
| `bundle-defer-third-party.md` | Defer Non-Critical Third-Party Libraries | MEDIUM |
| `bundle-dynamic-imports.md` | Dynamic Imports for Heavy Components | CRITICAL |
| `bundle-preload.md` | Preload Based on User Intent | MEDIUM |

### 4.3 Server-Side Performance (server-) — HIGH

| 파일명 | 제목 | 임팩트 |
|--------|------|--------|
| `server-auth-actions.md` | Authenticate Server Actions Like API Routes | CRITICAL |
| `server-dedup-props.md` | Avoid Duplicate Serialization in RSC Props | LOW |
| `server-cache-lru.md` | Cross-Request LRU Caching | HIGH |
| `server-hoist-static-io.md` | Hoist Static I/O to Module Level | HIGH |
| `server-serialization.md` | Minimize Serialization at RSC Boundaries | HIGH |
| `server-parallel-fetching.md` | Parallel Data Fetching with Component Composition | CRITICAL |
| `server-cache-react.md` | Per-Request Deduplication with React.cache() | MEDIUM |
| `server-after-nonblocking.md` | Use after() for Non-Blocking Operations | MEDIUM |

### 4.4 Client-Side Data Fetching (client-) — MEDIUM-HIGH

| 파일명 | 제목 | 임팩트 |
|--------|------|--------|
| `client-event-listeners.md` | Deduplicate Global Event Listeners | LOW |
| `client-passive-event-listeners.md` | Use Passive Event Listeners for Scrolling Performance | MEDIUM |
| `client-swr-dedup.md` | Use SWR for Automatic Deduplication | MEDIUM-HIGH |
| `client-localstorage-schema.md` | Version and Minimize localStorage Data | MEDIUM |

### 4.5 Re-render Optimization (rerender-) — MEDIUM

| 파일명 | 제목 | 임팩트 |
|--------|------|--------|
| `rerender-defer-reads.md` | Defer State Reads to Usage Point | MEDIUM |
| `rerender-derived-state-no-effect.md` | Calculate Derived State During Rendering | MEDIUM |
| `rerender-derived-state.md` | Subscribe to Derived State | MEDIUM |
| `rerender-dependencies.md` | Narrow Effect Dependencies | LOW |
| `rerender-functional-setstate.md` | Use Functional setState Updates | MEDIUM |
| `rerender-lazy-state-init.md` | Use Lazy State Initialization | MEDIUM |
| `rerender-memo.md` | Extract to Memoized Components | MEDIUM |
| `rerender-memo-with-default-value.md` | Extract Default Non-primitive Parameter Value from Memoized Component to Constant | MEDIUM |
| `rerender-move-effect-to-event.md` | Put Interaction Logic in Event Handlers | MEDIUM |
| `rerender-simple-expression-in-memo.md` | Do not wrap a simple expression with a primitive result type in useMemo | LOW-MEDIUM |
| `rerender-transitions.md` | Use Transitions for Non-Urgent Updates | MEDIUM |
| `rerender-use-ref-transient-values.md` | Use useRef for Transient Values | MEDIUM |

### 4.6 Rendering Performance (rendering-) — MEDIUM

| 파일명 | 제목 | 임팩트 |
|--------|------|--------|
| `rendering-activity.md` | Use Activity Component for Show/Hide | MEDIUM |
| `rendering-animate-svg-wrapper.md` | Animate SVG Wrapper Instead of SVG Element | LOW |
| `rendering-conditional-render.md` | Use Explicit Conditional Rendering | LOW |
| `rendering-content-visibility.md` | CSS content-visibility for Long Lists | HIGH |
| `rendering-hoist-jsx.md` | Hoist Static JSX Elements | LOW |
| `rendering-hydration-no-flicker.md` | Prevent Hydration Mismatch Without Flickering | MEDIUM |
| `rendering-hydration-suppress-warning.md` | Suppress Expected Hydration Mismatches | LOW-MEDIUM |
| `rendering-svg-precision.md` | Optimize SVG Precision | LOW |
| `rendering-usetransition-loading.md` | Use useTransition Over Manual Loading States | LOW |

### 4.7 JavaScript Performance (js-) — LOW-MEDIUM

| 파일명 | 제목 | 임팩트 |
|--------|------|--------|
| `js-batch-dom-css.md` | Avoid Layout Thrashing | MEDIUM |
| `js-cache-function-results.md` | Cache Repeated Function Calls | MEDIUM |
| `js-cache-property-access.md` | Cache Property Access in Loops | LOW-MEDIUM |
| `js-cache-storage.md` | Cache Storage API Calls | LOW-MEDIUM |
| `js-combine-iterations.md` | Combine Multiple Array Iterations | LOW-MEDIUM |
| `js-early-exit.md` | Early Return from Functions | LOW-MEDIUM |
| `js-hoist-regexp.md` | Hoist RegExp Creation | LOW-MEDIUM |
| `js-index-maps.md` | Build Index Maps for Repeated Lookups | LOW-MEDIUM |
| `js-length-check-first.md` | Early Length Check for Array Comparisons | MEDIUM-HIGH |
| `js-min-max-loop.md` | Use Loop for Min/Max Instead of Sort | LOW |
| `js-set-map-lookups.md` | Use Set/Map for O(1) Lookups | LOW-MEDIUM |
| `js-tosorted-immutable.md` | Use toSorted() Instead of sort() for Immutability | MEDIUM-HIGH |

### 4.8 Advanced Patterns (advanced-) — LOW

| 파일명 | 제목 | 임팩트 |
|--------|------|--------|
| `advanced-event-handler-refs.md` | Store Event Handlers in Refs | LOW |
| `advanced-init-once.md` | Initialize App Once, Not Per Mount | LOW-MEDIUM |
| `advanced-use-latest.md` | useEffectEvent for Stable Callback Refs | LOW |

---

## 5. 스킬(SKILL) 사용 방법

- **스킬 정의**: `SKILL.md` — 언제 적용할지, 카테고리·규칙 요약이 정리되어 있음.
- **전체 규칙 상세**: `AGENTS.md` — 모든 규칙의 Incorrect/Correct 예제가 한 문서에 컴파일됨. 에이전트·LLM이 참고할 메인 문서.
- **개별 규칙**: `rules/<접두사>-<이름>.md` — 상세 설명·코드 예제·참고 링크.

**빌드**

- `pnpm build` → `AGENTS.md` 재생성
- `pnpm validate` → 규칙 파일 검증
- `pnpm extract-tests` → 테스트 케이스 추출

---

## 6. 규칙 파일 형식 (rules/)

각 규칙 파일은 다음 구조를 따릅니다.

```markdown
---
title: Rule Title Here
impact: MEDIUM
impactDescription: Optional description
tags: tag1, tag2
---

## Rule Title Here

**Incorrect:** ...

**Correct:** ...

Reference: [Link](url)
```

- `_sections.md`: 섹션 ID(접두사), 순서, 임팩트, 설명.
- `_template.md`: 새 규칙 추가 시 복사해 사용하는 템플릿.

---

## 7. 메타데이터 (metadata.json)

- **version**: 1.0.0  
- **organization**: Vercel Engineering  
- **date**: January 2026  
- **abstract**: 40+ 규칙, 8개 카테고리, 임팩트 우선순위, Incorrect/Correct 예제 포함 가이드 요약  
- **references**: react.dev, nextjs.org, swr.vercel.app, better-all, lru-cache, Vercel 블로그 등

---

## 8. 참고 문서 매핑

| 문서 | 용도 |
|------|------|
| `SKILL.md` | 스킬 트리거·카테고리·규칙 이름 퀵 레퍼런스 |
| `README.md` | 폴더 구조, 빌드/검증/규칙 추가 방법 |
| `AGENTS.md` | 규칙 전체 상세 (에이전트/LLM용 컴파일 결과) |
| `DOCUMENTATION.md` | 규칙·스킬·폴더 구조 종합 문서 (본 문서) |
| `metadata.json` | 버전·조직·요약·참고 링크 |

이 문서는 `react-best-practices` 폴더의 규칙과 스킬을 한곳에서 조회할 때 사용하면 됩니다.

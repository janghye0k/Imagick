# Claude Skills 전체 개요

이 문서는 현재 로컬 폴더에 있는 모든 Claude Skills를 설명합니다.

## 📊 통계

- **현재 로컬 폴더 Skills 수**: 34개 (document-skills의 4개 하위 skills 포함 시 37개)
- **카테고리별 분류**: 8개 카테고리

---

## 🎨 Creative & Media (창의 및 미디어)

### algorithmic-art

- **설명**: 시드 기반 랜덤성과 인터랙티브 파라미터 탐색을 사용하여 p5.js로 알고리즘 아트를 생성합니다.
- **용도**: 코드 기반 아트 생성, 생성형 아트, 알고리즘 아트, 플로우 필드, 파티클 시스템
- **출력**: .md 파일 (철학), .html 파일 (인터랙티브 뷰어), .js 파일 (생성 알고리즘)
- **특징**: 원본 알고리즘 아트 생성, 저작권 위반 방지

### canvas-design

- **설명**: 디자인 철학과 미학 원칙을 사용하여 PNG 및 PDF 문서에 아름다운 시각적 아트를 생성합니다.
- **용도**: 포스터, 아트 작품, 디자인, 정적 작품 생성
- **특징**: 원본 시각 디자인 생성, 저작권 위반 방지

### image-enhancer

- **설명**: 이미지와 스크린샷의 해상도, 선명도, 명확성을 향상시켜 품질을 개선합니다.
- **용도**: 프레젠테이션, 문서화, 소셜 미디어 게시물용 이미지 준비
- **기능**: 해상도 향상, 선명도 개선, 아티팩트 감소

### theme-factory

- **설명**: 슬라이드, 문서, 보고서, HTML 랜딩 페이지 등 아티팩트에 전문적인 폰트 및 색상 테마를 적용합니다.
- **용도**: 아티팩트 스타일링
- **특징**: 10개의 사전 설정된 테마 제공, 즉석 테마 생성 가능

### video-downloader

- **설명**: YouTube 및 기타 플랫폼에서 비디오를 다운로드합니다. 다양한 형식 및 품질 옵션을 지원합니다.
- **용도**: 오프라인 시청, 편집, 아카이빙용 비디오 다운로드
- **기능**: 다양한 품질 설정 (best, 1080p, 720p, 480p, 360p), 여러 형식 (mp4, webm, mkv), 오디오 전용 MP3 다운로드

---

## 💼 Business & Marketing (비즈니스 및 마케팅)

### brand-guidelines

- **설명**: Anthropic의 공식 브랜드 색상 및 타이포그래피를 아티팩트에 적용합니다.
- **용도**: 브랜드 색상, 스타일 가이드라인, 시각적 포맷팅, 회사 디자인 표준 적용
- **특징**: Anthropic 공식 브랜드 아이덴티티 사용

### changelog-generator

- **설명**: Git 커밋을 분석하여 기술적인 커밋을 명확하고 고객 친화적인 릴리스 노트로 변환합니다.
- **용도**: 릴리스 노트 준비, 제품 업데이트 요약, 앱 스토어 제출용 변경 로그 작성
- **기능**: Git 히스토리 스캔, 변경 사항 분류, 기술적 언어를 사용자 친화적 언어로 변환

### domain-name-brainstormer

- **설명**: 프로젝트에 대한 창의적인 도메인 이름 아이디어를 생성하고 여러 TLD(.com, .io, .dev, .ai 등)에서 가용성을 확인합니다.
- **용도**: 새 프로젝트 또는 회사 시작, 제품 또는 서비스 출시, 개인 브랜드 또는 포트폴리오 사이트 생성
- **기능**: 창의적인 이름 생성, 가용성 확인, 여러 확장자 제안

### internal-comms

- **설명**: 회사가 선호하는 형식을 사용하여 모든 종류의 내부 커뮤니케이션을 작성하는 데 도움을 줍니다.
- **용도**: 상태 보고서, 리더십 업데이트, 3P 업데이트, 회사 뉴스레터, FAQ, 인시던트 보고서, 프로젝트 업데이트
- **특징**: 회사별 형식 지원

### lead-research-assistant

- **설명**: 제품 또는 서비스를 분석하고, 대상 회사를 검색하며, 실행 가능한 연락 전략을 제공하여 고품질 리드를 식별합니다.
- **용도**: 잠재 고객 또는 클라이언트 찾기, 파트너십을 위한 회사 목록 구축, 판매 외부 활동을 위한 대상 계정 식별
- **기능**: 비즈니스 이해, 대상 회사 식별, 리드 우선순위 지정, 연락 전략 제공

---

## 📝 Communication & Writing (커뮤니케이션 및 작성)

### beautiful_prose

- **설명**: 현대 AI식 표현 없이, 깔끔하고 정확하며 힘 있는 영어 산문을 위한 스타일 계약. 구체적이고 동사 중심이며, 필러·치유 톤을 배제합니다.
- **용도**: 산문 작성·교정 요청 시, AI 틱·과장·모호함 없이 깔끔하고 강한 문체가 필요할 때
- **특징**: REGISTER/DENSITY/HEAT/LENGTH 등 옵션 태그 지원, 금지 패턴(em dash, 특정 어휘·구문) 명시
- **활성화**: "Apply the Beautiful Prose skill." 등으로 요청 시 적용

### brainstorming

- **설명**: 모든 창의적 작업 전에 사용해야 합니다. 기능 생성, 구성 요소 구축, 기능 추가 또는 동작 수정 전에 사용자 의도, 요구사항 및 디자인을 탐색합니다.
- **용도**: 기능 생성, 구성 요소 구축, 기능 추가, 동작 수정 전 아이디어 탐색
- **특징**: 자연스러운 협업 대화를 통한 아이디어를 완전히 형성된 디자인으로 변환

### content-research-writer

- **설명**: 연구 수행, 인용 추가, 훅 개선, 개요 반복, 각 섹션에 대한 실시간 피드백을 제공하여 고품질 콘텐츠 작성에 도움을 줍니다.
- **용도**: 블로그 게시물, 기사, 뉴스레터 작성, 교육 콘텐츠 또는 튜토리얼 생성, 사례 연구 작성
- **기능**: 협업 개요 작성, 연구 지원, 훅 개선, 섹션별 피드백, 음성 보존, 인용 관리

### doc-coauthoring

- **설명**: 문서 공동 작성을 위한 구조화된 워크플로우를 안내합니다.
- **용도**: 문서 작성, 제안서 작성, 기술 사양 작성, 결정 문서 작성
- **특징**: 3단계 워크플로우 (컨텍스트 수집, 정제 및 구조화, 독자 테스트)

### meeting-insights-analyzer

- **설명**: 회의 트랜스크립트를 분석하여 갈등 회피, 말하기 비율, 필러 단어, 리더십 스타일을 포함한 행동 패턴을 발견합니다.
- **용도**: 여러 회의에 걸친 커뮤니케이션 패턴 분석, 리더십 및 촉진 스타일에 대한 피드백 받기
- **기능**: 패턴 인식, 커뮤니케이션 분석, 행동 인사이트 제공

---

## 🎯 Productivity & Organization (생산성 및 조직)

### file-organizer

- **설명**: 컨텍스트를 이해하고, 중복을 찾고, 더 나은 구조를 제안하며, 정리 작업을 자동화하여 컴퓨터 전체의 파일과 폴더를 지능적으로 구성합니다.
- **용도**: 다운로드 폴더 정리, 파일 찾기, 중복 파일 제거, 폴더 구조 개선
- **기능**: 현재 구조 분석, 중복 찾기, 조직 제안, 자동 정리

### invoice-organizer

- **설명**: 지저분한 파일을 읽고, 주요 정보를 추출하고, 일관되게 이름을 변경하고, 논리적인 폴더로 정렬하여 세금 준비를 위한 송장 및 영수증을 자동으로 구성합니다.
- **용도**: 세금 시즌 준비, 비즈니스 비용 관리, 영수증 정리
- **기능**: 송장 내용 읽기, 파일 이름 일관되게 변경, 논리적 폴더로 정렬

### tailored-resume-generator

- **설명**: 채용 공고를 분석하고 관련 경험, 기술 및 성과를 강조하는 맞춤형 이력서를 생성하여 면접 기회를 극대화합니다.
- **용도**: 특정 직무 지원, 다른 산업 또는 역할에 맞게 이력서 맞춤화, 경력 전환을 위한 관련 경험 강조
- **기능**: 채용 공고 분석, 우선순위 식별, 콘텐츠 맞춤화, 키워드 최적화, 전문적인 형식 지정

### tapestry

- **설명**: 통합 콘텐츠 추출 및 액션 계획 수립. URL에서 콘텐츠를 추출하고 실행 가능한 계획을 생성합니다.
- **용도**: YouTube 동영상, 기사, PDF 등 다양한 콘텐츠 타입 자동 감지 및 처리
- **기능**: 콘텐츠 타입 자동 감지, 적절한 skill을 사용한 콘텐츠 추출, Ship-Learn-Next 액션 계획 자동 생성

---

## 🔧 Development & Technical (개발 및 기술)

### react-best-practices

- **설명**: Vercel Engineering의 React 및 Next.js 성능 최적화 가이드. React/Next.js 코드 작성, 리뷰, 리팩토링 시 최적의 성능 패턴을 적용합니다.

### supabase-postgres-best-practices

- **설명**: Supabase의 Postgres 성능 최적화 및 모범 사례. 쿼리·스키마·DB 설정 작성·리뷰·최적화 시 적용합니다.
- **용도**: SQL 쿼리 작성·스키마 설계, 인덱스·쿼리 최적화, DB 성능 이슈 리뷰, 연결 풀·스케일링 설정, RLS 등 Postgres 기능 최적화
- **특징**: 8개 카테고리(쿼리 성능, 연결 관리, 보안·RLS, 스키마 설계, 동시성·락, 데이터 접근, 모니터링, 고급 기능), 잘못된/올바른 SQL 예시·쿼리 플랜 분석
- **출처**: Supabase
- **용도**: React 컴포넌트·Next.js 페이지 작성, 데이터 페칭, 번들 최적화, 성능 개선
- **특징**: 8개 카테고리 58개 규칙(워터폴 제거, 번들 크기, 서버/클라이언트 성능, 리렌더·렌더링·JS·고급 패턴)
- **출처**: Vercel Engineering

### ui-ux-pro-max

- **설명**: 웹·모바일 앱을 위한 종합 디자인 가이드. 67개 스타일, 96개 컬러 팔레트, 57개 폰트 페어링, 99개 UX 가이드라인, 13개 기술 스택별 25개 차트 타입을 검색 가능한 DB로 제공합니다.
- **용도**: UI/UX 디자인, 구축, 리뷰, 개선 요청 시 디자인 시스템 생성 및 우선순위 기반 추천
- **특징**: `--design-system`으로 디자인 시스템 생성, `--persist`로 MASTER/페이지 오버라이드 저장, Python 스크립트 기반

### frontend-design

- **설명**: 높은 디자인 품질의 독특하고 프로덕션 수준의 프론트엔드 인터페이스를 생성합니다.
- **용도**: 웹 구성 요소, 페이지, 아티팩트, 포스터 또는 애플리케이션 구축
- **특징**: 일반적인 AI 미학을 피하는 창의적이고 세련된 코드 및 UI 디자인

### web-artifacts-builder

- **설명**: React, Tailwind CSS, shadcn/ui를 사용하여 정교한 다중 구성 요소 claude.ai HTML 아티팩트를 생성하는 도구 모음입니다.
- **용도**: 상태 관리, 라우팅 또는 shadcn/ui 구성 요소가 필요한 복잡한 아티팩트
- **스택**: React 18 + TypeScript + Vite + Parcel (번들링) + Tailwind CSS + shadcn/ui

### webapp-testing

- **설명**: Playwright를 사용하여 로컬 웹 애플리케이션과 상호작용하고 테스트하는 도구 모음입니다.
- **용도**: 프론트엔드 기능 검증, UI 동작 디버깅, 브라우저 스크린샷 캡처, 브라우저 로그 보기
- **기능**: 정적 HTML 파일 직접 읽기, 동적 웹앱 서버 관리, Playwright 스크립트 작성

### developer-growth-analysis

- **설명**: 최근 Claude Code 채팅 기록을 분석하여 코딩 패턴, 개발 격차 및 개선 영역을 식별하고, HackerNews에서 관련 학습 리소스를 선별하며, Slack DM으로 개인화된 성장 보고서를 자동으로 전송합니다.
- **용도**: 최근 작업에서 개발 패턴 및 습관 이해, 특정 기술 격차 또는 반복적인 도전 과제 식별
- **기능**: 채팅 기록 읽기, 개발 패턴 식별, 개선 영역 감지, 학습 리소스 선별

### kaizen

- **설명**: 코드 구현 및 리팩토링, 시스템 아키텍처 및 디자인, 프로세스 및 워크플로우 개선, 오류 처리 및 검증에 사용합니다. 과도한 엔지니어링을 피하고 반복적 개선을 적용하는 기법을 제공합니다.
- **용도**: 코드 구현 및 리팩토링, 아키텍처 및 디자인 결정, 프로세스 및 워크플로우 개선, 오류 처리 및 검증
- **철학**: 많은 작은 개선이 하나의 큰 변경을 이깁니다. 수정이 아닌 디자인 시점에 오류를 방지합니다.

### git-pushing

- **설명**: Conventional Commit 메시지와 함께 Git 변경사항을 스테이징, 커밋 및 푸시합니다.
- **용도**: 변경사항 커밋 및 푸시, 원격 저장소에 작업 저장
- **기능**: 스마트 커밋 스크립트 사용, Conventional Commit 형식 지원, 자동 브랜치 감지

### review-implementing

- **설명**: 코드 리뷰 피드백을 체계적으로 처리하고 구현합니다.
- **용도**: 리뷰어 코멘트 또는 피드백 제공, PR 리뷰 노트 붙여넣기, 리뷰 제안 구현
- **기능**: 리뷰어 노트 파싱, Todo 목록 생성, 체계적 구현, 변경사항 검증

### test-fixing

- **설명**: 스마트 오류 그룹화를 사용하여 테스트를 실행하고 모든 실패한 테스트를 체계적으로 수정합니다.
- **용도**: 실패한 테스트 수정, 테스트 실패 보고, 테스트 스위트 실행 및 실패 발생
- **기능**: 초기 테스트 실행, 스마트 오류 그룹화, 체계적 수정, 검증

---

## 📄 Document Management (문서 관리)

### document-skills

- **설명**: 다양한 문서 형식에 대한 포괄적인 문서 생성, 편집 및 분석 지원
- **하위 Skills**:
  - **docx**: Word 문서 생성, 편집, 추적 변경, 주석 추가
  - **pdf**: PDF 문서 작업
  - **pptx**: PowerPoint 프레젠테이션 작업
  - **xlsx**: Excel 스프레드시트 작업
- **기능**: 문서 생성, 내용 편집, 추적 변경 작업, 주석 추가, 형식 보존, 텍스트 추출

---

## 🔌 Integration & Connectivity (통합 및 연결)

### connect

- **설명**: Claude를 모든 앱에 연결합니다. 이메일 보내기, 이슈 생성, 메시지 게시, 데이터베이스 업데이트 - Gmail, Slack, GitHub, Notion 및 1000개 이상의 서비스에서 실제 작업을 수행합니다.
- **용도**: 이메일 보내기, 이슈 생성, 메시지 게시, 데이터베이스 업데이트
- **지원 앱**: 1000개 이상의 통합 (Gmail, Slack, GitHub, Notion, Google Docs, Sheets, Airtable, PostgreSQL, HubSpot, Salesforce 등)

---

## 🛠️ Skill Development (Skill 개발)

### skill-creator

- **설명**: 효과적인 skill을 생성하기 위한 가이드입니다.
- **용도**: 새로운 skill 생성 또는 기존 skill 업데이트
- **제공 사항**: 전문 지식, 워크플로우, 도구 통합을 포함한 skill 개발 가이드

### mcp-builder

- **설명**: LLM이 잘 설계된 도구를 통해 외부 서비스와 상호작용할 수 있도록 하는 고품질 MCP (Model Context Protocol) 서버를 생성하기 위한 가이드입니다.
- **용도**: 외부 API 또는 서비스와 통합하기 위한 MCP 서버 구축
- **지원**: Python (FastMCP) 또는 Node/TypeScript (MCP SDK)

---

## 📚 사용 방법

### Claude.ai에서 사용

1. 채팅 인터페이스에서 skill 아이콘(🧩) 클릭
2. 마켓플레이스에서 skill 추가 또는 커스텀 skill 업로드
3. Claude가 작업에 따라 관련 skill을 자동으로 활성화

### Claude Code에서 사용

1. Skill을 `~/.config/claude-code/skills/`에 배치:
   ```bash
   mkdir -p ~/.config/claude-code/skills/
   cp -r skill-name ~/.config/claude-code/skills/
   ```
2. Skill 메타데이터 확인:
   ```bash
   head ~/.config/claude-code/skills/skill-name/SKILL.md
   ```
3. Claude Code 시작:
   ```bash
   claude
   ```
4. Skill이 자동으로 로드되고 관련 시 자동 활성화

### API를 통해 사용

```python
import anthropic

client = anthropic.Anthropic(api_key="your-api-key")

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    skills=["skill-id-here"],
    messages=[{"role": "user", "content": "Your prompt"}]
)
```

---

## 🔗 참고 자료

- [GitHub awesome-claude-skills 레포지토리](https://github.com/ComposioHQ/awesome-claude-skills)
- [Claude Skills 개요](https://docs.anthropic.com/claude/docs/skills-overview)
- [Skills 사용자 가이드](https://docs.anthropic.com/claude/docs/skills-user-guide)
- [커스텀 Skills 생성](https://docs.anthropic.com/claude/docs/creating-custom-skills)
- [Skills API 문서](https://docs.anthropic.com/claude/docs/skills-api)

---

## 📋 Skills 목록 (알파벳 순)

1. algorithmic-art
2. beautiful_prose
3. brainstorming
4. brand-guidelines
5. canvas-design
6. changelog-generator
7. connect
8. content-research-writer
9. developer-growth-analysis
10. doc-coauthoring
11. document-skills (docx, pdf, pptx, xlsx)
12. domain-name-brainstormer
13. file-organizer
14. frontend-design
15. git-pushing
16. image-enhancer
17. internal-comms
18. invoice-organizer
19. kaizen
20. lead-research-assistant
21. mcp-builder
22. meeting-insights-analyzer
23. react-best-practices
24. review-implementing
25. skill-creator
26. supabase-postgres-best-practices
27. tailored-resume-generator
28. tapestry
29. test-fixing
30. theme-factory
31. ui-ux-pro-max
32. video-downloader
33. web-artifacts-builder
34. webapp-testing

---

**참고**: 이 문서는 현재 로컬 폴더에 실제로 존재하는 skills만을 기준으로 작성되었습니다.

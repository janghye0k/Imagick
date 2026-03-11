# Cursor Agents 전체 개요

이 문서는 `.cursor/agents`에 있는 Cursor 전용 에이전트(Agent)들을 설명합니다.  
에이전트는 특정 유형의 요청이 들어왔을 때 자동으로 선택되어 실행되는 전문 서브에이전트입니다.

## 📊 통계

- **에이전트 수**: 7개
- **카테고리별 분류**: 4개 카테고리

---

## 🔧 Development & Code (개발 및 코드 품질)

### code-refactorer

- **설명**: 코드 리팩토링 기회를 자동으로 감지합니다. 중복 블록, 불명확한 네이밍, 깊은 중첩, 과도하게 긴 함수, 낮은 모듈화, 비효율적인 패턴 등을 분석합니다.
- **활성화 시점**: 소스 파일 정적 분석 시, 또는 사용자가 코드 품질 평가/코드 리뷰를 요청할 때
- **역할**: 시니어 소프트웨어 개발자. 동작은 그대로 유지하면서 구조·가독성·유지보수성만 개선
- **주요 원칙**: 기능 변경 금지, 점진적 개선, 프로젝트 컨벤션 유지, 구체적인 코드 예시와 함께 제안
- **산출물**: 리팩토링 제안(문제 지점, 이유, 개선된 코드)

### security-auditor

- **설명**: 엔터프라이즈급 보안 엔지니어. 코드베이스 전반을 검토하여 취약점을 찾고, 수정 가능한 보안 보고서를 작성합니다.
- **활성화 시점**: 보안 감사, 취약점 점검, 보안 리뷰 요청 시
- **검토 영역**: 인증/인가, 입력 검증·새니타이징, 데이터 처리·저장, API 보호, 의존성, 설정·환경변수, 에러 처리·로깅, 세션, 암호화·해싱
- **취약점 카테고리**: Authentication & Authorization, Input Validation, Data Protection, API Security, Infrastructure 등
- **산출물**: `security-report.md` (요약, 심각도별 취약점, 코드 스니펫, 수정 체크리스트, 표준·베스트 프랙티스 참조)

---

## 📋 Product & Planning (제품 및 계획)

### prd-writer

- **설명**: 시니어 PM. 제품/기능에 대한 제품 요구사항 문서(PRD)를 작성합니다.
- **활성화 시점**: PRD 작성, 제품 요구사항 정리 요청 시
- **역할**: 개발 팀이 요구사항만으로 전체 앱을 구축할 수 있도록 상세 PRD 작성
- **문서 구조**: Product overview, Goals, User personas, Functional requirements, UX, Narrative, Success metrics, Technical considerations, Milestones & sequencing, User stories(ID·설명·수락 기준)
- **산출물**: `prd.md` (Markdown). 태스크 생성·실행은 하지 않음

### project-task-planner

- **설명**: PRD를 바탕으로 프로젝트/기능 개발 태스크 리스트, 체크리스트, 기술 분해, 단계별 구현 계획을 생성합니다.
- **활성화 시점**: 프로젝트 계획, 개발 로드맵, 태스크 정리 요청 시
- **전제 조건**: PRD 필요. PRD 없으면 PRD 제공을 요청
- **주요 단계**: Project Setup → Backend Foundation → Feature-specific Backend → Frontend Foundation → Feature-specific Frontend → Integration → Testing
- **산출물**: `plan.md` (Markdown). 각 기능에 백엔드·프론트엔드 태스크 모두 포함. 태스크 실행은 하지 않음

---

## 🎨 Design & Frontend (디자인 및 프론트엔드)

### frontend-designer

- **설명**: 프론트엔드 UI/UX 및 디자인 시스템 전문가. 디자인 콘셉트를 프로덕션 수준의 컴포넌트 구조와 디자인 시스템으로 변환합니다.
- **활성화 시점**: UI/UX 요청, 디자인 시스템 구축, 컴포넌트 분해, 픽셀 퍼펙트 가이드, Figma→코드 변환, 접근성 리뷰, UI 스펙 작성 요청 시
- **프로세스**: 프레임워크·스택 파악 → 디자인 에셋 수집 → 시각 분해(atomic design, 색·타이포·간격·컴포넌트 계층) → Design Schema(JSON) 생성 → 구현 가이드 문서 작성
- **산출물**: Frontend Design Document (디자인 스키마, 컴포넌트 명세, 레이아웃·패턴, 구현 가이드)

### vibe-coding-coach

- **설명**: “바이브 코딩” 코치. 사용자의 비전·분위기·느낌을 이해하고, 기술 사양 대신 시각·경험 중심으로 앱을 함께 만듭니다.
- **활성화 시점**: 앱 설계·구상, 비주얼/목업을 코드로 옮기기, 비기술적 코딩 가이드, 분위기·무드·룩앤필 설명 시
- **접근**: 스크린샷·스케치·참고 링크 수집 → 원하는 느낌·대상 사용자·기능 탐색 → 프로토타입 제작 → 피드백 반영 → 보안·접근성·성능은 유지하면서 기술 복잡도는 사용자에게 숨김
- **원칙**: 사용자 비전 충족도를 성공 기준으로, 기술 용어 최소화, 단계마다 진행감 부여

---

## 📝 Content (콘텐츠)

### content-writer

- **설명**: 시니어 콘텐츠 마케터·다이렉트 리스폰스 카피라이터. 복잡한 주제를 비전문가에게 쉽게 설명하고, 훅이 있는 스토리로 작성합니다.
- **활성화 시점**: 콘텐츠·카피 작성, 아티클/블로그/웹 콘텐츠, 개요·초안·섹션 업데이트, 복잡한 주제를 일반 독자를 위해 정리·요약할 때
- **모드**: OUTLINE MODE(최대 5개 H2, 섹션별 설명, `.content/{slug}.md` 등) / WRITE MODE(섹션별 300단어 내외, 사실 검증, 흐름 유지)
- **스타일**: Flesch-Kincaid 8학년 수준, 문장 길이 변화, AI 틱 방지, 금지어·금지 구문 사용 안 함, 웹 검색·MCP로 검증
- **산출물**: 개요/본문 Markdown, 표·불릿 활용, 패키지명 등 사실 확인 후 기재

---

## 📋 에이전트 목록 (알파벳 순)

1. code-refactorer
2. content-writer
3. frontend-designer
4. prd-writer
5. project-task-planner
6. security-auditor
7. vibe-coding-coach

---

## 🔗 사용 방법

- Cursor에서 에이전트는 **자동 라우팅**으로 호출됩니다. 사용자 메시지가 특정 유형(리팩토링, PRD 작성, 보안 감사 등)에 해당하면 해당 에이전트가 선택됩니다.
- `mcp_task` 등으로 서브에이전트를 직접 호출할 때 `subagent_type`으로 위 이름 중 하나를 지정할 수 있습니다 (예: `code-refactor`, `frontend-designer`).

---

**참고**: 이 문서는 `.cursor/agents`에 실제로 존재하는 에이전트만을 기준으로 작성되었습니다.

export interface Project {
  title: string;
  slug: string;
  description: string;
  period: string;
  techStack: string[];
  role: string;
  summary: string;
  architectureDescription: string;
  troubleshooting: string[];
  performanceImprovement: string[];
  githubLink: string;
  demoLink: string;
}

export const projects: Project[] = [
  {
    title: "AfterLap – F1 데이터 기반 팬 플랫폼",
    slug: "afterlap-f1-fan-platform",
    description:
      "실시간 레이스 데이터와 히스토리컬 텔레메트리를 시각화하여 F1 팬들이 레이스 전략과 드라이버 퍼포먼스를 깊이 있게 이해할 수 있는 웹 플랫폼입니다.",
    period: "2024.03 - 2024.08",
    techStack: [
      "Next.js",
      "TypeScript",
      "React Query",
      "TailwindCSS",
      "Framer Motion",
      "Recharts",
    ],
    role: "Frontend Lead / UI Architecture",
    summary:
      "레이스 타임라인, 섹터별 랩타임 비교, 타이어 전략 뷰 등 복잡한 도메인 데이터를 팬이 이해하기 쉬운 인터랙티브 UI로 설계했습니다.",
    architectureDescription:
      "App Router 기반의 페이지/레이아웃 구조 위에, 레이스/드라이버/팀 도메인을 분리한 모듈형 상태 계층을 설계했습니다. SWR/React Query를 활용해 캐싱 레이어를 두고, 데이터 그리드/그래프 컴포넌트를 완전히 상호 독립적인 프리젠테이션 레벨로 나누어 재사용성을 확보했습니다.",
    troubleshooting: [
      "실시간 데이터 스트림이 일시적으로 지연될 때 UI가 튀는 문제를 스켈레톤/플레이스홀더 전략과 optimistic update로 완화했습니다.",
      "모바일 환경에서 복잡한 그래프가 잘리지 않고 스크롤/핀치 줌과 조화롭게 동작하도록, SVG 기반 차트를 컨테이너 단위로 리스폰시브하게 재구성했습니다.",
    ],
    performanceImprovement: [
      "그래프 영역을 코드 스플리팅과 동적 임포트로 분리해 초기 TTI를 단축했습니다.",
      "레이스 상세 페이지에서 불필요한 재렌더링을 막기 위해 메모이제이션과 가상화된 리스트를 적용했습니다.",
    ],
    githubLink: "https://github.com/example/afterlap",
    demoLink: "https://afterlap.example.com",
  },
  {
    title: "Routie – 루틴 관리 PWA",
    slug: "routie-routine-pwa",
    description:
      "습관 형성과 데일리 루틴을 관리하기 위한 모바일 퍼스트 PWA로, 오프라인 환경에서도 사용할 수 있는 루틴 트래킹 경험을 제공합니다.",
    period: "2023.10 - 2024.01",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "TailwindCSS",
      "IndexedDB",
      "Workbox",
    ],
    role: "Solo Frontend Developer",
    summary:
      "루틴 생성부터 체크인, 통계까지의 플로우를 단일 페이지 내에서 자연스럽게 연결하고, 모바일 홈 화면에 추가했을 때 네이티브 앱에 가까운 경험을 제공하는 데 집중했습니다.",
    architectureDescription:
      "클라이언트 사이드 라우팅과 IndexedDB 기반 로컬 저장소를 결합해, 네트워크 상태와 무관하게 동작하는 상태 동기화 계층을 설계했습니다. 뷰 계층은 루틴 리스트/상세/통계를 각각 독립적인 섹션으로 나누고, 공통 입력/카드/버튼 컴포넌트를 재사용하도록 구성했습니다.",
    troubleshooting: [
      "iOS Safari에서 PWA 설치 후 첫 로딩 시 스플래시 화면이 길게 유지되는 문제를 meta/manifest 설정 튜닝으로 완화했습니다.",
      "다국어 날짜/시간 포맷 처리에서 브라우저별 Intl 지원 범위 차이로 인한 버그를 폴리필과 유닛 테스트로 해결했습니다.",
    ],
    performanceImprovement: [
      "루틴 통계 차트를 Intersection Observer 기반의 지연 렌더링으로 전환해 초기 렌더링 비용을 줄였습니다.",
      "서비스 워커 캐시 전략을 조정해 route-level 캐싱과 static asset 캐시 갱신 간의 균형을 맞추었습니다.",
    ],
    githubLink: "https://github.com/example/routie",
    demoLink: "https://routie.example.com",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}


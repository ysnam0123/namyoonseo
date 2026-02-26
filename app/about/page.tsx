import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About | Nam Yoonseo",
  description:
    "프론트엔드 개발자 남윤서 소개 – 사용자 경험과 구조적인 설계를 함께 바라보는 프론트엔드 개발자입니다.",
};

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About" title="사용자 경험과 구조를 함께 보는 개발자">
        <div className="space-y-4">
          <p>
            인터랙션과 마이크로 카피, 레이아웃 같은 UI 레벨과, 상태 관리와
            데이터 흐름 같은 아키텍처 레벨을 함께 고민하는 프론트엔드
            개발자입니다. 제품의 모호한 요구사항을 구조화하고, 팀이 유지보수하기
            쉬운 형태로 옮기는 역할에 관심이 많습니다.
          </p>
          <p>
            디자인 시스템을 코드로 옮기고, 공통 컴포넌트와 도메인별 뷰를
            분리해두면 제품이 커져도 일관성을 유지할 수 있다고 믿습니다.
            성능·접근성·반응형 레이아웃은 초기에 설계 단계에서 함께 고려하는
            편입니다.
          </p>
        </div>
      </Section>

      <Section eyebrow="Focus" title="제가 특히 신경 쓰는 것들">
        <ul className="space-y-3 text-sm sm:text-base text-neutral-700">
          <li>
            <span className="font-semibold text-neutral-900">
              정보 구조화와 상태 모델링
            </span>
            <span className="block text-neutral-700">
              요구사항을 화면 단위가 아니라 도메인/유즈케이스 단위로 쪼개고,
              이를 기반으로 컴포넌트와 상태 구조를 설계합니다.
            </span>
          </li>
          <li>
            <span className="font-semibold text-neutral-900">
              예측 가능한 UI와 피드백
            </span>
            <span className="block text-neutral-700">
              로딩/에러/빈 상태 등 각 상황에 맞는 피드백을 정의하고, 사용자가
              지금 무슨 일이 일어나는지 추측하지 않아도 되도록 설계합니다.
            </span>
          </li>
          <li>
            <span className="font-semibold text-neutral-900">
              협업 가능한 코드베이스
            </span>
            <span className="block text-neutral-700">
              공통 UI, 도메인별 뷰, 훅, 유틸리티를 명확히 나누고, 컨벤션을
              문서화해 팀이 같은 방향으로 움직일 수 있도록 돕습니다.
            </span>
          </li>
        </ul>
      </Section>
    </>
  );
}


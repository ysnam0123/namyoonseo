import type { Metadata } from 'next';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Contact | Nam Yoonseo',
  description:
    '프론트엔드 개발자 남윤서에게 협업·채용·프로젝트 제안을 남겨주세요.',
};

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="함께 일하고 싶으시다면">
      <div className="space-y-6">
        <span>
          <p>
            채용 제안, 사이드 프로젝트, 프리랜서 협업 등 언제든 편하게 연락
            주세요.
          </p>
          <p>제품의 방향성과 팀의 상황에 대해 대화 나누는 것을 좋아합니다.</p>
        </span>
        <div className="space-y-2 text-sm text-neutral-700">
          <p>
            <span className="font-medium text-neutral-900">Email</span>
            <span className="ml-2">your.email@example.com</span>
          </p>
          <p>
            <span className="font-medium text-neutral-900">GitHub</span>
            <a
              href="https://github.com/ysnam0123"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-indigo-600 hover:underline"
            >
              https://github.com/ysnam0123
            </a>
          </p>
          <p>
            <span className="font-medium text-neutral-900">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/%EC%9C%A4%EC%84%9C-%EB%82%A8-55159a2b1/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-indigo-600 hover:underline"
            >
              https://www.linkedin.com/in/%EC%9C%A4%EC%84%9C-%EB%82%A8-55159a2b1/
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}

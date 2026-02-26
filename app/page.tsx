import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Home | Nam Yoonseo',
  description:
    '프론트엔드 개발자 남윤서의 포트폴리오 홈 – 사용자 경험 중심의 인터페이스와 안정적인 프론트엔드 아키텍처를 설계합니다.',
};

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Frontend Developer
              </p>
              <h1 className="max-w-2xl text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
                인터랙션과 구조에 강한
                <br />
                프론트엔드 개발자 남윤서입니다.
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-neutral-700 leading-relaxed">
                데이터와 상태를 어떻게 모델링하느냐가 UI 경험을 결정한다고
                생각합니다. 사용자 여정에 맞는 컴포넌트 구조와, 예측 가능한
                프런트엔드 아키텍처를 만드는 데 관심이 많습니다.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center rounded-full bg-[#4f39f6] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  프로젝트 보러가기
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:border-neutral-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            <Image
              src="/me.png"
              alt="Nam Yoonseo portrait"
              className="object-cover"
              width={260}
              height={360}
              priority
            />
          </div>
        </Container>
      </section>

      <Section
        id="featured-projects"
        eyebrow="Selected Work"
        title="대표 프로젝트"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}

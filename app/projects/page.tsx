import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Nam Yoonseo",
  description:
    "프론트엔드 개발자 남윤서의 프로젝트 모음 – 데이터 시각화, PWA, 구조적인 프런트엔드 설계 경험을 담았습니다.",
};

export default function ProjectsPage() {
  return (
    <Section eyebrow="Projects" title="프로젝트">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}


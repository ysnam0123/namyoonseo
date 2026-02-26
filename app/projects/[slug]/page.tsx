import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { TechBadge } from "@/components/TechBadge";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: ProjectPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | Nam Yoonseo",
    };
  }

  const parentMetadata = await parent;
  const baseTitle =
    typeof parentMetadata.title === "string"
      ? parentMetadata.title
      : parentMetadata.title?.absolute || "Nam Yoonseo Portfolio";

  return {
    title: `${project.title} | Nam Yoonseo`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Nam Yoonseo`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      siteName: baseTitle,
      type: "article",
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section eyebrow="Project" title={project.title}>
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
            {project.period}
          </p>
          <p>{project.summary}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </div>
      </Section>

      <Section title="역할">
        <p>{project.role}</p>
      </Section>

      <Section title="아키텍처 설명">
        <p>{project.architectureDescription}</p>
      </Section>

      <Section title="트러블슈팅">
        <ul className="space-y-2">
          {project.troubleshooting.map((item) => (
            <li key={item} className="list-disc pl-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="성능 개선">
        <ul className="space-y-2">
          {project.performanceImprovement.map((item) => (
            <li key={item} className="list-disc pl-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="기술 스택">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </Section>

      <Section title="링크">
        <div className="flex flex-col gap-2 text-sm text-neutral-700">
          <Link
            href={project.githubLink}
            className="inline-flex items-center gap-1 text-indigo-600 hover:underline"
          >
            <span>GitHub Repository</span>
            <span aria-hidden>↗</span>
          </Link>
          <Link
            href={project.demoLink}
            className="inline-flex items-center gap-1 text-indigo-600 hover:underline"
          >
            <span>Live Demo</span>
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </Section>
    </>
  );
}


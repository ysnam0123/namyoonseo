import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="flex flex-col items-start justify-between gap-4 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
        <p className="font-medium text-neutral-600">
          © {year} Nam Yoonseo. All rights reserved.
        </p>
        <p className="space-x-3">
          <span>Frontend Developer Portfolio</span>
        </p>
      </Container>
    </footer>
  );
}


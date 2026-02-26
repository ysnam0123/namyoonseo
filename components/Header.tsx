'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import Image from 'next/image';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive =
    href === '/'
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        isActive ? 'text-[#4f39f6]' : 'text-neutral-500 hover:text-[#4f39f6]'
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={'/icon.svg'}
            alt="logo"
            width={34}
            height={34}
            className="border border-black/60"
          />
          <span className="text-sm font-semibold tracking-tight text-neutral-900">
            Nam Yoonseo
          </span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
      </Container>
    </header>
  );
}

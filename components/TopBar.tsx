'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS } from './NavigationConfig';

export default function TopBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--md-sys-color-surface)]/80 backdrop-blur-md border-b border-[var(--md-sys-color-outline-variant)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-[var(--md-sys-color-on-surface)] title-large font-bold tracking-tight">
              MichaelBTech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex sm:space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface)]'
                      : 'border-transparent text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] hover:border-[var(--md-sys-color-outline)]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="label-large relative">
                     {item.label}
                     {/* State Layer (Hover) */}
                     <span className="absolute inset-0 rounded-md bg-[var(--md-sys-color-on-surface)] opacity-0 hover:opacity-[var(--color-state-hover)] transition-opacity"></span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button (Placeholder for now) */}
          <div className="sm:hidden flex items-center">
             <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-variant)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--md-sys-color-primary)]">
              <span className="sr-only">Open main menu</span>
              {/* Icon would go here */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

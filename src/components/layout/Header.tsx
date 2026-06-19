"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { mainNav, ctaNav } from "@/data/navigation";
import Container from "./Container";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/img/LOGO_ELU-FORMATION_RVB.png"
                alt="Élu Formation"
                width={220}
                height={60}
                className="h-12 md:h-14 w-auto"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {mainNav.map((item) => {
                const hasChildren = "children" in item && item.children;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren ? setOpenDropdown(item.label) : undefined}
                    onMouseLeave={() => hasChildren ? setOpenDropdown(null) : undefined}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy hover:text-blue transition-colors"
                    >
                      {item.label}
                      {hasChildren && <ChevronDown className="w-3.5 h-3.5" />}
                    </Link>

                    {hasChildren && openDropdown === item.label && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 mt-0">
                        {item.children!.map((child) => {
                          const isFeatured = "featured" in child && child.featured;
                          const isHighlight = "highlight" in child;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                                isFeatured
                                  ? "font-semibold text-red border-t border-gray-100 mt-1 pt-3"
                                  : isHighlight
                                  ? "font-medium text-orange-500 hover:text-orange-600"
                                  : "text-gray-text hover:text-navy"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right side: phone + buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:0176361256"
                className="flex items-center gap-2 text-sm text-navy hover:text-blue transition-colors px-3 py-2"
              >
                <Phone className="w-4 h-4 text-blue" />
                01 76 36 12 56
              </a>

              <div className="w-px h-5 bg-gray-200" />

              <Link
                href="/contact"
                className="text-sm font-medium text-navy border border-navy rounded-md px-4 py-2 hover:bg-navy hover:text-white transition-colors"
              >
                Être rappelé
              </Link>

              <Link
                href={ctaNav.href}
                className="text-sm font-medium text-white bg-red rounded-md px-4 py-2 hover:bg-red-hover transition-colors flex items-center gap-2"
              >
                {ctaNav.label}
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href={ctaNav.href}
                className="text-xs font-medium text-white bg-red rounded-md px-3 py-2 hidden sm:inline-flex"
              >
                {ctaNav.label}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-navy"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

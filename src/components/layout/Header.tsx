"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, GraduationCap, ExternalLink } from "lucide-react";
import { mainNav, ctaNav } from "@/data/navigation";
import { CAMPUS } from "@/lib/campus";
import Container from "./Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* Nav principale */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
  <Image
  src="/img/LOGO_ELU-FORMATION_RVB.png"
  alt="Élu Formation"
  width={220}
  height={60}
  className="h-14 md:h-16 w-auto"
  priority
  unoptimized
/>

</Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-text hover:text-navy transition-colors"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 mt-0">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm hover:bg-gray-light transition-colors ${
                            "featured" in child && child.featured
                              ? "font-semibold text-red border-t border-gray-100 mt-1 pt-3"
                              : "text-gray-text hover:text-navy"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                href={ctaNav.href}
                variant="primary"
                size="sm"
                className="hidden md:inline-flex"
              >
                {ctaNav.label}
              </Button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-navy"
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}


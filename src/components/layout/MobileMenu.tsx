"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { mainNav, ctaNav } from "@/data/navigation";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 top-16 bg-white z-40 overflow-y-auto lg:hidden">
      <nav className="px-4 py-6 space-y-2">
        {mainNav.map((item) => (
          <div key={item.label}>
            <button
              onClick={() =>
                setExpanded(expanded === item.label ? null : item.label)
              }
              className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-navy"
            >
              {item.label}
              {item.children && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    expanded === item.label ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {item.children && expanded === item.label && (
              <div className="pl-6 space-y-1 pb-2">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="block px-3 py-2 text-sm text-gray-text hover:text-navy"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="pt-4 px-3">
          <Button href={ctaNav.href} variant="primary" size="lg" className="w-full">
            {ctaNav.label}
          </Button>
        </div>
      </nav>
    </div>
  );
}


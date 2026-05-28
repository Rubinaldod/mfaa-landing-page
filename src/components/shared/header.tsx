"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/galeria", label: "Galeria" },
    { path: "/agendar-visita", label: "Agendar Visita" },
  ];

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "#0a0a0a",
        borderBottom: "1px solid rgba(212,175,55,0.25)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 group"
            style={{ textDecoration: "none" }}
          >
            {/* Shield emblem */}
            <div
              className="flex-shrink-0"
              style={{
                width: 38,
                height: 44,
              }}
            >
              <svg viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                <path
                  d="M19 1L2 8V22C2 31.4 9.6 40.2 19 43C28.4 40.2 36 31.4 36 22V8L19 1Z"
                  fill="#8B0000"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
                <path
                  d="M19 7L7 12V22C7 28.8 12.4 35.2 19 37.5C25.6 35.2 31 28.8 31 22V12L19 7Z"
                  fill="#6B0000"
                  stroke="#D4AF37"
                  strokeWidth="0.75"
                  strokeDasharray="2 1"
                />
                <text
                  x="19"
                  y="26"
                  textAnchor="middle"
                  fill="#D4AF37"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="serif"
                  letterSpacing="0.5"
                >
                  FA
                </text>
              </svg>
            </div>

            <div>
              <div
                className="font-ui font-700 leading-none"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  color: "#D4AF37",
                  textTransform: "uppercase",
                  marginBottom: 3,
                }}
              >
                República de Angola
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#F2EDE4",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                Museu das Forças Armadas
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                style={{
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: pathname === item.path ? "#D4AF37" : "#A09080",
                  borderBottom:
                    pathname === item.path
                      ? "1px solid #D4AF37"
                      : "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== item.path) {
                    e.currentTarget.style.color = "#F2EDE4";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.path) {
                    e.currentTarget.style.color = "#A09080";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/agendar-visita"
              style={{
                fontFamily: "var(--font-family-ui)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                backgroundColor: "#D4AF37",
                color: "#0C0C0C",
                padding: "8px 20px",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#B8962E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D4AF37";
              }}
            >
              Visitar
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            style={{ color: "#D4AF37" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X style={{ width: 22, height: 22 }} />
            ) : (
              <Menu style={{ width: 22, height: 22 }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            style={{
              borderTop: "1px solid rgba(212,175,55,0.2)",
              paddingBottom: "1.5rem",
              paddingTop: "0.5rem",
            }}
            className="md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                style={{
                  display: "block",
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: pathname === item.path ? "#D4AF37" : "#A09080",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(212,175,55,0.08)",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

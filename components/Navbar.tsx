"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, ChevronDown } from "lucide-react";

export default function Navbar() {
  return null;
}

const styles: { [k: string]: React.CSSProperties } = {
  navbar: {
    height: 48,
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    background: "white",
    borderBottom: "1px solid rgba(15, 23, 42, 0.06)",
    position: "fixed",
    top: 64,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  switchOrg: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 6,
    border: "1px solid #e5e7eb",
    background: "#f9fafb",
    cursor: "pointer",
    fontSize: 14,
  },
};
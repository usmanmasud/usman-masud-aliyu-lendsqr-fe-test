"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.scss";
import {
  Users,
  UserCheck,
  Wallet,
  GitBranch,
  PiggyBank,
  FileText,
  ShieldCheck,
  BadgeCheck,
  Briefcase,
  Package,
  CreditCard,
  Repeat,
  Settings,
  ClipboardList,
  Home,
  ChevronDown,
} from "lucide-react";

const menu = [
  {
    title: "CUSTOMERS",
    items: [
      { label: "Users", href: "/users", icon: Users },
      { label: "Guarantors", href: "/guarantors", icon: UserCheck },
      { label: "Loans", href: "/loans", icon: Wallet },
      { label: "Decision Models", href: "/decision-models", icon: GitBranch },
      { label: "Savings", href: "/savings", icon: PiggyBank },
      { label: "Loan Requests", href: "/loan-requests", icon: FileText },
      { label: "Whitelist", href: "/whitelist", icon: BadgeCheck },
      { label: "Karma", href: "/karma", icon: ShieldCheck },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { label: "Organization", href: "/organization", icon: Briefcase },
      { label: "Loan Products", href: "/loan-products", icon: Package },
      {
        label: "Savings Products",
        href: "/savings-products",
        icon: CreditCard,
      },
      { label: "Transactions", href: "/transactions", icon: Repeat },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { label: "Preferences", href: "/preferences", icon: Settings },
      { label: "Audit Logs", href: "/audit-logs", icon: ClipboardList },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      {/* Switch Organization */}
      <div className={styles.switchOrg}>
        <Briefcase size={16} />
        <span>Switch Organization</span>
        <ChevronDown size={14} className={styles.caret} />
      </div>

      {/* Dashboard */}
      <Link href="/dashboard" className={styles.link}>
        <Home size={16} />
        <span>Dashboard</span>
      </Link>

      {/* Menu */}
      <nav>
        {menu.map((section) => (
          <div key={section.title}>
            <p className={styles.section}>{section.title}</p>

            {section.items.map(({ icon: Icon, href, label }) => {
              const active = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.link} ${active ? styles.active : ""}`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}

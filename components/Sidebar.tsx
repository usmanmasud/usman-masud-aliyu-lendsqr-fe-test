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
  X,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const menu = [
  {
    title: "CUSTOMERS",
    items: [
      { label: "Users", href: "/dashboard/users", icon: Users },
      { label: "Guarantors", href: "", icon: UserCheck },
      { label: "Loans", href: "", icon: Wallet },
      { label: "Decision Models", href: "", icon: GitBranch },
      { label: "Savings", href: "", icon: PiggyBank },
      { label: "Loan Requests", href: "", icon: FileText },
      { label: "Whitelist", href: "", icon: BadgeCheck },
      { label: "Karma", href: "", icon: ShieldCheck },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { label: "Organization", href: "", icon: Briefcase },
      { label: "Loan Products", href: "", icon: Package },
      {
        label: "Savings Products",
        href: "",
        icon: CreditCard,
      },
      { label: "Transactions", href: "", icon: Repeat },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { label: "Preferences", href: "", icon: Settings },
      { label: "Audit Logs", href: "", icon: ClipboardList },
    ],
  },
];

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.mobileHeader}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Switch Organization */}
      <div className={styles.switchOrg}>
        <Briefcase size={16} />
        <span>Switch Organization</span>
        <ChevronDown size={14} className={styles.caret} />
      </div>

      {/* Dashboard */}
      <Link href="" className={styles.link}>
        <Home size={16} />
        <span>Dashboard</span>
      </Link>

      {/* Menu */}
      <nav>
        {menu.map((section) => (
          <div key={section.title}>
            <p className={styles.section}>{section.title}</p>

            {section.items.map(({ icon: Icon, href, label }, index) => {
              const active = pathname === href;

              return (
                <Link
                  key={`${section.title}-${index}`}
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

      {/* Logout */}
      <Link href="/login" className={styles.link}>
        <LogOut size={16} />
        <span>Logout</span>
      </Link>
    </aside>
  );
}

"use client";

import { Bell, Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header style={styles.header}>
      {/* Left */}
      <div style={styles.left}>
        <div style={styles.logo}>
          <Image src="/Union.png" alt="Lendsqr" width={24} height={24} />
          <span>lendsqr</span>
        </div>
      </div>

      {/* Center */}
      {isMobile ? (
        showSearch ? (
          <div style={styles.mobileSearchWrapper}>
            <input
              placeholder="Search for anything"
              style={styles.searchInput}
            />
            <button
              style={styles.searchBtn}
              onClick={() => setShowSearch(false)}
            >
              <Search size={18} color="#fff" />
            </button>
          </div>
        ) : (
          <button
            style={styles.mobileSearchBtn}
            onClick={() => setShowSearch(true)}
          >
            <Search size={18} color="#213F7D" />
          </button>
        )
      ) : (
        <div style={styles.searchWrapper}>
          <input placeholder="Search for anything" style={styles.searchInput} />
          <button style={styles.searchBtn}>
            <Search size={18} color="#fff" />
          </button>
        </div>
      )}

      {/* Right */}
      <div style={styles.right}>
        {!isMobile && (
          <a href="#" style={styles.docs}>
            Docs
          </a>
        )}
        <button style={styles.iconBtn}>
          <Bell color="#213F7D" size={18} />
        </button>

        <div style={styles.profile}>
          <Image
            src="/avatar.png"
            alt="user"
            width={isMobile ? 32 : 36}
            height={isMobile ? 32 : 36}
            style={styles.avatar}
          />
          {!isMobile && <span style={styles.username}>Adedeji</span>}
          {!isMobile && <ChevronDown size={14} color="#213F7D" />}
        </div>
      </div>
    </header>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  header: {
    height: 90,
    display: "flex",
    alignItems: "center",
    padding: "0 clamp(16px, 4vw, 40px)",
    background: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    justifyContent: "space-between",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.02)",
  },

  left: {
    display: "flex",
    alignItems: "center",
    flex: "0 0 auto",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(4px, 1vw, 8px)",
    fontSize: "clamp(18px, 2.5vw, 22px)",
    fontWeight: 700,
    color: "#213F7D",
  },

  logoIcon: {
    background: "#213F7D",
    color: "#fff",
    padding: "4px 6px",
    borderRadius: 4,
    fontSize: 12,
    textTransform: "uppercase",
  },

  searchWrapper: {
    flex: "1 1 auto",
    maxWidth: "400px",
    display: "flex",
    alignItems: "center",
    margin: "0 clamp(8px, 2vw, 20px)",
  },

  searchInput: {
    flex: 1,
    height: "clamp(36px, 4vw, 40px)",
    padding: "0 clamp(8px, 1.5vw, 14px)",
    border: "1px solid #D1D5DB",
    borderRight: "none",
    borderRadius: "8px 0 0 8px",
    outline: "none",
    fontSize: "clamp(12px, 1.5vw, 14px)",
    background: "transparent",
    color: "#545F7D",
  },

  searchBtn: {
    height: "clamp(36px, 4vw, 40px)",
    width: "clamp(40px, 5vw, 50px)",
    background: "#39CDCC",
    border: "none",
    borderRadius: "0 8px 8px 0",
    cursor: "pointer",
    fontSize: "clamp(14px, 1.8vw, 16px)",
    color: "#fff",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(8px, 2vw, 20px)",
    flex: "0 0 auto",
    minWidth: "fit-content",
  },

  docs: {
    fontSize: "clamp(12px, 1.5vw, 14px)",
    color: "#213F7D",
    textDecoration: "underline",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },

  iconBtn: {
    background: "transparent",
    border: "none",
    fontSize: 20,
    cursor: "pointer",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(4px, 1vw, 8px)",
    cursor: "pointer",
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    objectFit: "cover",
  },

  username: {
    fontSize: "clamp(12px, 1.5vw, 14px)",
    fontWeight: 500,
    color: "#213F7D",
    whiteSpace: "nowrap",
  },

  caret: {
    fontSize: 12,
    color: "#213F7D",
  },

  mobileSearchBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 8,
  },

  mobileSearchWrapper: {
    position: "absolute",
    top: "100%",
    left: 16,
    right: 16,
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    padding: 16,
    display: "flex",
    alignItems: "center",
    zIndex: 1001,
  },
};

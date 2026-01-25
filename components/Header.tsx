import { Bell, Search, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
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
      <div style={styles.searchWrapper}>
        <input placeholder="Search for anything" style={styles.searchInput} />
        <button style={styles.searchBtn}>
          <Search size={18} color="#fff" />
        </button>
      </div>

      {/* Right */}
      <div style={styles.right}>
        <a href="#" style={styles.docs}>
          Docs
        </a>
        <button style={styles.iconBtn}>
          <Bell color="#213F7D" size={18} />
        </button>

        <div style={styles.profile}>
          <Image
            src="/avatar.png"
            alt="user"
            width={36}
            height={36}
            style={styles.avatar}
          />
          <span style={styles.username}>Adedeji</span>
          <ChevronDown size={14} color="#213F7D" />
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
    padding: "0 40px",
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
    marginRight: 60,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 22,
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
    flex: 1,
    maxWidth: 400,
    display: "flex",
    alignItems: "center",
  },

  searchInput: {
    flex: 1,
    height: 40,
    padding: "0 14px",
    border: "1px solid #D1D5DB",
    borderRight: "none",
    borderRadius: "8px 0 0 8px",
    outline: "none",
    fontSize: 14,
    background: "transparent",
    color: "#545F7D",
  },

  searchBtn: {
    height: 40,
    width: 50,
    background: "#39CDCC",
    border: "none",
    borderRadius: "0 8px 8px 0",
    cursor: "pointer",
    fontSize: 16,
    color: "#fff",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: 34,
    marginLeft: "30%",
  },

  docs: {
    fontSize: 14,
    color: "#213F7D",
    textDecoration: "underline",
    fontWeight: 500,
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
    gap: 8,
    cursor: "pointer",
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    objectFit: "cover",
  },

  username: {
    fontSize: 14,
    fontWeight: 500,
    color: "#213F7D",
  },

  caret: {
    fontSize: 12,
    color: "#213F7D",
  },
};

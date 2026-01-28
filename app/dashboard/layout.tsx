import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard layout",
};

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <html lang="en">
      <body style={styles.app}>
        <Header />
        <Sidebar />
        <main style={styles.content}>{children}</main>
      </body>
    </html>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  app: {
    fontFamily:
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#111827",
    background: "#FBFBFB",
    minHeight: "100vh",
  },
  content: {
    marginTop: 90,
    marginLeft: 283,
    padding: 20,
    minHeight: "calc(100vh - 90px)",
  },
};

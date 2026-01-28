"use client";

import { useRouter } from "next/navigation";
import { getStorage } from "@/hooks/useLocalStorage";
import { User } from "@/types/user";
import "./details.scss";

export default function UserDetailsPage() {
  const router = useRouter();
  const user = getStorage<User>("selectedUser");

  if (!user) return <p className="not-found">User not found</p>;

  return (
    <div className="details-page">
      {/* Back */}
      <button className="back-btn" onClick={() => router.back()}>
        ← Back to Users
      </button>

      {/* Header */}
      <div className="page-header">
        <h2>User Details</h2>

        <div className="actions">
          <button className="btn danger">BLACKLIST USER</button>
          <button className="btn primary">ACTIVATE USER</button>
        </div>
      </div>

      {/* Summary Card */}
      <div className="card summary">
        <div className="summary-left">
          <div className="avatar">
            <span>{user.username?.charAt(0) ?? "U"}</span>
          </div>

          <div>
            <h3>{user.username ?? "Grace Effiom"}</h3>
            <p className="muted">LSQF587g90</p>
          </div>
        </div>

        <div className="summary-divider" />

        <div className="tier">
          <p>User’s Tier</p>
          <div className="stars">⭐ ⭐ ⭐</div>
        </div>

        <div className="summary-divider" />

        <div className="balance">
          <h3>₦200,000.00</h3>
          <p>9912345678 / Providus Bank</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <span className="active">General Details</span>
        <span>Documents</span>
        <span>Bank Details</span>
        <span>Loans</span>
        <span>Savings</span>
        <span>App and System</span>
      </div>

      {/* Details Card */}
      <div className="card">
        {/* Personal Info */}
        <Section title="Personal Information">
          <Info label="Full Name" value="Grace Effiom" />
          <Info
            label="Phone Number"
            value={user.phoneNumber ?? "07068079222"}
          />
          <Info label="Email Address" value={user.email} />
          <Info label="BVN" value="07068079222" />
          <Info label="Gender" value="Female" />
          <Info label="Marital Status" value="Single" />
          <Info label="Children" value="None" />
          <Info label="Type of Residence" value="Parent’s Apartment" />
        </Section>

        {/* Education */}
        <Section title="Education and Employment">
          <Info label="Level of Education" value="B.Sc" />
          <Info label="Employment Status" value="Employed" />
          <Info label="Sector of Employment" value="FinTech" />
          <Info label="Duration of Employment" value="2 years" />
          <Info label="Office Email" value="grace@lendsqr.com" />
          <Info label="Monthly Income" value="₦200,000.00 - ₦400,000.00" />
          <Info label="Loan Repayment" value="₦40,000" />
        </Section>

        {/* Socials */}
        <Section title="Socials">
          <Info label="Twitter" value="@grace_effiom" />
          <Info label="Facebook" value="Grace Effiom" />
          <Info label="Instagram" value="@grace_effiom" />
        </Section>

        {/* Guarantor */}
        <Section title="Guarantor">
          <Info label="Full Name" value="Debby Ogana" />
          <Info label="Phone Number" value="07068079222" />
          <Info label="Email Address" value="debby@gmail.com" />
          <Info label="Relationship" value="Sister" />
        </Section>
      </div>
    </div>
  );
}

/* Small reusable components */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section">
      <h4>{title}</h4>
      <div className="grid">{children}</div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="info">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}

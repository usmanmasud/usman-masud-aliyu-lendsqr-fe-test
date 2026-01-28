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
            <h3>{user.fullName}</h3>
            <p className="muted">LSQF587g90</p>
          </div>
        </div>

        <div className="summary-divider" />

        <div className="tier">
          <p>User&apos;s Tier</p>
          <div className="stars">
            {Array.from({ length: user.tier }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>

        <div className="summary-divider" />

        <div className="balance">
          <h3>₦{user.accountBalance.toLocaleString()}.00</h3>
          <p>
            {user.accountNumber} / {user.bankName}
          </p>
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
          <Info label="Full Name" value={user.fullName} />
          <Info label="Phone Number" value={user.phoneNumber} />
          <Info label="Email Address" value={user.email} />
          <Info label="BVN" value={user.bvn} />
          <Info label="Gender" value={user.gender} />
          <Info label="Marital Status" value={user.maritalStatus} />
          <Info label="Children" value={user.children} />
          <Info label="Type of Residence" value={user.typeOfResidence} />
        </Section>

        {/* Education */}
        <Section title="Education and Employment">
          <Info label="Level of Education" value={user.levelOfEducation} />
          <Info label="Employment Status" value={user.employmentStatus} />
          <Info label="Sector of Employment" value={user.sectorOfEmployment} />
          <Info
            label="Duration of Employment"
            value={user.durationOfEmployment}
          />
          <Info label="Office Email" value={user.officeEmail} />
          <Info label="Monthly Income" value={user.monthlyIncome} />
          <Info label="Loan Repayment" value={user.loanRepayment} />
        </Section>

        {/* Socials */}
        <Section title="Socials">
          <Info label="Twitter" value={user.twitter} />
          <Info label="Facebook" value={user.facebook} />
          <Info label="Instagram" value={user.instagram} />
        </Section>

        {/* Guarantor */}
        <Section title="Guarantor">
          <Info label="Full Name" value={user.guarantor.fullName} />
          <Info label="Phone Number" value={user.guarantor.phoneNumber} />
          <Info label="Email Address" value={user.guarantor.email} />
          <Info label="Relationship" value={user.guarantor.relationship} />
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

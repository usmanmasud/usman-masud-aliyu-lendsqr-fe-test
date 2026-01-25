"use client";

import "./stats-card.scss";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="icon">{icon}</div>

      <p className="title">{title}</p>
      <h3 className="value">{value}</h3>
    </div>
  );
}

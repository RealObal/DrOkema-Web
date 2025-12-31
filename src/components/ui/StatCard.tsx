import React from "react";

interface StatCardProps {
  number: React.ReactNode;
  label: string;
}

export function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

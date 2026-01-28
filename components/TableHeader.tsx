import { ListFilter } from "lucide-react";

interface TableHeaderProps {
  title: string;
}

export default function TableHeader({ title }: TableHeaderProps) {
  return (
    <span className="th-content">
      {title}
      <ListFilter size={16} />
    </span>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { MoreVertical, Eye, UserX, UserCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { setStorage } from "@/hooks/useLocalStorage";
import { User } from "@/types/user";
import "./actions.scss";

interface UserActionsProps {
  user: User;
  isOpen: boolean;
  onToggle: (userId: string) => void;
}

export default function UserActions({ user, isOpen, onToggle }: UserActionsProps) {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onToggle("");
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const view = () => {
    setStorage("selectedUser", user);
    router.push(`/dashboard/users/${user.id}`);
  };

  return (
    <div className="action-wrapper" onClick={(e) => e.stopPropagation()}>
      <MoreVertical size={16} onClick={() => onToggle(user.id)} />

      {isOpen && (
        <div className="action-menu" ref={menuRef}>
          <div onClick={view}>
            <Eye size={16} />
            View Details
          </div>

          <div>
            <UserX size={16} />
            Blacklist User
          </div>

          <div>
            <UserCheck size={16} />
            Activate User
          </div>
        </div>
      )}
    </div>
  );
}

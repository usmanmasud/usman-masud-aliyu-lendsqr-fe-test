"use client";

import { useEffect, useState } from "react";
import { fetchUsers } from "@/services/users.service";
import { User } from "@/types/user";
import { setStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import "./users.scss";
import StatsCard from "@/components/StatsCard";
import TableHeader from "@/components/TableHeader";
import { Coins, Users, Wallet2, MoreVertical } from "lucide-react";

const PAGE_SIZE = 10;

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const start = (page - 1) * PAGE_SIZE;
  const paginated = users.slice(start, start + PAGE_SIZE);

  const viewUser = (user: User) => {
    setStorage("selectedUser", user);
    router.push(`/dashboard/users/${user.id}`);
  };

  const activeUsers = users.filter((u) => u.status === "Active").length;
  const usersWithLoans = users.filter((u) => u.hasLoan).length;
  const usersWithSavings = users.filter((u) => u.hasSavings).length;

  return (
    <div className="users-page">
      <h3 className="user-text">Users</h3>
      <div className="stats-grid">
        <StatsCard
          title="Users"
          value={users.length}
          icon={<Users color="#DF18FF" />}
        />
        <StatsCard
          title="Active Users"
          value={activeUsers}
          icon={<Users color="#5718FF" />}
        />
        <StatsCard
          title="Users with Loans"
          value={usersWithLoans}
          icon={<Wallet2 color="#F55F44" />}
        />
        <StatsCard
          title="Users with Savings"
          value={usersWithSavings}
          icon={<Coins color="#FF3366" />}
        />
      </div>

      {/* ===== TABLE ===== */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>
                <TableHeader title="Organization" />
              </th>
              <th>
                <TableHeader title="Username" />
              </th>
              <th>
                <TableHeader title="Email" />
              </th>
              <th>
                <TableHeader title="Phone" />
              </th>
              <th>
                <TableHeader title="Date Joined" />
              </th>
              <th>
                <TableHeader title="Status" />
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((user) => (
              <tr key={user.id} onClick={() => viewUser(user)}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <MoreVertical size={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-wrapper">
        <div className="pagination-left">
          Showing
          <select>
            <option>100</option>
            <option>50</option>
            <option>20</option>
          </select>
          out of {users.length}
        </div>

        <div className="pagination-right">
          <button
            className="nav"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            ‹
          </button>

          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className={`page ${page === p ? "active" : ""}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}

          <span className="dots">…</span>

          <button className="page">15</button>
          <button className="page">16</button>

          <button
            className="nav"
            disabled={start + PAGE_SIZE >= users.length}
            onClick={() => setPage(page + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

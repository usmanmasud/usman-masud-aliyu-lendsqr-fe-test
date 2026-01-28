"use client";

import { useState, useEffect, useRef } from "react";
import "./tableHeader.scss";
import { ListFilter, Calendar } from "lucide-react";

interface Filters {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

interface TableHeaderProps {
  title: string;
  onFilter?: (filters: Filters) => void;
  isFilterOpen?: boolean;
  onToggleFilter?: () => void;
}

export default function TableHeader({ title, onFilter, isFilterOpen, onToggleFilter }: TableHeaderProps) {
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
    status: ""
  });
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        onToggleFilter?.();
      }
    };

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen, onToggleFilter]);

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleFilter = () => {
    onFilter?.(filters);
    onToggleFilter?.();
  };

  const handleReset = () => {
    const resetFilters = {
      organization: "",
      username: "",
      email: "",
      phoneNumber: "",
      dateJoined: "",
      status: ""
    };
    setFilters(resetFilters);
    onFilter?.(resetFilters);
    onToggleFilter?.();
  };

  return (
    <div className="th-content">
      <span>{title}</span>

      <ListFilter size={14} onClick={onToggleFilter} />

      {isFilterOpen && title.toLowerCase() === "organization" && (
        <div className="filter-box" ref={filterRef}>
          <div className="filter-field">
            <label>Organization</label>
            <select 
              value={filters.organization} 
              onChange={(e) => handleFilterChange("organization", e.target.value)}
            >
              <option value="">Select</option>
              <option value="Lendsqr">Lendsqr</option>
              <option value="Irorun">Irorun</option>
              <option value="Lendstar">Lendstar</option>
            </select>
          </div>

          <div className="filter-field">
            <label>Username</label>
            <input 
              placeholder="User" 
              value={filters.username}
              onChange={(e) => handleFilterChange("username", e.target.value)}
            />
          </div>

          <div className="filter-field">
            <label>Email</label>
            <input 
              placeholder="Email" 
              value={filters.email}
              onChange={(e) => handleFilterChange("email", e.target.value)}
            />
          </div>

          <div className="filter-field">
            <label>Phone Number</label>
            <input 
              placeholder="Phone Number" 
              value={filters.phoneNumber}
              onChange={(e) => handleFilterChange("phoneNumber", e.target.value)}
            />
          </div>

          <div className="filter-field">
            <label>Date</label>
            <div className="date-input-wrapper">
              <input 
                type="date"
                value={filters.dateJoined}
                onChange={(e) => handleFilterChange("dateJoined", e.target.value)}
              />
              <Calendar size={16} className="calendar-icon" />
            </div>
          </div>

          <div className="filter-field">
            <label>Status</label>
            <select 
              value={filters.status} 
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Blacklisted">Blacklisted</option>
            </select>
          </div>

          <div className="actions">
            <button className="reset" onClick={handleReset}>Reset</button>
            <button className="filter" onClick={handleFilter}>Filter</button>
          </div>
        </div>
      )}
    </div>
  );
}

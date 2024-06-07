// File: /pages/admin.tsx
"use client";

import DBTable from "@/components/Dashboard/DBTable/DBTable";
import LoadingButton from "@/components/UI/Button/LoadingButton";
import { useGetAllUsersQuery } from "@/redux/api/adminApi";

/* eslint-disable react/no-unescaped-entities */

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone" },
  { header: "Location", accessor: "location" },
  { header: "Role", accessor: "role" },
  { header: "Active Status", accessor: "status" },
  { header: "Blood Type", accessor: "bloodType" },
  {
    header: "Availability",
    accessor: "availability",
    render: (value: boolean) => (value ? "Yes" : "No"),
  },
];

const AdminPage = () => {
  const { data: users, isLoading } = useGetAllUsersQuery({});
  console.log(users);
  return (
    <div className="container mx-auto p-8">
      {isLoading ? (
        <LoadingButton />
      ) : (
        <DBTable columns={columns} data={users} />
      )}
    </div>
  );
};

export default AdminPage;

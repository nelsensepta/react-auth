import React from "react";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col mt-32">
      <h1 className="text-center text-3xl mb-4">Dashboard</h1>
      <div className="w-full">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;

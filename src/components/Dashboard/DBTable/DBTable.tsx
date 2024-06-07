// File: /components/Dashboard/DBTable/DBTable.tsx
import React from "react";

interface Column {
  header: string;
  accessor: string;
  render?: (value: any) => React.ReactNode; // Add this for custom render logic
}

interface TableProps {
  columns: Column[];
  data: any[];
}

const DBTable: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            {columns?.map((column) => (
              <th key={column.accessor}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              {columns.map((column) => (
                <td key={column.accessor}>
                  {column.render
                    ? column.render(row[column.accessor])
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            {columns?.map((column) => (
              <th key={column.accessor}>{column.header}</th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DBTable;

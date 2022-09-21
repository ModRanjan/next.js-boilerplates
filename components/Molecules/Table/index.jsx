import React from 'react';
import { TableBody } from './TableBody';
import TableHead from './TableHead';
const Table = ({ columns, rows, onRowClick }) => {
  return (
    <div className="max-h-96 min-h-20   pt-5 pb-10 bg-indigo-100 rounded-3xl">
      <div className="overflow-auto max-h-80 min-h-20">
        <table className="min-w-full table-auto">
          <TableHead columns={columns} />
          <TableBody rows={rows} columns={columns} onClick={onRowClick} />
        </table>
      </div>
    </div>
  );
};

export default Table;

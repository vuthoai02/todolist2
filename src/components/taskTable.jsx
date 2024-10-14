import React from "react";
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Button,
  } from "@mui/material";

export default function TaskTable(props) {
    const { columns, tasks, handleDeleleTask, handleEditTask } = props;
  return (
    <Table
      sx={{ minWidth: 650, width: "60vw", ml: 30, position: "absolute", top: 120 }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.field} align="right">
              {column.headerName}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column.field} align="right">
                {column.field === "status"
                    ? task[column.field] === 2
                        ? "Hoàn thành"
                        : task[column.field] === 1
                        ? "Đang thực hiện"
                        : "Chưa thực hiện"
                    : task[column.field]}
                {column.field === "id" && index+1}
              </TableCell>
            ))}
            <TableCell align="right">
                <Button variant="contained" color="primary" sx={{mr: 1}} onClick={() => handleEditTask(task, index)}>Sửa</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDeleleTask(index)}>Xóa</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
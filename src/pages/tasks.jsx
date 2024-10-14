import React from "react";
import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "@mui/icons-material";

//Components
import TaskTable from "../components/taskTable";
import TaskForm from "../components/taskForm";

//Actions
import { addTasks, deleteTask, updateTask } from "../redux/actions";

export default function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const [open, setOpen] = React.useState(false);
  const [editTask, setEditTask] = React.useState(null);

  const columns = [
    { field: "id", headerName: "#", width: 70 },
    { field: "title", headerName: "Nhiệm vụ", width: 130 },
    { field: "description", headerName: "Mô tả", width: 130 },
    {
      field: "dueDate",
      headerName: "Ngày hết hạn",
      width: 90,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 90,
    },
  ];

  const handleAddTask = (task) => {
    console.log(task);
    dispatch(addTasks(task));
    setOpen(false);
  };

  const handleUpdateTask = (task) => {
    dispatch(updateTask(task));
    setOpen(false);
  };

  const handleOpenForm = () => {
    setOpen(true);
  };
  const handleCloseForm = () => {
    setOpen(false);
  };

  const handleDeleleTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (task, id) => {
    setEditTask({ ...task, id });
    setOpen(true);
  };
  return (
    <>
      <Box position={"absolute"} right={10} top={70}>
        <Button
          startIcon={<Add />}
          variant="contained"
          onClick={handleOpenForm}
        >
          Thêm nhiệm vụ
        </Button>
      </Box>
      <TaskTable
        columns={columns}
        tasks={tasks}
        handleDeleleTask={handleDeleleTask}
        handleEditTask={handleEditTask}
      />
      <TaskForm
        open={open}
        handleCloseForm={handleCloseForm}
        handleAddTask={handleAddTask}
        editTask={editTask}
        handleUpdateTask={handleUpdateTask}
        setEditTask={setEditTask}
      />
    </>
  );
}

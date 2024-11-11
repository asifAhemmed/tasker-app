import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskLists";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";

const TaskBoard = () => {
  const defaultTask = [
    {
      id: crypto.randomUUID(),
      title: "Learn React",
      description: "I want to learn React",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavorite: false,
    },
  ];
  const [tasks, setTasks] = useState(defaultTask);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleFromSubmit = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    handleClose();
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks([...newTasks]);
  };

  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavoriteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].isFavorite = !tasks[index].isFavorite;
    setTasks([...tasks]);
  };

  const handleSearch = (term) => {
    const searchTask = tasks.filter(
      (task) => task.title.toLowerCase() === term.toLowerCase()
    );
    setTasks([...searchTask]);
  };

  const handleClose = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  return (
    <section className="mb-20" id="tasks">
       {showModal && (
          <AddTaskModal
            onAddEditTask={handleFromSubmit}
            taskToUpdate={taskToUpdate}
            onClose={handleClose}
          ></AddTaskModal>
        )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearchTask={handleSearch}></SearchTask>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <TaskActions
              onAddTask={() => setShowModal(true)}
              onDeleteAllTask={handleDeleteAllTask}
            ></TaskActions>
          </div>
          {tasks.length > 0 ? (
            <TaskLists
              tasks={tasks}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onSelectFavoriteTask={handleFavoriteTask}
            ></TaskLists>
          ) : (
            <NoTasksFound></NoTasksFound>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;

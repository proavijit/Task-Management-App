import { useState } from "react";
import SearchTask from "../Task/SearchTask.jsx";
import AddTaskModal from "./AddTaskModal.jsx";
import NoTaskFound from "./NoTaskFound.jsx";
import TaskAction from "./TaskActions.jsx";
import TaskList from "./TaskList.jsx";

export default function Taskbord() {
  let defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such that I can treat it like my salve and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks();
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setShowAddModal(false);
  }

  function handleDeleteTask(taskId) {
    const tasksAfterDelet = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelet);
  }

  function handleDeletAllClick() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleFavourite(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];

    newTasks[taskIndex].isFavourite = !newTasks[taskIndex].isFavourite;
    setTasks(newTasks);
  }

  function handleSearch(searchTerm) {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filtered]);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            onSave={handleAddTask}
            taskToUpdate={taskToUpdate}
            onCloseClick={handleCloseClick}
          />
        )}
        <div className="container">
          <SearchTask onSearch={handleSearch} /> {/** Search Box */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onDeleteAllClick={handleDeletAllClick}
              onAddClick={() => setShowAddModal(true)}
            />{" "}
            {/** Task Action */}
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdit={handleEditTask}
                onDelet={handleDeleteTask}
                onFav={handleFavourite}
              />
            ) : (
              <NoTaskFound />
            )}
            {/** Task Action */}
          </div>
        </div>
      </section>
    </>
  );
}

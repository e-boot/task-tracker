import { loadTasks, saveTasks } from "./utils.js";

const updateTask = (id, description) => {
    const tasks = loadTasks();
    const task = tasks.find(task => task.id == id);

    if (task) {
        task.description = description;
        task.updatedAt = new Date().toISOString();
        saveTasks(tasks);
        console.log(`Task ${id} updated successfully`);
    } else {
        console.log(`Task ${id} not found`);
    }
};

export {updateTask}
import { loadTasks,saveTasks } from "./utils.js";


/**
 * Status: in Progress
 * @param id
 */
const markTaskInProgress = (id) => {
    updateTaskStatus(id, 'in-progress');
};


/**
 * Status: Done
 * @param id
 */
const markTaskDone = (id) => {
    updateTaskStatus(id, 'done');
};


// helper function
const updateTaskStatus = (id, status) => {
    const tasks = loadTasks();
    const task = tasks.find(task => task.id == id);

    if (task) {
        task.status = status;
        task.updatedAt = new Date().toISOString();
        saveTasks(tasks);
        console.log(`Task ${id} marked as ${status}`);
    } else {
        console.log(`Task ${id} not found`);
    }
};


export {markTaskDone, markTaskInProgress}
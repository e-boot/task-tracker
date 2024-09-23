import { loadTasks } from "./utils.js";

const listTasks = () => {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log('No tasks to display yet');
    } else {
        console.log('Tasks:', tasks);
    }
};


export {listTasks}
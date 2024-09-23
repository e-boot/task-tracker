import {loadTasks, saveTasks} from "./utils.js"

const deleteTask = (id) => {
    const tasks = loadTasks();
    const filteredTasks = tasks.filter(task => task.id != id);

    if (tasks.length === filteredTasks.length) {
        console.log(`Task ${id} not found`);
    } else {
        saveTasks(filteredTasks);
        console.log(`Task ${id} deleted successfully`);
    }
};

export {deleteTask}
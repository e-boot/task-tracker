import {loadTasks,saveTasks } from './utils.js'

const addTask = (description) => {
    const tasks = loadTasks();
    //makes sure theres is not a repeated ID
    const maxId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
    const newTask = {
        id: maxId + 1,
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully: ${description}`);
};

export {addTask}
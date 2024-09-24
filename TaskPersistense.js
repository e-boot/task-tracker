import fs from 'fs';
import Task from './Task.js';  // Ensure Task is imported here

export default class TaskPersistence {
    constructor(filePath) {
        this.filePath = filePath;
    }

    loadTasks() {
        try {
            const dataBuffer = fs.readFileSync(this.filePath);
            const dataJSON = dataBuffer.toString();
            const tasksData = JSON.parse(dataJSON);

            // Reconstruct Task instances from loaded data
            return tasksData.map(taskData => {
                const task = new Task(taskData.description, taskData.status);
                task.id = taskData.id;  // Manually set the id
                task.createdAt = taskData.createdAt;  // Set createdAt
                task.updatedAt = taskData.updatedAt;  // Set updatedAt
                return task;
            });
        } catch (e) {
            return [];  // Return an empty array if the file doesn't exist
        }
    };

    saveTasks(tasks) {
        fs.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2));
    }
}

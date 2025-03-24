import fs from 'fs';
import Task from './Task.js';

export default class TaskPersistence {
    constructor(filePath) {
        this.filePath = filePath;
    }

    loadTasks() {
        try {
            const dataBuffer = fs.readFileSync(this.filePath);
            const dataJSON = dataBuffer.toString();
            const data = JSON.parse(dataJSON);

            // Set the Task ID counter from the saved data (if it exists)
            if (data.idCounter) {
                Task.idCounter = data.idCounter; // Set static ID counter for Task class
            }

            // Reconstruct Task instances from loaded data
            return data.tasks.map(taskData => {
                const task = new Task(taskData.description, taskData.status);
                task.id = taskData.id;  // Manually set the id
                task.createdAt = taskData.createdAt;  // Set createdAt
                task.updatedAt = taskData.updatedAt;  // Set updatedAt
                return task;
            });
        } catch (e) {
            console.error("Error loading tasks:", e);
            return [];  // Return an empty array if the file doesn't exist or is invalid
        }
    }

    saveTasks(tasks) {
        try {
            // Save tasks and the current ID counter to the file
            const dataToSave = {
                tasks: tasks,
                idCounter: Task.idCounter // Save the current ID counter
            };
            fs.writeFileSync(this.filePath, JSON.stringify(dataToSave, null, 2));
        } catch (e) {
            console.error("Error saving tasks:", e.message);
        }
    }
}

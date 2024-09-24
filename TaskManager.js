import Task from './Task.js';
import TaskPersistence from './TaskPersistense.js';

export default class TaskManager {
    constructor(filePath) {
        this.persistence = new TaskPersistence(filePath);
        this.tasks = this.persistence.loadTasks(); // Load tasks when initializing
    }
    addTask(description) {
        const newTask = new Task(description);
    this.tasks.push(newTask);
        this.persistence.saveTasks(this.tasks);
        console.log(`Task added successfully: ${description}`);
    }

    updateTask(id, newDescription, newStatus) {
        const task = this.tasks.find(task => task.id === Number(id));
        if (task) {
            task.update(newDescription, newStatus);
            this.persistence.saveTasks(this.tasks);
            console.log(`Task ${id} updated successfully.`);
        } else {
            console.log(`Task ${id} not found.`);
        }
    }

    deleteTask(id) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== Number(id));
        if (initialLength > this.tasks.length) {
            this.persistence.saveTasks(this.tasks);
            console.log(`Task ${id} deleted successfully.`);
        } else {
            console.log(`Task ${id} not found.`);
        }
    }

    listTasks() {
        if (this.tasks.length === 0) {
            console.log('No tasks to display.');
        } else {
            this.tasks.forEach(task => console.log(task.display()));
        }
    }

    markInProgress(id) {
        const task = this.tasks.find(task => task.id === Number(id));
        if (task) {
            task.markInProgress();
            this.persistence.saveTasks(this.tasks);
            console.log(`Task ${id} marked as in-progress.`);
        } else {
            console.log(`Task ${id} not found.`);
        }
    }

    markDone(id) {
        const task = this.tasks.find(task => task.id === Number(id));
        if (task) {
            task.markDone();
            this.persistence.saveTasks(this.tasks);
            console.log(`Task ${id} marked as done.`);
        } else {
            console.log(`Task ${id} not found.`);
        }
    }
}

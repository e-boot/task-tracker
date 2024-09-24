import TaskPersistence from "./TaskPersistense.js"
import Task from "./Task.js"
const persistense = new TaskPersistence("./tasks.json");

const addTask = (description) => {
    const tasks = persistense.loadTasks();
    //makes sure theres is not a repeated ID
    const newTask = new Task(description,'todo');
    tasks.push(newTask);
    persistense.saveTasks(tasks);
    console.log(`Task added successfully: ${description}`);
};


const updateTask = (id, newDescription) => {

    const tasks = persistense.loadTasks();

    const taskId = Number(id);
    if(isNaN(taskId)) {
        console.log("Invalid task ID.");
        return;
    }
    const task = tasks.find(task => task.id === Number(id));
    if (task) {
        task.update(newDescription)
        persistense.saveTasks(tasks);
        console.log(`Task ${id} updated successfully`);
    } else {
        console.log(`Task ${id} not found`);
    }
};

const listTasks = () => {
    const tasks = persistense.loadTasks();
    if (tasks.length === 0) {
        console.log('No tasks to display yet');
    } else {
        console.log(tasks);
        };
    }

const markTaskInProgress = (id) => {
    const tasks = persistense.loadTasks();
    const task = tasks.find(task => task.id == id);
    if (task) {
        task.markInProgress();
        persistense.saveTasks(tasks);
        console.log(`Task ${id} marked as in-progress`);
    } else {
        console.log(`Task ${id} not found`);
    }
};

const markTaskDone = (id) => {
    const tasks = persistense.loadTasks();
    const task = tasks.find(task => task.id == id);
    if (task) {
        task.markDone();
        persistense.saveTasks(tasks);
        console.log(`Task ${id} marked as done`);
    } else {
        console.log(`Task ${id} not found`);
    }
};

const deleteTask = (id) => {
    
    if (!id) {
        return console.log("Error: ID is required to delete a task.");
    }
    
    const tasks = persistense.loadTasks();
    const filteredTasks = tasks.filter(task => task.id != id);

    if (tasks.length === filteredTasks.length) {
        console.log(`Task ${id} not found`);
    } else {
        persistense.saveTasks(filteredTasks);
        console.log(`Task ${id} deleted successfully`);
    }
};









// CLI command handling
const command = process.argv[2];
const args = process.argv.slice(3);


    switch (command) {
        case 'add':
            addTask(args[0]);
            break;
        case 'list':
            listTasks();
            break;
        case 'update':
            updateTask(args[0], args[1]);
            break;
        case 'delete':
            deleteTask(args[0]);
            break;
        case 'mark-in-progress':
            markTaskInProgress(args[0]);
            break;
        case 'mark-done':
            markTaskDone(args[0]);
            break;
        default:
            console.log('Unknown command');
    }
import TaskManager from "./TaskManager.js";


const taskManager = new TaskManager("./tasks.json");






// CLI command handling
const command = process.argv[2];
const args = process.argv.slice(3);


    switch (command) {
        case 'add':
            taskManager.addTask(args[0]);
            break;
        case 'list':
            taskManager.listTasks();
            break;
        case 'update':
            taskManager.updateTask(args[0], args[1]);
            break;
        case 'delete':
            taskManager.deleteTask(args[0]);
            break;
        case 'mark-in-progress':
            taskManager.markInProgress(args[0]);
            break;
        case 'mark-done':
            taskManager.markDone(args[0]);
            break;
        default:
            console.log('Unknown command');
    }
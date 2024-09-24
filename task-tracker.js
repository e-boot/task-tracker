import TaskManager from "./TaskManager.js";


const taskManager = new TaskManager("./tasks.json");







// CLI command handling
const command = process.argv[2];
const args = process.argv.slice(3);

    // Helper function to show usage information
    const showUsage = () => {
        console.log(`
        Task Tracker CLI
    
        Available commands:
        - add "<description>"                : Adds a new task with the provided description.
        - list                               : Lists all tasks.
        - update <id> "<description>" [status] : Updates task with the given ID.
        - delete <id>                        : Deletes task with the given ID.
        - mark-in-progress <id>              : Marks task with the given ID as "in-progress".
        - mark-done <id>                     : Marks task with the given ID as "done".
    
        Example usage:
        $ node task-cli.js add "Buy groceries"
        $ node task-cli.js update 1 "buy groceries and shampo" done
        $ node task-cli.js delete 1
        `);
    };


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
            showUsage();
    }



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
            if (!args[0]) {
                console.log("Error: Task description is required.");
                showUsage();
                process.exit(1);
            }
            taskManager.addTask(args[0]);
            break;
        case 'list':
            taskManager.listTasks();
            break;
        case 'update':
            if (!args[0] || !args[1]) {
                console.log("Error: Task ID and description are required.");
                showUsage();
                process.exit(1);
            }
            taskManager.updateTask(args[0], args[1], args[2]);
            break;
        case 'delete':
            if (!args[0]) {
                console.log("Error: Task ID is required.");
                showUsage();
                process.exit(1);
            }
            taskManager.deleteTask(args[0]);
            break;
        case 'mark-in-progress':
            if (!args[0]) {
                console.log("Error: Task ID is required.");
                showUsage();
                process.exit(1);
            }
            taskManager.markInProgress(args[0]);
            break;
        case 'mark-done':
            if (!args[0]) {
                console.log("Error: Task ID is required.");
                showUsage();
                process.exit(1);
            }
            taskManager.markDone(args[0]);
            break;
        default:
            console.log('Unknown command');
            showUsage();
    }


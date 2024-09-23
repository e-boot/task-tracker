import {addTask} from './operations/addTask.js'
import { updateTask } from './operations/updateTask.js';
import { deleteTask } from './operations/deleteTask.js';
import {listTasks} from './operations/listTask.js';
import { markTaskDone, markTaskInProgress} from './operations/taskStatus.js';







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
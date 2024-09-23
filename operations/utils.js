const path = './tasks.json';
import fs from 'fs';

// if tasks.json doesnt exist, create it
if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
}


const loadTasks = () => {
    const dataBuffer = fs.readFileSync(path);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
};

const saveTasks = (tasks) => {
    fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
};


export {loadTasks, saveTasks}
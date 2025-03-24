# Task Tracker

Task Tracker is a Command-Line Interface (CLI) application designed to be used as a backend for managing tasks. This tool allows you to create, list, update, and delete tasks, each assigned a status: `todo`, `in-progress`, or `done`. It is intended to be integrated into a frontend application.

## Features

- **Create Tasks**: Add new tasks to your list.
- **List Tasks**: View all existing tasks along with their statuses.
- **Update Tasks**: Modify task details or change their status.
- **Delete Tasks**: Remove tasks that are no longer needed.

## Installation

To install Task Tracker, ensure you have [Node.js](https://nodejs.org/) installed on your system. Then, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/e-boot/task-tracker.git


2. Navigate to the project directory:
   ```bash
   cd task-tracker

3. Install dependencies:
   ```bash
   npm install

## Usage
After installation, you can use the Task Tracker CLI as follows:

Add a new task:
```bash
node task-tracker.js add "Buy groceries"
```

List all tasks:
```bash
node task-tracker.js list
```

Update a task:
```bash
node task-tracker.js update <task_id> "Buy groceries"
```
Replace <task_id> with the ID of the task you want to update and <new_status> with one of the following: `todo` ,`in-progress` ,`done`.

- Delete a task:
```bash
node task-tracker.js delete <task_id>
```
Replace <task_id> with the ID of the task you want to delete.


# Example Usage
```bash
node task-tracker.js add "Buy groceries"
node task-tracker.js update 1 "Buy groceries and shampoo"
node task-tracker.js delete 1
node task-tracker.js list
```  
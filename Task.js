export default class Task {
    static idCounter = 0;  // This will hold the counter for task IDs

    constructor(description, status = "todo") {
        this.id = Task.generateId();  // Ensure we generate a unique ID based on the persisted counter
        this.description = description;
        this.status = status;
        this.createdAt = presentTime();
        this.updatedAt = presentTime();
    }

    // Generate a unique ID based on the idCounter value
    static generateId() {
        return ++Task.idCounter;
    }

    update(description, status = 'todo') {
        this.description = description;
        this.status = status;
        this.updatedAt = presentTime();
    }

    markInProgress() {
        this.status = 'in-progress';
        this.updatedAt = presentTime();
    }

    markDone() {
        this.status = 'done';
        this.updatedAt = presentTime();
    }

    display() {
        return `Task ID:${this.id}; Status: ${this.status};\nDescription: ${this.description};\ncreated at: ${this.createdAt}; updated at: ${this.updatedAt};\n`;
    }
}

// Helper function to get date in D-M-Y format
const presentTime = () => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date().toLocaleDateString('en-GB', options);
};

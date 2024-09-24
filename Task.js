
export default class Task {
    static idCounter = 0;

    constructor( description, status){
        this.id =Task.generateId();
        this.description = description;
        this.status = status;
        this.createdAt = presentTime();
        this.updatedAt = presentTime();
    }

    static generateId(){
        return ++Task.idCounter;
    }

    update(description,status = 'todo'){
        this.description = description;
        this.status = status;
        this.updatedAt = presentTime();
    }

    markInProgress(){
        this.status = 'in-progress';
        this.updatedAt = presentTime();
    }

    markDone(){
        this.status = 'done';
        this.updatedAt = presentTime();
    }

    display(){
    return `Task ID: ${this.id}, Description: ${this.description}, Status: ${this.status}, created at: ${this.createdAt}, updated at: ${this.updatedAt}`;
    }


}



// helper functions to get date like D-M-Y

const presentTime = () => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date().toLocaleDateString('en-GB', options);
};
import { TaskTemplate, Task } from "../types/task";

class TaskService {

    constructor() { }

    getTemplates() {
        return [
            new TaskTemplate(1, "Lage middag"),
            new TaskTemplate(2, "Vaske badene"),
            new TaskTemplate(3, "Handle")
        ];
    }

    getDummyTasks() {
        let templates = this.getTemplates();
        let tasks = [];
        templates.forEach(x => {
            tasks.push(new Task(x, new Date()));
        });
        return tasks;


    }


}

export const taskService = new TaskService();
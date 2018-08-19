import { TaskTemplate, Task } from "../types/task";
import  moment  from "moment";

class TaskService {

    constructor() { }

    getSampleWeekTemplate() {
        return [
            new TaskTemplate(1, "Lage middag",[0,1,2,3,4,5,6]),
            new TaskTemplate(2, "Vaske badene",[4]),
            new TaskTemplate(3, "Handle",[0,4])
        ];
    }

    getDummyTasks() {
        let templates = this.getSampleWeekTemplate();
        let tasks = [];
        templates.forEach(x => {
            x.day.forEach(d=>{
                tasks.push(new Task(x, new moment().add(d,'days')));
            });
        });
        return tasks;
    }

    loadWeekTemplate(){
        return this.getSampleWeekTemplate();
    }


}

export const taskService = new TaskService();
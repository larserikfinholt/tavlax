export class Task {

    constructor(taskTemplate, startTime ) {
        this.templateId=taskTemplate.id;
        this.name=taskTemplate.name;
        this.startTime=startTime;
        console.log('creating task ' + this.name + ' ' + this.startTime); 
    }
}


export class TaskTemplate {

    constructor(id, name, daysArr){
        this.id=id;
        this.name=name;
        this.days = daysArr;
    }

}


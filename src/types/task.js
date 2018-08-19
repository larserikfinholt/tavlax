export class Task {

    constructor(taskTemplate, startTime ) {
        this.templateId=taskTemplate.id;
        this.name=taskTemplate.name;
        this.startTime=startTime;
    }
}


export class TaskTemplate {

    constructor(id, name, dayNo){
        this.id=id;
        this.name=name;
        this.day = dayNo;
    }

}


import { taskService } from "../services/task-service";

export const agenda = {
    state: {
        tasks: [],
        template:[]
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        addTemplateTask(state, task) {
            state.template.push(task);
        }

    },
    actions: {
        addDummyData(context) {
            console.log('add dummy data agenda...')
            taskService.getDummyTasks().forEach(task => {
                context.commit('addTask', task);
            });
            taskService.loadWeekTemplate().forEach(task => {
                context.commit('addTemplateTask', task);
            });
        }
    },
    getters: {
        getToday(context) {
            console.log('getting today',context);
            return 123;
        }
    }
}

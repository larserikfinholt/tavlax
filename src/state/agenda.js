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
        },
    },
    getters: {
        currentWeek(context) {
            console.log('getting current week',context);
            // return context.state.tasks;
        }
    }
}

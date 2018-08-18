import { taskService } from "../services/task-service";

export const agenda = {
    state: {
        tasks: []

    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        }
    },
    actions: {
        addDummyData(context) {
            taskService.getDummyTasks().forEach(task => {
                context.commit('addTask', task);
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

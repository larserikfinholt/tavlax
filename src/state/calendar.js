import moment from 'moment';

export const calendar = {
    state: {
        view:'week',
        viewStartDate:moment().weekday(0)
    },
    mutations: {
        setView(state, view){
            state.view=view;
        },
        setViewStartDate(state, date){
            state.viewStartDate=date;
        },
    },
    actions: {
        setView(context,view){
            if (!view){
                view = context.state.view=="week"?"3days":"week";
            }
            if (view!='week') {
                context.commit('setViewStartDate', moment());
                context.commit('setView',view);
            } else {
                context.commit('setViewStartDate', moment().weekday(0));
                context.commit('setView',view);
            }
        }, 
        navigate(context, isForward) {
            switch (context.state.view){
                case 'week':
                    context.commit('setViewStartDate', moment(context.state.viewStartDate).add(isForward? 7:-7,'days'));
                    break;
                case '3days':
                    context.commit('setViewStartDate', moment(context.state.viewStartDate).add(isForward? 3:-3,'days'));
                    break;
                    default:
                    console.log('not implemented', context.state.view);
            }
        },
    },
    getters: {
        // currentWeek(context) {
        //     console.log('getting current week',context);
        //     // return context.state.tasks;
        // }
    }
}

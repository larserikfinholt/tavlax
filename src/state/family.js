import { familyService } from "../services/family-service";

export const family = {
    state: {
        name:null,
        persons: []

    },
    mutations: {
        addPerson(state, person) {
            state.persons.push(person);
        },
        setName(state, name){
            state.name=name;
        }

    },
    actions: {
        addDummyFamilyData(context) {
            console.log('add dummy data family...')
            familyService.getDummyPersons().forEach(person => {
                context.commit('addPerson', person);
            });
            context.commit('setName','Finholt');

        }
    },
    getters: {
        getCurrentUser(state, context) {
            console.log('getting currentUser',context);
            if (state.persons && state.persons.length) return state.persons[0];
            return 123;
        }
    }
}

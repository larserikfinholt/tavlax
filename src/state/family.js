import { familyService } from "../services/family-service";
import router from '../router'

export const family = {
    state: {
        name:null,
        persons: [],
        topics:null

    },
    mutations: {
        addPerson(state, person) {
            state.persons.push(person);
        },
        setName(state, name){
            state.name=name;
        },
        setFamily(state,family){
            state.name=family.name;
            state.persons=family.persons;
        }

    },
    actions: {
        loadFamilyData(context, familyIdFromQueryString){
            let savedFamilyId = localStorage.getItem('familyId');
            if (!savedFamilyId && !familyIdFromQueryString){
                console.log('no saved family, and nothing in querystring, goto firstrun')
                return router.push('/firstrun');
            }
            if (!savedFamilyId && familyIdFromQueryString){
                localStorage.setItem('familyId', familyIdFromQueryString);
                console.log('saving familyId in localstorage '+ familyIdFromQueryString);
            }
            let familyId = localStorage.getItem('familyId');
            let family = familyService.getFamily(familyId);
            if (family){
                context.commit('setFamily', family);
                return router.push('./');
            } 
            console.warn('family not found, goto firstrun');
            return router.push('/firstrun');
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

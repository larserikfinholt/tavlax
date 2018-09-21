import { Person } from "../types/person";

class FamilyService {

    constructor() { }

    getFamily(id){

        let f = localStorage.getItem(id);
        if (f){
            console.log('family loaded',f);
            return JSON.parse(f);
        }
        console.warn('family not found', id);
        return null;
    }
    saveFamily(id, fam){
        localStorage.setItem(id, JSON.stringify(fam));
    }

    getDummyPersons() {
        return [
            new Person('Lars Erik', 46),
            new Person('Camilla', 43),
            new Person('Sigrid', 18),
            new Person('Ingvild',13)
        ]

    }


}

export const familyService = new FamilyService();
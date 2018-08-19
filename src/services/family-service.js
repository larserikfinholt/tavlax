import { Person } from "../types/person";

class FamilyService {

    constructor() { }


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
class FamilyService {

    constructor() { }

    getFamily(id){
        let f = localStorage.getItem('family-'+id);
        if (f){
            console.log('family loaded',f);
            return JSON.parse(f);
        }
        return null;
    }
    saveFamily(id, fam){
        console.log('saving family',id, fam);
        localStorage.setItem('family-'+id, JSON.stringify(fam));
        localStorage.setItem('familyId', id);
    }
}

export const familyService = new FamilyService();
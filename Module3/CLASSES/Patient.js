class Patient {
    _name;
    _age;
    _medicalHistory
    constructor(name,age,medicalHistory) {
        this.name
        this.age
        this.medicalHistory = medicalRecord;
        this.isDischarged = false;
    }
    updateMedicalRecord(newRecord) {  
        this.medicalRecord = newRecord;
    }
    discharge() {
        if (!this.isDischarged) {
            this.isDischarged = true;
            console.log(`${this.name} has been discharged.`);
        } else {
            console.log(`${this.name} is already discharged.`);
        }
    }

    get name(){
        return this.name

    }
    set name(value) {
        this.name = value;
    }

}
console.log(`Medical record for ${this.name} has been updated.`);
// function to be executed after the delay
//const greet = () => {
    //console.log("Hello world!");
//}
// set timeout to call the greet functiojn afer 3 seconds (3000 miliseconds)
//setTimeout(greet, 50000)
// //

//Booking service

//10 am => Click on the button

// loading animaton ==> displays processing request on UI (5/10 seconds



// Case 2: John is monitoring his 11 am shift

// fetching real time datat every 5 minutesd => update the table content every 5 minutes

// calling APIS => Cliet (1 doctor) => 1000 Clients => 5000 calls => db (DDOS) - EXAMPLE ISSUE 

// sending events (sending server to client) 

// Sever will otify the client when the changes are updated (push notification) =>

   // let phoneArr = [
    //    new Map, ("+65 1234 231", "John")
   // ]

    //track my hotline

    // Class = > represent the entity 

    //example: Class Representation 

    /* Hospital
    * State:
    * PerosnalInuranceTax: 
    * Insuramcetax:
    * country:
    * 
    * 
    */
   // new Hospital ('WA', '5%', 'AU', 'Null'

   //Example 2: Doctor and Nurse

   //Doctor - Adbanced Medical Knowledge with Specialisation

   //Nurse - General Medical Knowledge

   //Specialist - specilaist within specific medical Field 

   //GP - General Medical Knowledge

   /* 
   BASE_PRACTICTIONER {
     id: string;

     savingpeople () {
     }
   }
    class specialist extend BASE_PRACTICTIONER {
        area() {
        RETURN []; //[LUNG CANCER, HEART ATTACK]
        }
    }
        
    */

/*

Patient Management System:

In a hospital, patients are a crucial part of the system. 
You could create a Patient class that stores basic information like name, age, 
and medical history. This class could be extended into more specific classes such as
Inpatient and Outpatient. The Inpatient class might include additional properties 
like roomNumber and admissionDate, while the Outpatient class could include 
properties like appointmentDate and doctorAssigned. Methods could be added to update 
medical records or discharge a patient.

*/

// Notes: 
//Class: Patient(name,age,MedicalHistory), 
//Extend Class: Impatient(roomNumber,admissionDate), 
//Extended Class: Outpatient(appointmnetDate, doctorAssigned)

class Patient {
    constructor(name,age,medicalHistory) {
        this.name
        this.age
        this.medicalHistory = medicalRecord;
        this.isDischarged = false;
    }
    updateMedicalRecord(newRecord) { // this Method will update 
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

}
class Inpatient extends Patient {
    constructor(name,age,medicalHistory,roomNumber,admissionDate) {
        this.roomNumber
        this.admissionNumber
    }
}
class Outpatient extends Patient {
    constructor(name,age,medicalHistory,appointmentDate,doctorAssigned){
        this.appointmentDate
        this.doctorAssigned
    }
}

console.log(`Medical record for ${this.name} has been updated.`);

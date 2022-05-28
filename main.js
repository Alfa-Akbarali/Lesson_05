const prompt= require('prompt-sync')()



Andrey={
    FirtName:'Andrey',
    LastName:'Sergevich',
    age:13,
    group:'A class',
},
 Sevara={
    FirtName:'Sevara',
    LastName:'Alasheva',
    age:15,
    group:'B class',
},
 Alisa={
    FirtName:'Alisa',
    LastName:'Allaberanova',
    age:17,
    group:'C class',
},
 Dildora={
    FirtName:'Dildora',
    LastName:'Rahimberganova',
    age:12,
    group:'D class',
}

    // 1_Упр
//     pupil4=Dildora
// console.log(pupil4.FirtName,pupil4.LastName,pupil4.age);
// console.log(pupils);


//  2Упр
const pupils = []

pupils.push(Andrey)
pupils.push(Sevara)
pupils.push(Alisa)
pupils.push(Dildora)


// console.log(pupils);

//  упр_03
let _name = prompt('Enter a neme:')

for (let  i= 0; i < pupils.length; i++) {
    if (pupils[i].FirtName ===_name || pupils[i].LastName === _name) {
        console.log(pupils[i]);
    }
}

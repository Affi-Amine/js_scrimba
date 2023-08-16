//spread operator
//for the lists

let souhabiii = ["sou", "sou1", "sou2"]

// let cloneSouhab = souhabiii : 

//lahna amalt copy aa ref moush aal contenu
//maaneha kn bsh nbadl haja fy l array lawl bsh tetbadl f theni

let cloneSouhab = [...souhabiii] // lahna amalt clone 
souhabiii.push("sou555")
console.log(cloneSouhab) // ma yetbadl feha shay

//for the objects

const sahbi = {
    essmou : "sou",
    omrou : 23,
    wynYosskon : "lbazda city"
}

const person = {
    ...sahbi,
    ayHaja : "blabla"
    //tnajm tcloni ly fl objet sahbi w tzid alyh attributes
}
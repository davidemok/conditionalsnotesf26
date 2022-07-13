let blaziken = "Kelvin"
let gengar = "Lukas"

if(blaziken === "Lukas"){
    console.log("This is Lukas's Pokemon")
} else {
    console.log("This is Kelvin's Pokemon")
}
//camel case
let blazikenAtk = 45
let gengarAtk = 30
//snake case
//blaze_HP 
//kebab case
//blaze-HP
let blazikenHP = 200
let gengarHP = 260

if(blazikenAtk > gengarAtk) {
    //gengarHP = gengarHP - blazikenAtk
    gengarHP -= blazikenAtk
    console.log(gengarHP)
}
    else if(gengarAtk > blazikenAtk){
    blazikenHP -= gengarAtk
    console.log(`Blaziken's new HP is  ${blazikenHP}`)
} else {
    console.log("They both missed!")
}

let fursySwipes = 35

for(i=0; i < 3; i++){
    console.log(i)
    console.log("Blaziken used fury swipes!")
    gengarHP -= fursySwipes
    console.log(`Gengar's HP is now ${gengarHP}`)
}

console.log("---------------")
let gengarFainted = false


let lowKick = 60

for(i=2; i>0; i--){
    console.log("Gengar used low kick!")
    blazikenHP -= lowKick
    console.log("Blaziken's HP is now " + blazikenHP)
}

while(gengarHP > 0){
    console.log("Blaziken used fury swipes")
    gengarHP -= fursySwipes
    if(gengarHP < 0){
        gengarHP = 0
        gengarFainted = true
    }
    console.log("Gengar's HP is now " + GengarHP)
    if (gengarFainted){
        console.log("Gengar has fainted")
    }
}

let boolean = false
let falseNum = 0
let falseStr = """

if(boolean){
    console.log("true")
}
    else{
        console.log("False")
    }
let message: string = "Me ajuda, fulano!";
console.log(message);

let episode: number = 4

console.log("Esse é o epsiódio "+4)
episode = episode +1
console.log("próximo episódio é " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'

console.log("Meu android favorito é " + favoriteDroid)

let isEnoughToBeatMilleniumFalcon = function (parsecs: number) : boolean{
    return parsecs < 12 
}

let distance = 11
//Template String permite usar expressões na string. Basta usar a crase para abrir e fechar a string
console.log(`A ${distance} parsecs é o bastante para bater a Millenium Falcon? ${isEnoughToBeatMilleniumFalcon(distance) ? 'Sim': 'Não'}`)

let call = (name: string) => console.log(`Câmbio, ${name} ?`)
call("R2")


function inc(speed: number, inc: number=1) : number{
    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)

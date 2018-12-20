class Spacecraft{
    constructor (public propulsor: string) {}
    jumpIntoHyperSpace(){
        console.log(`Entrando no hyperespaço com ${this.propulsor}`)
    }
}
//teste
let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();

class MillenniumFalcon extends Spacecraft implements Containership{
    
    cargoContainers : number
    
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }
    jumpIntoHyperSpace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperSpace()
         }else{console.log('F')}
    }
}

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperSpace()

interface Containership {
    cargoContainers: number
} 

let GoodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`A Falcon é boa para carga? ${GoodForTheJob(falcon) ? 'Sim': 'Não'}`)

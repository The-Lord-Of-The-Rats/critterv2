class name {
    constructor(name,health,attack,defense,effects){
        this.name=name
        this.health=health
        this.attack=attack
        this.defense=defense
        this.effects=effects
    }//creature basic stats are now defined, onto damage
    takeDamage(damage){
        this.health-=damage
            if (this.health<0){
                this.health=0
            }
    }//This should be the basics for damaging a creature.
    status(){
        if (this.health>0){
            console.log(`${this.name}: HP = ${this.health}`)
            elseif(this.health<=0)
                console.log(`${this.name} is unconscious`)
                }
    }//This is how you check the status of a creature, eventually i will  
        // I need to figure out how to display effects better
        // if (this.effects){
        // //     console.log(`${this.name}: ${this.effects}`)
        // //     elseif(this.effects)
        // //         console.log()
        // // }
}
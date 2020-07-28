console.log("Working");

class Keli{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`Hello ${this.name}`) ;
    }
}

new Keli("Kekeli").sayHello();

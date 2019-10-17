interface Shoe {
    wornOn: string;
    size: number;
    laces: boolean;
}

class Sneakers implements Shoe {
    wornOn: string;
    size: number;
    laces: boolean;
    constructor(appendage: string,footLength: number,bindingsPresent: boolean) {
        this.wornOn = appendage;
        this.size = footLength;
        this.laces = bindingsPresent;
    }
}

let vans = new Sneakers('hands',2,true);
console.log(vans);
class Hewan46 {
    name!: string;
    kaki!: number;

    constructor(name: string, kaki: number){
        this.name = name;
        this.kaki = kaki;
    }
}

class Hewan64 extends Hewan46 {
    warna!: string;

    constructor(name: string, kaki: number, warna: string){
        super(name, kaki);
        this.warna = warna;
    }
}

const hewan01 = new Hewan64("Tikus",4,"Hitam")
console.log(hewan01);

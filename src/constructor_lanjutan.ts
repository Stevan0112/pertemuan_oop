class Hewan3 {
    name!: string;//note: tanda "!" hanya untuk menghindari error code ketika belum dibuat constructor
    kaki!: number;

    constructor(name: string, kaki: number){
        this.name = name;
        this.kaki = kaki;
    }
}

const hewan4 = new Hewan3("Gajah", 4);
console.log(hewan4);

hewan4.name = "Jerapah"
hewan4.kaki = 4
console.log(hewan4);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Hewan23 {
    constructor(public name: string, public kaki: number){}
}
const hewan21 = new Hewan23("Kucing", 4);
console.log(hewan21);
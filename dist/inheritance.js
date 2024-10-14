"use strict";
class Hewan46 {
    constructor(name, kaki) {
        this.name = name;
        this.kaki = kaki;
    }
}
class Hewan64 extends Hewan46 {
    constructor(name, kaki, warna) {
        super(name, kaki);
        this.warna = warna;
    }
}
const hewan01 = new Hewan64("Tikus", 4, "Hitam");
console.log(hewan01);

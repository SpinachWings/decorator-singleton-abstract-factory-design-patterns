"use strict";
class Singleton {
    constructor(data) {
        this.data = data;
    }
    static getInstance(data) {
        if (this.instance == null) {
            this.instance = new Singleton(data);
        }
        return this.instance;
    }
}
const instanceOne = Singleton.getInstance("data");
const instanceTwo = Singleton.getInstance("updated data");
console.log(instanceOne === instanceTwo);

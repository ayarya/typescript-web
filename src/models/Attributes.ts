export class Attributes<T>{

    constructor(private data :T){}

    get = <K extends keyof T>(Key:K): T[K]=>{
        return this.data[Key];
    }
    
    set(update: T):void{
        Object.assign(this.data,update);
    }

    getAll(): T {
        return this.data;
    }
}
class Main {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    printName(): void {
        console.log(this.name);
    }
}

let mainInstance: Main
mainInstance = new Main('John Doe');
mainInstance.printName();
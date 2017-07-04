interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(paramRadius: number) {
        this.radius = paramRadius;
    }

    private radius: number;

    

    getArea = () => { return Math.PI * this.radius ** 2 }
}

class Square implements Shape {
    constructor(public a: number) {}

    getArea = () => { return this.a ** 2 }
}


type ShapeNoOOP =
    { kind: 'circle', radius: number } |
    { kind: 'square', a: number } |
    { kind: 'rectangle', w: number, h: number };


function assertNever(obj: never) {
    throw new Error('Unexpected object type');
}

function getArea(shape: ShapeNoOOP) {
    switch (shape.kind) {
        case ('circle'):
            return Math.PI * shape.radius ** 2;
        case ('rectangle'):
            return shape.h * shape.w;
        case ('square'):
            return shape.a ** 2;
    }
    shape;
    assertNever(shape);
    // throw new Error('Unexpected object type');
}

const shape1: ShapeNoOOP = { kind: 'circle', radius: 4 };
const area1 = getArea(shape1);
const shape2: ShapeNoOOP = { kind: 'rectangle', w: 4, h: 1 };
const area2 = getArea(shape2);

type SumArgs = {
    a: number,
    b: number
}

export function sum({a, b}: SumArgs){
    return a + b;
}

export default {sum}

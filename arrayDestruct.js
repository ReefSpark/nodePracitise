function calculation(a, b) {
    return [a + b, a - b, a * b, a / b]
    // return [a + b, a - b, a * b]
}

const [add, sub, mul, divsion = null] = calculation(3, 2)

console.log(add);
console.log(sub);
console.log(mul)

console.log(divsion)
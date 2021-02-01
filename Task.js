var arr = [1, 3,3,3,3,3, 1, 3, 4]
var arr2 = [1, 3, 4, 2, 5]

var c = []
c[0] = arr[0];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < c.length; j++) {
        if (c[j] == arr[i]) {
            count++;
        }
    }
    if (count == 0) {
        c.push(arr[i])
    }

}
for (let i = 0; i < arr2.length; i++) {
    let count = 0;
    for (let j = 0; j < c.length; j++) {
        if (c[j] == arr2[i]) {
            count++;
        }
    }
    if (count == 0) {
        c.push(arr2[i])
    }

}
console.log(c)
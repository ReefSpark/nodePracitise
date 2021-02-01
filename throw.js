function check(i) {
    try {
        if (i == 10) {
            throw new Error("Waste")
        }
        console.log("welcome");
        return 0;
    } catch (error) {
        console.log(error)
    }
}

check(10)
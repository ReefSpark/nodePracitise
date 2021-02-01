let Depth = {};

Depth.initialize = (pair) => {
    Depth.subscribe(pair)
}

Depth.subscribe = (pair) => {
    console.log("pair:", pair);
}

module.exports = Depth;
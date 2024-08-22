function curriedAdd(total) {
    return function addNext(num) {
        if (num === undefined) {
        return total;
        }
        return curriedAdd(total + num);
    };
}

module.exports = { curriedAdd };

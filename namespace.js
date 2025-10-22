var add;
(function (add) {
    function added(a, b) {
        return a + b;
    }
    add.added = added;
})(add || (add = {}));
console.log(add.added(10, 67));

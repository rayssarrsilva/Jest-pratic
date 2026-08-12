const calculator = {
    add(value1, value2){
        const add = value1 + value2;
        return Number.isInteger(add) ? parseFloat(add.toString()) : parseFloat(add.toFixed(1));
    },
    subtract(value1, value2){
        const subtract = value1 - value2;
        return Number.isInteger(subtract) ? parseFloat(subtract.toString()) : parseFloat(subtract.toFixed(1));
    },
    divide(value1, value2){
        return parseFloat((value1 / value2).toFixed(2));
    },
    multiply(value1, value2){
        return (value1 * value2);
    }
};

export default calculator;
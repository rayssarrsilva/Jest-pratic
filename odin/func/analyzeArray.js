function analyzeArray(arr){
    const sum = arr.reduce((ac, cur) => ac + cur, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return { average, min, max, length};
}

export default analyzeArray;
const _ = {
    clamp(num, lower, upper) {
        const lowerClampedValue = Math.max(num, lower);
        console.log(`lowerClampedValue: ${lowerClampedValue}`);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    }
};





// Do not write or modify code below this line.
module.exports = _;
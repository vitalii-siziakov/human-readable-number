const unitsObj = {
    '0': '',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
};

const tensObj = {
    '1': 'ten',
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
};

const exceptionsObj = {
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
};

let toReadableUnitsTens = (numString) => {
    let num = Number(numString);
    let numStr = String(num);
    let readableStr = '';

    if (exceptionsObj[numStr]) {
        readableStr = exceptionsObj[numStr];
    } else if (numStr.length === 2) {
        let tens = numStr.slice(0,1);
        let units = numStr.slice(1,2);

        tens = tensObj[tens];
        units = unitsObj[units];
        readableStr = `${tens} ${units}`;
    } else if (numStr.length === 1) {
        readableStr = unitsObj[numStr];
    };

    return readableStr;
};

module.exports = function toReadable (num) {
    // num === 0
    if (num === 0) {
        return 'zero';
    };

    // num !== 0
    let numStr = String(num);

    let readableStr = '';

    if (numStr.length === 3) {
        let hundreds = `${unitsObj[numStr.slice(0,1)]} hundred`;
        let unitsTans = toReadableUnitsTens(numStr.slice(1));

        readableStr = `${hundreds} ${unitsTans}`;
    } else if (numStr.length < 3) {
        readableStr = toReadableUnitsTens(numStr);
    };

    return readableStr.trim();
};


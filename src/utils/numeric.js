const isNumber = (value) =>
    !(isNaN(value) || typeof value === 'undefined' || value === null)

const tryParseNumber = (value) => {
    try {
        if (isNumber(value)) {
            return parseFloat(value)
        } else {
            return value
        }
    } catch (e) {
        return value
    }
}

export { tryParseNumber, isNumber }

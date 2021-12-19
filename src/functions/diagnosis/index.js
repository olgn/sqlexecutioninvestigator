import { tryParseNumber } from "../../utils/numeric"

const getExpensiveOperations = (uploadedFile) => {
    if (uploadedFile) {
        const operations = Array.prototype.slice.call(
            uploadedFile.getElementsByTagName('RelOp')
        )
        const data = operations.map((x) => {
            return {
                operationType: x.getAttribute('PhysicalOp'),
                expense: tryParseNumber(x.getAttribute('EstimateCPU')),
                NodeId: x.getAttribute('NodeId'),
            }
        }).sort((a, b) => b.expense - a.expense)
        console.log('data:', data)
        return data
    } else {
        return null
    }
}

export { getExpensiveOperations }
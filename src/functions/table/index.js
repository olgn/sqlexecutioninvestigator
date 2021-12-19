import { tryParseNumber } from "../../utils/numeric"

const getColumnsFromAttributes = (attributeList) =>
    attributeList.map((a) => ({ Header: a, accessor: a }))

const getTableDataFromAttributes = (attributeList, operationsList) =>
    operationsList.map((operation) => {
        return {
            ...attributeList.reduce((acc, curr) => {
                return {
                    ...acc,
                    [curr]: tryParseNumber(operation.getAttribute(curr)),
                }
            }, {}),
        }
    })

export { getColumnsFromAttributes, getTableDataFromAttributes }

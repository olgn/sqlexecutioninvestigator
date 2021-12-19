import { defaults } from '../../utils/constants/parsing'
import { tryParseNumber } from '../../utils/numeric'
import { getColumnsFromAttributes, getTableDataFromAttributes } from '../table'

const getOperations = (el) =>
    Array.prototype.slice.call(
        el.getElementsByTagName(defaults.operationTagName)
    )

const getAttributeList = (operations) => [
    ...new Set(
        operations.reduce(
            (acc, curr) => [...acc, ...curr.getAttributeNames()],
            []
        )
    ),
]

const getStatementList = (doc) =>
    defaults.statements.reduce(
        (acc, curr) => [
            ...acc,
            ...Array.prototype.slice
                .call(doc.getElementsByTagName(curr))
                .map((d, idx) => ({ idx, name: curr, element: d })),
        ],
        []
    )

const getStatementData = (doc) => {
    if (doc) {
        const statements = getStatementList(doc)
        return statements.map((statement, idx) => {
            const { element } = statement
            const tableData = getOperationsTableData(element)
            return {
                idx,
                tableData,
                ...defaults.statementAttributes.reduce((acc, curr) => {
                    return {
                        ...acc,
                        [curr]: tryParseNumber(element.getAttribute(curr)),
                    }
                }, {}),
            }
        }).sort((a, b) => b[defaults.statementExpenseAttribute] - a[defaults.statementExpenseAttribute])
    } else {
        return []
    }
}

const getOperationsTableData = (statement) => {
    if (statement) {
        const operations = getOperations(statement)
        const attributeList = getAttributeList(operations)
        const columns = getColumnsFromAttributes(attributeList)
        const data = getTableDataFromAttributes(attributeList, operations)
        return {
            columns,
            data,
        }
    }
    return { columns: [], data: [] }
}

const getQueryString = (xml) => {}

export {
    getOperationsTableData,
    getAttributeList,
    getOperations,
    getQueryString,
    getStatementList,
    getStatementData,
}

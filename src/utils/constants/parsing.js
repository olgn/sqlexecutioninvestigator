const defaults = {
    operationTagName: 'RelOp',
    statementAttributes: [
        'StatementId',
        'StatementType',
        'StatementSubTreeCost',
        'StatementText',
    ],
    statements: ['StmtSimple'],
    specialStatementProperties: ['StatementText', 'tableData'],
    operationExpenseAttribute: 'EstimateCPU'
}

export { defaults }

import React from 'react'
import { defaults } from '../../../../utils/constants/parsing'
import Panel from '../../../elem/layout/Panel'
import Table from '../../../elem/table/Table'

export default ({tableData}) => (
    <Panel title="Query Statistics">
        <Table columns={tableData.columns} data={tableData.data} defaultSortColumn={defaults.operationExpenseAttribute} defaultSortDirection="DESC" />
    </Panel>
)
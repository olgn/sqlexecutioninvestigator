import React, { useMemo } from 'react'
import { useSortBy, useTable } from 'react-table'

const Table = ({ columns, data, defaultSortColumn, defaultSortDirection }) => {
    // memoize all variables before creating table
    const c = useMemo(() => [...columns], [columns])
    const d = useMemo(() => [...data], [data])
    const initialSortBy = useMemo(() =>
        defaultSortColumn && defaultSortDirection
            ? [
                  {
                      id: defaultSortColumn,
                      desc: defaultSortDirection === 'DESC' ? true : false,
                  },
              ]
            : []
    , [defaultSortColumn, defaultSortDirection])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable(
            {
                columns: c,
                data: d,
                initialState: {
                    sortBy: initialSortBy,
                },
            },
            useSortBy
        )

    return (
        <div className="table-container">
            <table
                {...getTableProps()}
                className="table is-narrow is-striped is-hoverable is-fullwidth"
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <div className="is-flex">
                                        {column.render('Header')}
                                        {/* Add a sort direction indicator */}
                                        <span className="ml-2">
                                        {column.isSorted
                                            ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                            : ''}
                                        </span>
                                    </div>
                              </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table

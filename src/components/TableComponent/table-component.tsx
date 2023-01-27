import React, {useEffect, useState} from 'react';
import './table-component.scss'

/**
 * Configuration
 */

interface TableHeader {
    name: string;
    key: string;
    sortable: boolean;
}

interface TableData {
    headers: TableHeader[];
    data: object[];
}

/**
 * Main component
 */
const TableComponent: React.FC<TableData> = ({headers, data}) => {
    const [tableEntries, setTableEntries]: any = useState(null);

    useEffect(() => {
        setTableEntries(data);
    }, [data]);

    const applyFilter = (sortKey: string) => {
        const sortedData = [...data].sort((a: any, b: any) => {
            return a[sortKey] > b[sortKey] ? 1 : -1;
        })
        setTableEntries([...sortedData]);
    }
    const handleFilterClick = (value: any) => {
        applyFilter(value);
    }

    return (
        <table className={"table-component"}>
            <thead className="table-component__headers">
            <tr>
                {
                    headers.map((header, index) => (
                        <th key={`table-item-${index + 1}`} className="table-component__header">
                            <div></div>
                            <span>{header.name}</span>
                            {
                                header.sortable &&
                                <button className={"table-component-filter"} onClick={() => {
                                    handleFilterClick(header.key)}
                                }>
                                    <i className="fa-solid fa-sort"></i>
                                </button>
                            }
                        </th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {
                tableEntries && tableEntries.map((item: any, index: number) => (
                    <TableRow key={`table-row-${index + 1}`} data={item} headers={headers}/>
                ))
            }
            </tbody>
        </table>
    );
};

/**
 * Local functions
 */


/**
 * Local components
 */
const TableRow = ({data, headers}: any) => {
    return (
        <tr className="table-component__row">
            {
                headers.map((header: TableHeader, index: number) => (
                    <td key={`table-cell${index + 1}`} className="table-component__cell">
                        {data[header.key]}
                    </td>
                ))

            }
        </tr>
    );
};

/**
 * Init and export
 */
export default TableComponent;

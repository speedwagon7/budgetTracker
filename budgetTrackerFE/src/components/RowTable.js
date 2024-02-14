import React from 'react'

const RowTable = ({ data, className }) => {
    const columns = Object.keys(data[0]);

    return (
        <div>
            <table className={`dynamic-table ${className || ''}`}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columns.map((column) => (
                                <td key={column}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RowTable
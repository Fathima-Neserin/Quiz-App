import React from 'react'

const ResultTable = () => {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Nezrin</td>
                    <td>03</td>
                    <td>50</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable
import React, { Component } from 'react'
import MaterialTable from 'material-table'
import Employees from '../utils/employees.json'

function Table() {
    return (

        <MaterialTable
            columns={[
                // { title: 'First Name', field: 'Last Name' },
                // {field: 'Last Name', role: 'Role', start_date: 'Start Date'}
                { title: 'First Name', field: 'name' },
                { title: 'Last Name', field: 'surname' },
                { title: 'Job Title', field: 'role' },
                { title: 'Start Date', field: 'start_date' }

            ]}
            data={[{ name: 'Kurt', surname: 'LaVacque', role: "Lead Developer", start_date: "2/24/18" }]}
            title="Demo Title"
        />

    )
}

export default Table;

// ReactDOM.render(<App />, document.getElementById('react-div'));
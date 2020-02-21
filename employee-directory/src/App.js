import React from 'react';
import logo from './logo.svg';
import Table from './components/Table';
import './App.css';

function App() {
    return (
        <Table />
    );
}

export default App;


// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import MaterialTable from 'material-table'

// class App extends Component {
//   render() {
//     return (
//       <div style={{ maxWidth: '100%' }}>
//         <MaterialTable
//           columns={[
//             { title: 'Adı', field: 'name' },
//             { title: 'Soyadı', field: 'surname' },
//             { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
//             { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
//           ]}
//           data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
//           title="Demo Title"
//         />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('react-div'));
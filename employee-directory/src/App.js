import React from 'react';
// import Container from './components/Container';

import Table from './components/Table';
import Header from './components/Header';

import './App.css';

function App() {
    return (
        <div style={{ height: "100vh", background: "linear-gradient(0deg, rgb(0, 192, 255) 36%, rgba(62,160,160,0) 100%)"}}>
            <div style={{ margin: "0px 200px 0px 200px" }}>
                <Header />
                <Table />
            </div>
        </div>
    );
}

export default App;

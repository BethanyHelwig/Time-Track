import { useState } from 'react'
import TimeEntry from "./components/TimeEntry.jsx"
import Table from "./components/Table.jsx"
import './App.css'

function App() {

    return (
        <>
            <header>
                <h1>Time Track</h1><img src="./src/assets/track_icon.png"></img>
            </header>
            <Table />
        </>
    )
    }

export default App

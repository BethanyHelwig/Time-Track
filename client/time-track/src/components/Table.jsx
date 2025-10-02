import React from "react"
import TimeEntry from "./TimeEntry.jsx"

export default function Table() {
    const [entries, setEntries] = React.useState([<TimeEntry />])

    function addEntry(){
        setEntries(prev => [...prev, <TimeEntry />])
    }

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col" className="timer-button-col">Start/Stop</th>
                        <th scope="col" className="time-date-col">Time/Date</th>
                        <th scope="col">Client</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {entries}
                </tbody>
            </table>
            <button id="add-entry-btn" onClick={addEntry}>Add another entry row</button>
        </>
    )
}
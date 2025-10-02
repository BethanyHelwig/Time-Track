import React from "react"

export default function TimeEntry() {

    const [isSelected, setIsSelected] = React.useState(false)
    const [timeDateArray, setTimeDateArray] = React.useState([])

    const timeDateList = timeDateArray.map(el => (
        <p className={el.type == "start" ? "start-background-color" : "stop-background-color"}>
            <span style={{color: el.type == "start" ? "green" : "rgb(192, 33, 33)"}}>
                {el.type == "start" ? <i className="fa-solid fa-play fa-shake"></i> : <i className="fa-solid fa-stop"></i>}
            </span> 
            {el.date}
        </p>
    ))

    function handleClick() {
        const date = new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })

        setIsSelected(prev => !prev)
        setTimeDateArray(prev => [...prev, {date: date, type: isSelected ? "stop" : "start"}])
        console.log(isSelected)
    }

    return(
        <tr className={isSelected ? 'selected' : ''}>
            <td><button onClick={handleClick}>{!isSelected ? <i className="fa-solid fa-play fa-shake"></i> : <i className="fa-solid fa-stop"></i>}</button></td>
            <td>{timeDateList}</td>
            <td><input type="text" placeholder="e.g. FDL"></input></td>
            <td><textarea placeholder="Add description here..."></textarea></td>
        </tr>
    )
}
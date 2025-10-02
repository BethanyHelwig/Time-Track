import React, { useRef } from "react"

export default function TimeEntry() {

    const [isSelected, setIsSelected] = React.useState(false)
    const [timeDateArray, setTimeDateArray] = React.useState([])
    const [totalTime, setTotalTime] = React.useState(0)

    const hasMounted = useRef(false)

    const timeDateList = timeDateArray.map(el => (
        <p className={el.type == "start" ? "start-background-color" : "stop-background-color"}>
            <span style={{color: el.type == "start" ? "green" : "rgb(192, 33, 33)"}}>
                {el.type == "start" ? <i className="fa-solid fa-play fa-shake"></i> : <i className="fa-solid fa-stop"></i>}
            </span> 
            {el.date}
        </p>
    ))

    function handleClick() {

        setIsSelected(prev => !prev)
    }

    React.useEffect( ()=> {
        if (hasMounted.current) {
            const date = new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })

            setTimeDateArray(prev => [...prev, {date: date, type: isSelected ? "start" : "stop", timestamp: performance.now()}])
        }
        else {
            hasMounted.current = true;
        }

    }, [isSelected])

    // React.useEffect( ()=> {
    //     if (!isSelected) {
    //         setTotalTime(prev => prev + (
    //             timeDateArray[timeDateArray.length - 1].timestamp - timeDateArray[timeDateArray.length - 2].timestamp)
    //         )
    //     }
    // }, [timeDateArray])

    return(
        <tr className={isSelected ? 'selected' : ''}>
            <td>
                <button onClick={handleClick}>{!isSelected ? <i className="fa-solid fa-play fa-shake"></i> : <i className="fa-solid fa-stop"></i>}</button>
                <h4>Total: {totalTime}</h4>
            </td>
            <td>{timeDateList}</td>
            <td><input type="text" placeholder="Client name..."></input></td>
            <td><textarea placeholder="Add description here..."></textarea></td>
        </tr>
    )
}
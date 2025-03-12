const DoubleClicKEvent = () => {
    const doubleClick = () => {
        alert("I am Double Click.")
    }
    return (
        <div>
            <h1> Double Click Event </h1>
            <button onDoubleClick={doubleClick}> Double Click Me </button>
        </div>
    )
}
export default DoubleClicKEvent;
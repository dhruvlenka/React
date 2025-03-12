const InlineCSS = () => {
     //object
     
    let hiStyle = {
        color: "red",
        backgroundColor: "black",
    };

    return (
        <div>
            <h1 style={{backgroundColor: "red", color: "blue"}}> Inline CSS Example 1</h1>
            <h1 style={hiStyle}> Inline CSS Example 2 </h1>
            <div style={{height: "300px", width:"300px", backgroundColor: "yellow"}}> Container </div>
        </div>
    );
};
export default InlineCSS;
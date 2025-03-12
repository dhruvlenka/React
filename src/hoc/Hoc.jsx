const Hoc = (WrappedComp) => {
    let data = "hello child 2";
    
    return () => {
        return <WrappedComp data={data}/>
    }
}
export default Hoc;
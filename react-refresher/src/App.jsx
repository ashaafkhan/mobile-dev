import H1 from "./H1"
function App(){
    return (
        <div>
            {/* reusability */}
            <H1 title="Heading-1" desc= "i am your desc-01"/>
            <H1 title="Heading-2" desc="i am your desc-02"/>
            <H1 />
            <H1 />
        </div>
    )
}


export default App
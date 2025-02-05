import { useState } from "react";
function Home(){

let [name,setName] = useState("Swayam")
    function printSomething()
    {
        setName("thor") // this is asyncronous
        // when button click it change name to thor
        console.log(name); // and this will not work 
}

function mouse(){
    console.log("Mouse entered in Green");
}

    return (
        <>
        <div className="home" onMouseEnter={mouse}>HOME PAGE {name}
            <button onClick={printSomething}>Click me</button>
        </div>
        </>
    )
}

export default Home
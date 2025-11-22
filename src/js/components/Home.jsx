import React from "react";


const Semaforo = () => {
    const [encendido, setEncendido] = useState("red")
    const changeColor = (color) => {
        setEncendido(color)
    }
    return (
        <main>
            <div className="hanger"></div>
            <div className="box">
                <div
                    onClick={()=> changeColor("red")}
                    className={`red ${encendido == "red" ? "light-on" : ""}`}>
                </div>
                <div
                    onClick={() => changeColor("yellow")}
                    className={`yellow ${encendido == "yellow" ? "light-on" : ""}`}>
                </div>





































	
export default Home;
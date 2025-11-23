import React, {useState} from "react";


const Semaforo = () => {
    const [prendido, setPrendido] = useState("red")
    const changeColor = (color) => {
        setPrendido(color)
    }
    return (
        <main>
            <div className="hanger"></div>
            <div className="box">
                <div
                    onClick={()=> changeColor("red")}
                    className={`red ${prendido == "red" ? "light-on" : ""}`}>
                </div>
                <div
                    onClick={() => changeColor("yellow")}
                    className={`yellow ${prendido == "yellow" ? "light-on" : ""}`}>
                </div>
                 <div
                    onClick={() => changeColor("green")}
                    className={`green ${prendido == "green" ? "light-on" : ""}`}>
                </div>
                </div>
                </main>
                );

            };
            
    export default Semaforo;

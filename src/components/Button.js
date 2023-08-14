import { useState, useEffect } from "react";

function Button({ children, algorithm="none", onClick, clicked=false, textStyle, buttonStyle }) {

    const [ style, setStyle ] = useState({});

    function mouseEnterHandler() {

        setStyle(() => (
            {
                textColor: "black",
                backgroundColor: "#56BAB3",
                borderColor: "black"
            }
        ))

    }


    function mouseLeaveHandler() {

        if (clicked) {

            setStyle(() => (
                {
                    textColor: "black",
                    backgroundColor: "#56BAB3",
                    borderColor: "black"
                }
            ))

    
        } else {

            setStyle(() => (
                {
                    textColor: "#EDB2A7",
                    backgroundColor: "black",
                    borderColor: "#EDB2A7"
                }
            ))
            
        }

    }

    useEffect(() => {

        if (clicked) {

            setStyle(() => (
                {
                    textColor: "black",
                    backgroundColor: "#56BAB3",
                    borderColor: "black"
                }
            ))
    
        } else {
    
            setStyle(() => (
                {
                    textColor: "#EDB2A7",
                    backgroundColor: "black",
                    borderColor: "#EDB2A7"
                }
            ))
        }
    

    }, [clicked])


    return (
        <>
            <button onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} style={{backgroundColor: style.backgroundColor, border: `5px solid ${style.borderColor}`, marginLeft: "3%", marginRight: "3%", borderRadius: "5px", ...buttonStyle}} onClick={() => {onClick(algorithm)}}>
                <p style={{color: style.textColor, fontSize: "3rem", fontStyle: "bold", ...textStyle}}>{children}</p>
            </button>
        </>
    );

}

export default Button;
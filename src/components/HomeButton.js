import { useState } from "react";

function HomeButton({ icon }) {

    const [ color, setColor ] = useState("#EDB2A7")

    function mouseEnterHandler() {

        setColor(() => "#52A52E")

    }

    function mouseLeaveHandler() {

        setColor(() => "#EDB2A7")

    }

    return <>
    <a href={"https://www.uog.edu/research/university-libraries-digital-team"}>
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} style={{backgroundColor: color, height: "15vh", width: "7.5vw", position: "absolute", bottom: "7vh", left: "80vw", borderRadius: "75px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                {icon}
        </div>
    </a>
    </>
}

export default HomeButton;
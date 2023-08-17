import { useState } from "react";
import { useMediaQuery
 } from "@mui/material";
function HomeButton({ icon }) {

    const mediumDevice = useMediaQuery('(max-width: 1100px)');
    const mobileDevice = useMediaQuery('(max-width: 700px)');
    const mediumDeviceMaxHeight = useMediaQuery('(max-height: 1200px)');
    const mobileDeviceMaxHeight = useMediaQuery('(max-height: 600px)');

    const [ color, setColor ] = useState("#EDB2A7");

    function mouseEnterHandler() {

        setColor(() => "#52A52E")

    }

    function mouseLeaveHandler() {

        setColor(() => "#EDB2A7")

    }


    return <>
    <a href={"https://www.uog.edu/research/university-libraries-digital-team"}>
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} style={{backgroundColor: color, height: "100px", width: "100px", position: "fixed", bottom: mobileDeviceMaxHeight ? "0" : mediumDeviceMaxHeight ? "5%" : "7vh", left: mobileDevice ? "72.5%" : mediumDevice ? "80%" : "80vw", borderRadius: "75px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                {icon}
        </div>
    </a>
    </>
}

export default HomeButton;
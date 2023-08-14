import { useState, cloneElement, useContext, useEffect } from "react";
import AlgorithmsContext from "../store/Algorithms";

function UploadBox({ isFirst=false, innerText, dragAndDropComponent, areMatching=false }) {

    const [ fileName, setFileName ] = useState("");
    const [ fileHash, setFileHash ] = useState("");
    const algorithmsCtx = useContext(AlgorithmsContext);

    useEffect(() => {

        setFileName();
        setFileHash();

    }, [algorithmsCtx.algorithm]);

    useEffect(() => {

        return () => {

            setFileName();
            setFileHash();
            
        }

    }, [])

    function onSuccessfulFileUpload(name) {

        setFileName(name);

    }

    function onSuccessfulFileHash(hash) {

        setFileHash(hash);

    }

    return <>
        <div style={{border: "5px dashed gray", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "10px", paddingTop: "6%", paddingBottom: "6%", paddingLeft: "10%", paddingRight: "10%", marginLeft: isFirst? "0%" : "5%", marginRight: "2%", marginTop: "2%", position: "relative", maxWidth: "30%", maxHeight: "17.5%"}}>
            {fileName ? <p style={{color: "white", textAlign: "center", overflow: "hidden", whiteSpace: "pre-line"}}>{fileName}</p> : innerText}
            {fileHash ? <p style={{color: areMatching? "#9BD6C4" : "#E599BA", textAlign: "center",  whiteSpace: "pre-line"}}>{fileHash}</p> : fileName? <p style={{color: "white", textAlign: "center"}}>No hash generated. Select an algorithm.</p> : null}
            {cloneElement(dragAndDropComponent, {
                onSuccessfulFileUpload: (name) => {onSuccessfulFileUpload(name)},
                onSuccessfulFileHash: (hash) => {onSuccessfulFileHash(hash)}
            })}
        </div>
    </>


}

export default UploadBox;
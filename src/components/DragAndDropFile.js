import { useContext, useState, useEffect, useRef } from "react";
import AlgorithmsContext from "../store/Algorithms";

function DragAndDropFile({ index, onSuccessfulFileUpload, onSuccessfulFileHash }) {

    const [ hash, setHash ] = useState();
    const [ fileName, setFileName ] = useState();
    const algorithmsCtx = useContext(AlgorithmsContext);
    const fileInput = useRef();

    useEffect(() => {

        fileInput.current.value = null;

    }, [algorithmsCtx.algorithm])

    useEffect(() => {

        setHash(() => algorithmsCtx.comparisons[index])

    }, [algorithmsCtx.comparisons, index])

    useEffect(() => {

        onSuccessfulFileHash(hash);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hash])

    function inputHandler(e) {

        algorithmsCtx.calculateHash(e.target.files[0], index)
        onSuccessfulFileUpload(e.target.files[0].name);
        setFileName(() => e.target.files[0].name)

    }

    return <>
        <input ref={fileInput} onInput={(e) => {inputHandler(e)}} type="file" style={{height: "100%", width: "100%", position: "absolute", overflow: "hidden", opacity: "0.00000000000001"}}/>
    </>

}

export default DragAndDropFile
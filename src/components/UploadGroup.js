import { useState, useEffect, useContext, cloneElement, Children } from "react";
import AlgorithmsContext from "../store/Algorithms";
import useMediaQuery from '@mui/material/useMediaQuery';

function UploadGroup({ children, header }) {

    const algorithmsCtx = useContext(AlgorithmsContext);
    const [ modifiedChildren, setModifiedChildren ] = useState(children);

    const mediumDevice = useMediaQuery('(max-width: 1100px)');
    const mobileDevice = useMediaQuery('(max-width: 700px)');
    const mobileDeviceMaxHeight = useMediaQuery('(max-height: 600px)');

    useEffect(() => {

        if (Children.count(children) >= 2) {

            for (let i = 0; i < children.length-1; i++) {

                const hashValueFromChild = algorithmsCtx.comparisons[children[i].props.dragAndDropComponent.props.index];
                const nextHashValueFromChild = algorithmsCtx.comparisons[children[i+1].props.dragAndDropComponent.props.index];
    
                if (hashValueFromChild !== undefined && nextHashValueFromChild !== undefined) {
    
                    if (hashValueFromChild === nextHashValueFromChild) {
                       
                       setModifiedChildren([]);
                       setModifiedChildren((prev) => ([...prev, cloneElement(children[i], {areMatching: true})]));
                       setModifiedChildren((prev) => ([...prev, cloneElement(children[i+1], {areMatching: true})]));
                       console.log(modifiedChildren);
    
                    } else {
                        
                        setModifiedChildren([]);
                        setModifiedChildren((prev) => ([...prev, cloneElement(children[i], {areMatching: false})]))
                        setModifiedChildren((prev) => ([...prev, cloneElement(children[i+1], {areMatching: false})]))
                    }
    
                }
            }

        } else {

            setModifiedChildren(() => (<p>Missing at least 2 child upload box elements.</p>))

        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [algorithmsCtx.comparisons])

    return <>
    {header}
    <div style={{display: "flex", flexDirection: mobileDeviceMaxHeight || mobileDevice || mediumDevice ? "column" : "row", justifyContent: "flex-start", marginLeft: "5%"}}>
        {modifiedChildren}
    </div>
    </>

}

export default UploadGroup;
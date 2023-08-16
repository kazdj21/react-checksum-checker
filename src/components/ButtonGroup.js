import { useState, cloneElement, useEffect, useContext, Children } from "react";
import AlgorithmsContext from "../store/Algorithms";
import useMediaQuery from '@mui/material/useMediaQuery';

function ButtonGroup({ children, text, containerStyle, textStyle, buttonStyle }) {

    const [ modifiedChildren, setModifiedChildren ] = useState();
    const algorithmsCtx = useContext(AlgorithmsContext);

    const mediumDevice = useMediaQuery('(max-width: 1200px)');
    const mobileDevice = useMediaQuery('(max-width: 600px)');

    function onClickHandler(algorithm) {

        setModifiedChildren((prev) => (

            prev.map((child) => {

                if (child.props.algorithm === algorithm) {
                    console.log("clicked the following: " + algorithm);
                    algorithmsCtx.changeAlgorithmTo(algorithm);
                    return cloneElement(child, {
                        clicked: true
                    })
                } else {
                    return cloneElement(child, {
                        key: child.props.algorithm,
                        onClick: onClickHandler,
                        clicked: false
                    });
                }

            })

        ))
        
    }

    useEffect(() => {

        if (Children.count(children) <= 0) {

            setModifiedChildren(() => {

                return <p>No buttons provided.</p>

            })


        } else if (Children.count(children) === 1) {

            setModifiedChildren(() => {

                const child = Children.only(children);

                return cloneElement(child, {
                    key: child.props.algorithm,
                    onClick: onClickHandler
                })

            })

        } else {

            setModifiedChildren(() => (children.map((child) => {

                return cloneElement(child, {
                    key: child.props.algorithm,
                    onClick: onClickHandler
                });
        
            })));

        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children])


    return <>
    <div style={{display: "flex", flexDirection: mobileDevice ? "column" : "row", paddingLeft: "5%", paddingTop: "3%", paddingBottom: "1%", width: "75vw", ...containerStyle}}>
        <div style={{flex: "2", borderBottom: mobileDevice ? "none" : "1px solid white", paddingBottom: "5%"}}>
            <h2 style={{color: "white", fontStyle: "italic", textAlign: "left", ...textStyle}}>{text}</h2>
        </div>
        <div style={{flex: "2", paddingLeft: mobileDevice ? "0" : "5%", display: "flex", justifyContent: mobileDevice ? "flex-start" : "space-around", paddingBottom: "5%", borderBottom: "1px solid white", ...buttonStyle}}>
            {modifiedChildren}
        </div>
        <div style={{flex: "2", borderBottom: "1px solid white"}}></div>
    </div>     
    </>

}

export default ButtonGroup;
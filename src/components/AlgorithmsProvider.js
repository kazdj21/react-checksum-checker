import { useState, useEffect } from "react";
import AlgorithmsContext from "../store/Algorithms";
import md5 from "md5";
import sha1 from "crypto-js/sha1";

function AlgorithmsProvider({ children }) {

    const [ selectedAlgorithm, setSelectedAlgorithm ] = useState("");
    const [ comparisonArray, setComparisonArray ] = useState([]);

    useEffect(() => {

        console.log(comparisonArray);

    }, [comparisonArray]);

    useEffect(() => {

        setComparisonArray([]);

    }, [selectedAlgorithm]);

    function changeAlgorithmTo(newAlgorithm) {

        setSelectedAlgorithm(() => (newAlgorithm))

    }

    function getFileBufferAsString(file) {

        return new Promise((resolve, reject) => {

            const fileReader = new FileReader();

            fileReader.onload = function (event) {
                resolve(event.target.result);
              };
        
            fileReader.onerror = function (error) {
                reject(error);
              };
            
            const fileContents = fileReader.readAsBinaryString(file.slice(0, 10 * 1024 * 1024));
            return fileContents;

        })


    }

    function calculateHash(file, index) {

        getFileBufferAsString(file).then((data) => {

            switch (selectedAlgorithm) {

                case "MD5":
                    let md5Hash = md5(data);
                    setComparisonArray((prev) => {

                        let newArray = [...prev];
                        newArray[index] = md5Hash;
                        return newArray;

                    });
                    return md5Hash;
                case "SHA1":
                    let sha1Hash = sha1(data);
                    console.log(sha1Hash.toString());
                    setComparisonArray((prev) => {

                        let newArray = [...prev];
                        newArray[index] = sha1Hash.toString();
                        return newArray;

                    });
                    return sha1Hash;
                default:
                    return "error";
    
            }

        });

    }


    const algorithmsCtxValue = {
        algorithm: selectedAlgorithm,
        comparisons: comparisonArray,
        getFileBufferAsString,
        changeAlgorithmTo,
        calculateHash
    }

    return <>
        <AlgorithmsContext.Provider value={algorithmsCtxValue}>
            {children}
        </AlgorithmsContext.Provider>
    </>


}

export default AlgorithmsProvider;
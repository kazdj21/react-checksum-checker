import { createContext } from "react";

const AlgorithmsContext = createContext({
    algorithm: "",
    comparisons: [],
    changeAlgorithmTo: (algorithm) => {this.algorithm = algorithm},
    calculateHash: (file) => (file)
});

export default AlgorithmsContext;


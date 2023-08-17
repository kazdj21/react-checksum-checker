import Header from "./components/Header";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import AlgorithmsProvider from "./components/AlgorithmsProvider";
import HomeButton from "./components/HomeButton";

import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import { createPortal } from "react-dom"

import { useState } from "react";
import PremadeUploadGroup from "./components/PremadeUploadGroup";

import { Button as MUIButton } from "@mui/material";

function App() {

  const [ uploadGroupArr, setUploadGroupArr ] = useState([<PremadeUploadGroup index={0}/>])

  function incrementUploadGroupAmt() {

    setUploadGroupArr((prev) => [...prev, <PremadeUploadGroup title="Input your additional files here" index={(prev.length + 1) * 2}/>])

  }

  function decrementUploadGroupAmt() {

    setUploadGroupArr((prev) => {

      let newArr = [...prev];
      newArr.pop();
      return newArr;

    })

  }

  return (
    <>
      <div>
        <Header textStyle={{fontFamily: "Helvetica, sans-serif"}} containerStyle={{marginTop: "1%", marginLeft: "5%"}} >Checksum Checker</Header>
        <AlgorithmsProvider>
          <ButtonGroup text="1. Choose an Algorithm." textStyle={{fontFamily: "Helvetica, sans-serif"}}>
            <Button algorithm="MD5">MD5</Button>
            <Button algorithm="SHA1">SHA1</Button>
          </ButtonGroup>
          {uploadGroupArr}
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "1%"}}>
            {uploadGroupArr.length >= 10 ? true : <MUIButton onClick={incrementUploadGroupAmt} variant="contained" startIcon={<AddIcon /> } >Add</MUIButton>}
            {uploadGroupArr.length <= 1 ? null : <MUIButton onClick={decrementUploadGroupAmt} variant="contained" startIcon={<DeleteIcon />}>Delete</MUIButton>}
          </div>
        </AlgorithmsProvider>
        {createPortal(<HomeButton icon={<HomeIcon sx={{color: "black", fontSize: 60}} />}/>, document.getElementById("portal"))}
      </div>
    </>
    
  );
}

export default App;

import Header from "./components/Header";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import UploadBox from "./components/UploadBox";
import UploadGroup from "./components/UploadGroup";
import DragAndDropFile from "./components/DragAndDropFile";
import AlgorithmsProvider from "./components/AlgorithmsProvider";
import HomeButton from "./components/HomeButton";

import HomeIcon from '@mui/icons-material/Home';

import { createPortal } from "react-dom"

function App() {


  return (
    <>
      <div>
        <Header textStyle={{fontFamily: "Helvetica, sans-serif"}} containerStyle={{marginTop: "1%", marginLeft: "5%"}} >Checksum Checker</Header>
        <AlgorithmsProvider>
          <ButtonGroup text="1. Choose an Algorithm." textStyle={{fontFamily: "Helvetica, sans-serif"}}>
            <Button algorithm="MD5">MD5</Button>
            <Button algorithm="SHA1">SHA1</Button>
          </ButtonGroup>
          <UploadGroup header={
            <div style={{display: "flex", flexDirection: "row", marginLeft: "5%", justifyContent: "flex-start", marginTop: "2.5%"}}>
              <h2 style={{color: "white", flex: 1, fontStyle: "italic"}}>2. Upload Your Files in Each Box (i.e. an original followed by a copy).</h2>
            </div>
          }>
            <UploadBox isFirst={true} innerText={<p style={{color: "white", textAlign: "center", whiteSpace: "pre-line"}}>Upload <br /> or <span style={{opacity: "0.9", fontStyle: "italic", color: "gray"}}>Drag and Drop Here</span></p>} dragAndDropComponent={<DragAndDropFile index={0} />}/>
            <UploadBox innerText={<p style={{color: "white", textAlign: "center",  whiteSpace: "pre-line"}}>Upload <br /> or <span style={{opacity: "0.9", fontStyle: "italic", color: "gray"}}>Drag and Drop Here</span></p>} dragAndDropComponent={<DragAndDropFile index={1}/>} />
          </UploadGroup>
        </AlgorithmsProvider>
        {createPortal(<HomeButton icon={<HomeIcon  sx={{color: "black", fontSize: 60}}/>}/>, document.getElementById("portal"))}
      </div>
    </>
    
  );
}

export default App;

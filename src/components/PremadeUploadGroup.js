import UploadBox from "./UploadBox";
import UploadGroup from "./UploadGroup";
import DragAndDropFile from "./DragAndDropFile";


function PremadeUploadGroup({ index, title }) {

    return <>
          <UploadGroup header={
            <div style={{display: "flex", flexDirection: "row", marginLeft: "5%", justifyContent: "flex-start", marginTop: "2.5%"}}>
              <h2 style={{color: "white", flex: 1, fontStyle: "italic"}}>{title ? title : '2. Upload Your Files in Each Box (i.e. an original followed by a copy).'}</h2>
            </div>
          }>
            <UploadBox isFirst={true} innerText={<p style={{color: "white", textAlign: "center", whiteSpace: "pre-line"}}>Upload <br /> or <span style={{opacity: "0.9", fontStyle: "italic", color: "gray"}}>Drag and Drop Here</span></p>} dragAndDropComponent={<DragAndDropFile index={index} />}/>
            <UploadBox innerText={<p style={{color: "white", textAlign: "center",  whiteSpace: "pre-line"}}>Upload <br /> or <span style={{opacity: "0.9", fontStyle: "italic", color: "gray"}}>Drag and Drop Here</span></p>} dragAndDropComponent={<DragAndDropFile index={index+1}/>} />
          </UploadGroup>

    </>
}

export default PremadeUploadGroup;
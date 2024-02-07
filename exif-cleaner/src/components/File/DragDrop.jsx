import React, {useState} from 'react';
import {FileUploader} from 'react-drag-drop-files';
import {getExif} from "../../utils/MetaDataUtils";
import './DragDrop.css';
import Metadata from "../Metadata/Metadata";


const fileTypes = ['JPG', 'JPEG', 'PNG', 'GIF', 'BMP'];

const DragDrop = data => {
    const [file, setFile] = useState(null);
    const [metadata, setMetadata] = useState([]);
    const [loading, setLoading] = useState(true)

    const handleChange = async (file) => {
        setLoading(false)
        setFile(file);
        setMetadata(await getExif(file));
        setLoading(true)
    };

    if(loading === false) return

    return (
        <div className="layout__uploader">
            <div className="uploader__file">
                <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>
            </div>
            {/*<p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>*/}
            <Metadata file={file} metadata={metadata}/>
        </div>

    )
}
export default DragDrop

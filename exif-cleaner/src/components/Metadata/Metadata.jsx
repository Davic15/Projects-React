import React, {useEffect, useState} from 'react';
import './Metadata.css';

const Metadata = ({file, metadata}) => {
    const [parseData, setParseData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
        getMetadataDataFormatted();
        setLoading(true)
    }, [metadata, file]);

    const getMetadataDataFormatted = () => {
        const data = (metadata.map((value) => {
            return {key: value.key, description: value.description}
        }))
        setParseData(data)
    }

    if(loading === false) return

    return (
        <div className="layout__metadata">
            <h1>Metadata</h1>
            { parseData.map((value) => {
                return (
                    <div>
                        <p>{value.description}</p>
                        <p>{value.key}</p>
                    </div>
                )
            }) }
        </div>

    )
}
export default Metadata

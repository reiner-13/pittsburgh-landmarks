import React, { useEffect, useState } from 'react';
import LandmarkFinder from '../apis/LandmarkFinder';

const LandmarkInfo = ({ landmarkName }) => {
    const [landmarkId, setLandmarkId] = useState(null);
    const [landmarkInfo, setLandmarkInfo] = useState(null);
    useEffect(() => {
        const getLandmarkId = async () => {
            console.log(landmarkName);
            try {
                console.log(landmarkName);
                const response = await LandmarkFinder.get(`/?name=${landmarkName}`);
                setLandmarkId(response.data.data.landmarks[0].id);
            }
            catch (err) {
                console.log(err);
            }
        };
        if (landmarkName) {
            getLandmarkId();
        }
        
        
    }, [landmarkName]);

    useEffect(() => {
        const getLandmarkInfo = async () => {
            try {
                const response = await LandmarkFinder.get(`/${landmarkId}/info`);
                const llamaResponse = response.data.data.response;
                const llamaResponseHTML = {__html:llamaResponse}
                setLandmarkInfo(llamaResponseHTML);
            }
            catch (err) {
                console.log(err);
            }
        };
        if (landmarkId) {
            getLandmarkInfo();
        }
        
    }, [landmarkId]);

    return (
        <div className="col-4 mx-auto my-5 p-3 border border-dark border-5 bg-warning">
            {landmarkName ? (
                <div>
                    <div dangerouslySetInnerHTML={landmarkInfo}></div>
                </div>
            ) : (
                <p>Select a historic landmark to learn about it!</p>
            )}
        </div>
    );
};

export default LandmarkInfo;
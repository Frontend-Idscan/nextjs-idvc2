import React, { useEffect } from 'react';
import '@idscan/idvc2/dist/css/idvc.css';
import {getDefaultWebLibConfiguration} from '../Lib';

function IDVCComponent() {
    useEffect(() => {
        const config = getDefaultWebLibConfiguration();
        import('@idscan/idvc2').then(IDVC => {
            const widget = new IDVC.idvc.default(config);
        })
    }, []);

    return <div></div>;
}

export default IDVCComponent;

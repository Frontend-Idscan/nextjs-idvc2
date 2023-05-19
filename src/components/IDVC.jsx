import React from 'react';
import IDVC from '@idscan/idvc2';
import '@idscan/idvc2/dist/css/idvc.css';
import {getDefaultWebLibConfiguration} from '../Lib';

class IDVCComponent extends React.Component {
    render() {
        const config = getDefaultWebLibConfiguration();
        console.log('config.licenseKey', config.licenseKey);
        const widget = new IDVC(config);
        return '';
    }
}

export default IDVCComponent;


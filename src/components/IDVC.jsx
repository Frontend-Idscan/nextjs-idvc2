import React, { useEffect } from 'react';
import '@idscan/idvc2/dist/css/idvc.css';
import {getDefaultWebLibConfiguration} from '../Lib';

const IDVCComponent = () => {
    useEffect(() => {

      let script = document.createElement('script');
      script.src = 'https://neurons.cdn.idscan.net/2.8.5-next/idvc.js';

      script.onload = function () {
        console.log('Script has been loaded and executed');
        const config = getDefaultWebLibConfiguration();
        const widget = new window.IDVC(config);
      };

      script.onerror = function (e) {
        console.log('Error loading script', e);
      };

      document.head.appendChild(script);
      // const config = getDefaultWebLibConfiguration();
      // const widget = new window.IDVC(config);
        // import('@idscan/idvc2').then(IDVC => {
        //     const widget = new IDVC.idvc.default(config);
        // })
    }, []);

    return <div></div>;
}

export default IDVCComponent;

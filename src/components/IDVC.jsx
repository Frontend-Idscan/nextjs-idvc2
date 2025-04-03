import React, { useEffect } from 'react';
import {getDefaultWebLibConfiguration} from '../Lib';

const IDVCComponent = () => {
    useEffect(() => {
      const scriptLink = 'https://neurons.cdn.idscan.net/3.0.0-next/idvc.js';
      // const stylesLink = 'https://neurons.cdn.idscan.net/2.12.2-next/idvc.css'

      let script = document.createElement('script');
      script.src = scriptLink;

      script.onload = function () {
        console.log('Script has been loaded and executed');
        const config = getDefaultWebLibConfiguration();
        const widget = new window.IDVC(config);
      };

      script.onerror = function (e) {
        console.log('Error loading script', e);
      };

      document.head.appendChild(script);

      // let link = document.createElement('link');
      // link.rel = 'stylesheet';
      // link.href = stylesLink;
      // link.onload = function () {
      //   console.log('Styles have been loaded');
      // };
      // link.onerror = function (e) {
      //   console.log('Error loading styles', e);
      // };
      // document.head.appendChild(link);

    }, []);

    return <div></div>;
}

export default IDVCComponent;

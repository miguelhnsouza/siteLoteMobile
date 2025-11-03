import { useState, useEffect } from 'react';
import { getStoredUTMParameters, addUTMToUrl } from '../services/meta/metaConversion';

export function useUTM() {
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    const storedUTM = getStoredUTMParameters();
    setUtmParams(storedUTM);
  }, []);

  const addUTMToLink = (url) => {
    return addUTMToUrl(url, utmParams);
  };

  return {
    utmParams,
    addUTMToLink,
    hasUTM: Object.keys(utmParams).length > 0
  };
}
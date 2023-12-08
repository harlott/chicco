import dynamic from "next/dynamic";
import { useEffect } from 'react';
import DECAP_CMS_CONFIG from "../app/lib/DecapCmsConfig";

const CMS = dynamic(
  () => {
      return import("decap-cms-app")
         .then((mod) =>  {
            mod.default.init({ config: DECAP_CMS_CONFIG });
         });
   },{ loading: () => null, ssr: false }
);

const Admin = () => {
  useEffect(() => {
    window.CMS_MANUAL_INIT = true;
  }, []);
  return <CMS />
  
};

export default Admin;

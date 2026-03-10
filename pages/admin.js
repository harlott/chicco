import dynamic from "next/dynamic";
import { useEffect } from 'react';
import DECAP_CMS_CONFIG from "../app/lib/DecapCmsConfig";
import HomePage from '../app/ui/HomePage.jsx';
const CMS = dynamic(
  () => {
      return import("decap-cms-app")
         .then((mod) =>  {
            mod.default.init({ config: DECAP_CMS_CONFIG });
           CMS.registerPreviewStyle("/styles/foundation.css");
           CMS.registerPreviewStyle("/styles/style.css");
           CMS.registerPreviewStyle("/styles/patch.css");
           CMS.registerPreviewStyle("/styles/fontello.css");

           CMS.registerPreviewTemplate("pages", ({ entry, widgetFor }) => {
             const data = entry.get("data").toJS()
             return <HomePage data={data} body={widgetFor("body")} />
           });
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

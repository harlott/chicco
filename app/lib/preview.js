import CMS from "decap-cms-app"
import { HomePage } from "../ui/HomePage"

CMS.registerPreviewStyle("/styles/foundation.css");
CMS.registerPreviewStyle("/styles/style.css");
CMS.registerPreviewStyle("/styles/patch.css");
CMS.registerPreviewStyle("/styles/fontello.css");

CMS.registerPreviewTemplate("pages", ({ entry, widgetFor }) => {
  const data = entry.get("data").toJS()
  return <HomePage data={data} body={widgetFor("body")} />
});

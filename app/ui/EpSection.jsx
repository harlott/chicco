import ReactMarkdown from "react-markdown";

export default function EpSection({
  pretitle,
  title,
  text,
  image,
  content
}){
  return (
    <div className="full">
      <div className="row">
        <div className="large-8 columns large-centered">
          <div className="section-title">
            <p className="small-title">{pretitle}</p>
            <h2>
              {title}
            </h2>
            <div className="four spacing"></div>
            <img src={image || '/img/chicco_logo_120x161.png'} alt="" />
            <p className="big-size">{text}</p>
            <div className="four spacing"></div>
            <ReactMarkdown>{content}</ReactMarkdown>
            <div className="four spacing"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
